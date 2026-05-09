import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag, MessageSquare } from 'lucide-react'

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`)
        const data = await response.json()
        if (response.ok) {
          setPosts(data)
        } else {
          setError(data.error)
        }
      } catch (err) {
        setError('Failed to load posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, []);

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

        <div className="blog-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {loading && <p style={{ color: 'var(--text-secondary)' }}>Loading posts...</p>}
          {error && <p style={{ color: '#ef4444' }}>{error}</p>}
          {!loading && !error && posts.length === 0 && <p style={{ color: 'var(--text-secondary)' }}>No posts available yet.</p>}
          
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
                    src={`${import.meta.env.VITE_API_URL}${post.imageUrl}`} 
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
