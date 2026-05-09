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
    setImageFile(e.target.files[0])
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
            <label>Post Image {isEditing && form.imageUrl && "(Leave empty to keep current)"}</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
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
