import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const AdminPostEditor = () => {
  const { id } = useParams()
  const isEditing = !!id
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    category: '',
    author: 'Marsbes Tech',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    readTime: '5 min read',
    excerpt: '',
    content: ''
  })
  
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [loading, setLoading] = useState(isEditing)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isEditing) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}`)
          const data = await response.json()
          if (response.ok) {
            setForm(data)
          } else {
            setError(data.error)
          }
        } catch (err) {
          setError('Failed to fetch post details')
        } finally {
          setLoading(false)
        }
      }
      fetchPost()
    }
  }, [id, isEditing])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setImageFile(file)
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    } else {
      setImagePreview(null)
    }
  }

  // Resolve the current image URL for preview
  const getCurrentImageUrl = () => {
    if (imagePreview) return imagePreview
    if (!form.imageUrl) return null
    if (form.imageUrl.startsWith('http') || form.imageUrl.startsWith('/')) {
      return form.imageUrl.startsWith('/')
        ? `${import.meta.env.VITE_API_URL}${form.imageUrl}`
        : form.imageUrl
    }
    return `${import.meta.env.VITE_API_URL}${form.imageUrl}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)

    const url = isEditing 
      ? `${import.meta.env.VITE_API_URL}/api/posts/${id}` 
      : `${import.meta.env.VITE_API_URL}/api/posts`
      
    const method = isEditing ? 'PUT' : 'POST'

    const formData = new FormData()
    // Append all text fields
    Object.keys(form).forEach(key => {
      // Don't append imageUrl if we have a new file, or if it's null
      if (key !== 'imageUrl' || !imageFile) {
        formData.append(key, form[key])
      }
    })
    
    // Append the image file if selected
    if (imageFile) {
      formData.append('image', imageFile)
    }

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: formData
      })

      const data = await response.json()

      if (response.ok) {
        navigate('/admin')
      } else {
        setError(data.error || 'Failed to save post')
      }
    } catch (err) {
      setError('Error connecting to server')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="admin-loader">Loading post...</div>

  return (
    <div className="admin-post-editor">
      <div className="admin-dashboard-header">
        <h2>{isEditing ? 'Edit Post' : 'Create New Post'}</h2>
      </div>

      {error && <div className="admin-error-msg">{error}</div>}

      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-row">
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" value={form.title} onChange={handleChange} required placeholder="Post title" />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input type="text" name="category" value={form.category} onChange={handleChange} required placeholder="e.g., ERP Solutions" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Author</label>
            <input type="text" name="author" value={form.author} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Date String</label>
            <input type="text" name="date" value={form.date} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Read Time</label>
            <input type="text" name="readTime" value={form.readTime} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Post Image</label>

            {/* Current / New image preview */}
            {getCurrentImageUrl() && (
              <div style={{ marginBottom: '0.75rem', position: 'relative', display: 'inline-block' }}>
                <img
                  src={getCurrentImageUrl()}
                  alt="Post preview"
                  style={{ width: '100%', maxWidth: '320px', height: '180px', objectFit: 'cover', borderRadius: '8px', border: '2px solid var(--border-color)' }}
                />
                {imagePreview && (
                  <span style={{ position: 'absolute', top: '6px', left: '6px', background: '#22c55e', color: '#fff', fontSize: '0.7rem', fontWeight: '700', padding: '2px 8px', borderRadius: '4px' }}>NEW</span>
                )}
                {!imagePreview && isEditing && (
                  <span style={{ position: 'absolute', top: '6px', left: '6px', background: 'var(--accent-primary)', color: '#fff', fontSize: '0.7rem', fontWeight: '700', padding: '2px 8px', borderRadius: '4px' }}>CURRENT</span>
                )}
              </div>
            )}

            <input type="file" accept="image/*" onChange={handleFileChange} />
            <small style={{ color: 'var(--text-secondary)', display: 'block', marginTop: '0.4rem' }}>
              {isEditing && form.imageUrl ? 'Select a new image to replace the current one, or leave empty to keep it.' : 'Upload a cover image for this post.'}
            </small>
          </div>
        </div>

        <div className="form-group">
          <label>Short Excerpt</label>
          <textarea 
            name="excerpt" 
            value={form.excerpt} 
            onChange={handleChange} 
            required 
            rows="3"
            placeholder="A short summary for the blog listing page..."
          />
        </div>

        <div className="form-group">
          <label>Full Content (HTML allowed)</label>
          <textarea 
            name="content" 
            value={form.content} 
            onChange={handleChange} 
            required 
            rows="12"
            placeholder="<p>Write your full blog post here...</p>"
          />
        </div>

        <div className="admin-form-actions">
          <button type="button" onClick={() => navigate('/admin')} className="admin-btn-outline">Cancel</button>
          <button type="submit" className="admin-btn-primary" disabled={saving}>
            {saving ? 'Saving...' : 'Save Post'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminPostEditor
