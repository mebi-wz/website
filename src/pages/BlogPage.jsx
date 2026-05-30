import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Tag, MessageSquare, WifiOff, RefreshCw } from 'lucide-react'

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchPosts = async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`, {
          signal: controller.signal
        })
        const data = await response.json()
        if (response.ok) {
          setPosts(data)
        } else {
          setError('Failed to load blog posts. Please try again later.')
        }
      } catch (err) {
        if (err.name === 'AbortError') {
          setError('Blog fetch timed out. The server took too long to respond.')
        } else {
          setError('Could not connect to the server. Please check your connection and try again.')
        }
      } finally {
        clearTimeout(timeout)
        setLoading(false)
      }
    }

    fetchPosts()
  }, []);

  const getImageUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http') || url.startsWith('/')) return url;
    return `${import.meta.env.VITE_API_URL}${url}`;
  }

  return (
    <div className="blog-page" style={{ paddingTop: '8rem', paddingBottom: '6rem', backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      <div className="container">
        <div className="blog-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="premium-badge" style={{ display: 'inline-block', padding: '0.5rem 1.25rem', background: 'linear-gradient(90deg, rgba(94, 158, 158, 0.1) 0%, rgba(94, 158, 158, 0.0) 100%)', borderLeft: '3px solid var(--accent-primary)', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>LATEST INSIGHTS</div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Our <span style={{ background: 'linear-gradient(135deg, var(--accent-primary) 0%, #89c2c2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Blog</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Thoughts, news, and technical deep-dives from the experts at Marsbes Tech. We share our experiences in scaling technology for the modern enterprise.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '6rem 0', gap: '1.5rem' }}>
            <div style={{ width: '48px', height: '48px', border: '3px solid var(--border-color)', borderTopColor: 'var(--accent-primary)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Fetching latest posts...</p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem', gap: '1.5rem', textAlign: 'center' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(239,68,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <WifiOff size={32} color="#ef4444" />
            </div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', margin: 0 }}>Blog Unavailable</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', lineHeight: '1.7', margin: 0 }}>{error}</p>
            <button
              onClick={() => window.location.reload()}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', background: 'var(--accent-primary)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '0.95rem' }}
            >
              <RefreshCw size={16} /> Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && posts.length === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem', gap: '1rem', textAlign: 'center' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(94,158,158,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Tag size={32} color="var(--accent-primary)" />
            </div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', fontFamily: 'var(--font-heading)', margin: 0 }}>No Posts Yet</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Check back soon — we're working on fresh content.</p>
          </div>
        )}

        <div className="blog-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem'
        }}>

          {posts.map(post => (
            <div key={post.id} className="blog-card glass-card" style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              padding: '1.5rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'var(--accent-primary)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              {/* Image Container with Overlay Category */}
              <div style={{
                width: '100%',
                height: '220px',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                position: 'relative'
              }}>
                {post.imageUrl ? (
                  <img
                    src={getImageUrl(post.imageUrl)}
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #1a1c23, #2d3139)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Tag size={40} color="var(--accent-primary)" style={{ opacity: 0.2 }} />
                  </div>
                )}

                {/* Overlay Category */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  fontSize: '0.75rem',
                  color: '#fff',
                  fontWeight: '700',
                  padding: '0.4rem 0.8rem',
                  backgroundColor: 'var(--accent-primary)',
                  borderRadius: '6px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {post.category}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calendar size={14} /> {post.date}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MessageSquare size={14} /> {post.readTime}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                lineHeight: '1.4',
                fontWeight: '700'
              }}>
                {post.title}
              </h3>

              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                flexGrow: 1,
                marginBottom: '1.5rem',
                display: '-webkit-box',
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {post.excerpt}
              </p>

              <div style={{
                borderTop: '1px solid var(--border-color)',
                paddingTop: '1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem', fontWeight: '700' }}>
                    {post.author ? post.author.charAt(0) : 'M'}
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>{post.author}</span>
                </div>

                <Link to="/contact" style={{
                  color: 'var(--accent-primary)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage