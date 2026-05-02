import React from 'react'
import { Link } from 'react-router-dom'

const BlogPage = () => {
  return (
    <div className="container" style={{ padding: '10rem 0', minHeight: '80vh', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'var(--text-primary)' }}>Our Blog</h1>
      <p style={{ color: 'var(--text-secondary)' }}>Welcome to our technology blog! Content is currently being curated.</p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Return Home</Link>
    </div>
  )
}

export default BlogPage
