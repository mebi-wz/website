import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Edit, Trash2, Plus } from 'lucide-react'

const AdminDashboard = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
      setError('Failed to fetch posts')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      })

      if (response.ok) {
        fetchPosts() // refresh list
      } else {
        const data = await response.json()
        alert(data.error || 'Failed to delete post')
      }
    } catch (err) {
      alert('Error deleting post')
    }
  }

  if (loading) return <div className="admin-loader">Loading posts...</div>
  if (error) return <div className="admin-error-msg">{error}</div>

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-header">
        <h2>Manage Posts</h2>
        <Link to="/admin/create" className="admin-btn-primary">
          <Plus size={18} /> Create New Post
        </Link>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>
                  No posts found. Create your first one!
                </td>
              </tr>
            ) : (
              posts.map(post => (
                <tr key={post.id}>
                  <td><strong>{post.title}</strong></td>
                  <td>{post.category}</td>
                  <td>{post.date}</td>
                  <td>{post.author}</td>
                  <td>
                    <div className="admin-table-actions">
                      <Link to={`/admin/edit/${post.id}`} className="admin-action-btn edit" title="Edit">
                        <Edit size={16} />
                      </Link>
                      <button onClick={() => handleDelete(post.id)} className="admin-action-btn delete" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminDashboard
