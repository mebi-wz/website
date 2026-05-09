import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'

const dummyPosts = [
  {
    id: 1,
    title: 'The Future of ERPs in Ethiopian Enterprises',
    excerpt: 'Discover how modern, cloud-based ERP systems are transforming the way businesses operate in East Africa.',
    category: 'ERP Solutions',
    author: 'Marsbes Tech',
    date: 'May 1, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'AI in African Business: Beyond the Hype',
    excerpt: 'Practical applications of Artificial Intelligence that are already generating ROI for local businesses today.',
    category: 'Artificial Intelligence',
    author: 'Marsbes Tech',
    date: 'April 24, 2024',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Cross-Platform Mobile Dev: Flutter vs. React Native',
    excerpt: 'A technical deep-dive into choosing the right framework for your next enterprise mobile application.',
    category: 'Development',
    author: 'Marsbes Tech',
    date: 'April 15, 2024',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Securing Your E-Commerce Platform',
    excerpt: 'Essential cybersecurity measures every online retailer must implement to protect customer data.',
    category: 'Cybersecurity',
    author: 'Marsbes Tech',
    date: 'April 2, 2024',
    readTime: '7 min read'
  },
  {
    id: 5,
    title: 'Integrating Telebirr: A Developer\'s Guide',
    excerpt: 'Step-by-step instructions on seamlessly integrating local payment gateways into your digital storefront.',
    category: 'E-Commerce',
    author: 'Marsbes Tech',
    date: 'March 28, 2024',
    readTime: '10 min read'
  },
  {
    id: 6,
    title: 'The Impact of Gamification in Corporate Training',
    excerpt: 'How interactive game development is reshaping employee onboarding and continued learning programs.',
    category: 'Game Development',
    author: 'Marsbes Tech',
    date: 'March 14, 2024',
    readTime: '4 min read'
  }
];

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page" style={{ paddingTop: '8rem', paddingBottom: '6rem', backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      <div className="container">
        <div className="blog-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="premium-badge" style={{ display: 'inline-block', padding: '0.5rem 1.25rem', background: 'linear-gradient(90deg, rgba(94, 158, 158, 0.1) 0%, rgba(94, 158, 158, 0.0) 100%)', borderLeft: '3px solid var(--accent-primary)', color: 'var(--accent-primary)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>LATEST INSIGHTS</div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Our <span style={{ background: 'linear-gradient(135deg, var(--accent-primary) 0%, #a2e85e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Blog</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Thoughts, news, and technical deep-dives from the experts at Marsbes Tech. We share our experiences in scaling technology for the modern enterprise.
          </p>
        </div>

        <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {dummyPosts.map(post => (
            <div key={post.id} className="blog-card glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '2rem', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.borderColor = 'rgba(94, 158, 158, 0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem', backgroundColor: 'rgba(94, 158, 158, 0.1)', borderRadius: '20px' }}>
                  <Tag size={12} /> {post.category}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{post.readTime}</span>
              </div>
              
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: '1.4' }}>
                {post.title}
              </h3>
              
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '2rem' }}>
                {post.excerpt}
              </p>
              
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={14}/> {post.author}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.3rem' }}><Calendar size={12}/> {post.date}</span>
                </div>
                <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'rgba(94, 158, 158, 0.1)', color: 'var(--accent-primary)', transition: 'all 0.3s ease' }} 
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-primary)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(94, 158, 158, 0.1)'; e.currentTarget.style.color = 'var(--accent-primary)'; }}
                >
                  <ArrowRight size={20} />
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
