import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, MessageSquare, Tag, WifiOff, RefreshCw } from 'lucide-react'

const BlogDetailPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const fetchPost = async () => {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 8000)
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}`, {
          signal: controller.signal
        })
        const data = await response.json()
        if (response.ok) {
          setPost(data)
        } else {
          setError(data.error || 'Post not found.')
        }
      } catch (err) {
        if (err.name === 'AbortError') {
          setError('Request timed out. The server took too long to respond.')
        } else {
          setError('Could not load this post. Please check your connection.')
        }
      } finally {
        clearTimeout(timeout)
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])

  const getImageUrl = (url) => {
    if (!url) return null
    if (url.startsWith('http')) return url
    return `${import.meta.env.VITE_API_URL}${url}`
  }

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '6rem', backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Back link */}
        <Link
          to="/blog"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '2.5rem', textDecoration: 'none', fontSize: '0.95rem' }}
        >
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        {/* Loading */}
        {loading && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '6rem 0', gap: '1.5rem' }}>
            <div style={{ width: '48px', height: '48px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent-primary)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
            <p style={{ color: 'var(--text-secondary)' }}>Loading post...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem', gap: '1.5rem', textAlign: 'center' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(239,68,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <WifiOff size={32} color="#ef4444" />
            </div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', margin: 0 }}>Post Unavailable</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', lineHeight: '1.7', margin: 0 }}>{error}</p>
            <button
              onClick={() => window.location.reload()}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', background: 'var(--accent-primary)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
            >
              <RefreshCw size={16} /> Try Again
            </button>
          </div>
        )}

        {/* Post Content */}
        {!loading && post && (
          <article>
            {/* Category badge */}
            {post.category && (
              <div style={{ display: 'inline-block', padding: '0.4rem 1rem', backgroundColor: 'var(--accent-primary)', color: '#fff', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                {post.category}
              </div>
            )}

            {/* Title */}
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--text-primary)', lineHeight: '1.25', marginBottom: '1.25rem' }}>
              {post.title}
            </h1>

            {/* Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={15} /> {post.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MessageSquare size={15} /> {post.readTime}
              </span>
              {post.author && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.75rem', fontWeight: '700' }}>
                    {post.author.charAt(0)}
                  </div>
                  {post.author}
                </span>
              )}
            </div>

            {/* Hero image */}
            {post.imageUrl && (
              <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '3rem', maxHeight: '480px' }}>
                <img
                  src={getImageUrl(post.imageUrl)}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            )}

            {/* Divider */}
            <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', marginBottom: '2.5rem' }} />

            {/* Full content */}
            <div
              className="blog-content"
              style={{ color: 'var(--text-secondary)', lineHeight: '1.85', fontSize: '1.05rem' }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Footer divider */}
            <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '3rem 0 2rem' }} />

            <Link
              to="/blog"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: '600', textDecoration: 'none' }}
            >
              <ArrowLeft size={18} /> Back to all posts
            </Link>
          </article>
        )}
      </div>
    </div>
  )
}

export default BlogDetailPage
