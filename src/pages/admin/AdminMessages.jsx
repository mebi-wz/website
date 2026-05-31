import React, { useState, useEffect } from 'react'
import { Mail, Trash2, Calendar, User, MessageSquare, ChevronDown, ChevronUp, Search } from 'lucide-react'

const AdminMessages = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedId, setExpandedId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/contacts`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      })
      const data = await response.json()
      if (response.ok) {
        setMessages(data)
      } else {
        setError(data.error || 'Failed to fetch messages')
      }
    } catch (err) {
      setError('Failed to connect to the server')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  const handleDelete = async (id, e) => {
    e.stopPropagation() // Prevent toggling expand
    if (!window.confirm('Are you sure you want to delete this message?')) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      })

      if (response.ok) {
        setMessages(messages.filter(msg => msg.id !== id))
        if (expandedId === id) setExpandedId(null)
      } else {
        const data = await response.json()
        alert(data.error || 'Failed to delete message')
      }
    } catch (err) {
      alert('Error deleting message')
    }
  }

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const filteredMessages = messages.filter(msg => 
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.message.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) return <div className="admin-loader">Loading messages...</div>
  if (error) return <div className="admin-error-msg">{error}</div>

  return (
    <div className="admin-messages-page">
      <div className="admin-dashboard-header">
        <div>
          <h2>Contact Messages</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.25rem' }}>
            View and manage contact form inquiries sent by website visitors.
          </p>
        </div>
      </div>

      {/* Search Filter */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center', backgroundColor: '#1a1c23', border: '1px solid #2d3139', borderRadius: '6px', padding: '0.5rem 1rem' }}>
        <Search size={18} color="#94a3b8" />
        <input 
          type="text" 
          placeholder="Search by name, email, subject, or message content..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ background: 'transparent', border: 'none', color: '#fff', outline: 'none', width: '100%', fontSize: '0.95rem' }}
        />
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th style={{ width: '40px' }}></th>
              <th>Sender</th>
              <th>Subject</th>
              <th>Date</th>
              <th style={{ width: '100px', textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMessages.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '3rem', color: '#94a3b8' }}>
                  <Mail size={40} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                  <p>{searchTerm ? 'No messages matches your search.' : 'No contact messages found.'}</p>
                </td>
              </tr>
            ) : (
              filteredMessages.map(msg => {
                const isExpanded = expandedId === msg.id;
                return (
                  <React.Fragment key={msg.id}>
                    <tr 
                      onClick={() => toggleExpand(msg.id)} 
                      style={{ cursor: 'pointer', transition: 'background-color 0.2s' }}
                    >
                      <td style={{ textAlign: 'center' }}>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </td>
                      <td>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontWeight: 600 }}>{msg.name}</span>
                          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{msg.email}</span>
                        </div>
                      </td>
                      <td>
                        <span style={{ fontWeight: isExpanded ? 600 : 400 }}>{msg.subject}</span>
                      </td>
                      <td style={{ fontSize: '0.85rem' }}>{formatDate(msg.created_at)}</td>
                      <td>
                        <div className="admin-table-actions" style={{ justifyContent: 'center' }}>
                          <button 
                            onClick={(e) => handleDelete(msg.id, e)} 
                            className="admin-action-btn delete" 
                            title="Delete Message"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                    {isExpanded && (
                      <tr>
                        <td colSpan="5" style={{ backgroundColor: 'rgba(0,0,0,0.15)', padding: '1.5rem 2rem' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', borderBottom: '1px solid #2d3139', paddingBottom: '0.75rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <User size={14} /> <strong>From:</strong> {msg.name} ({msg.email})
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Calendar size={14} /> <strong>Received:</strong> {formatDate(msg.created_at)}
                              </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                              <strong style={{ fontSize: '0.9rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MessageSquare size={14} /> Message Body:
                              </strong>
                              <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', color: '#cbd5e1', backgroundColor: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '6px', border: '1px solid #2d3139', margin: 0 }}>
                                {msg.message}
                              </p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                              <a 
                                href={`mailto:${msg.email}?subject=RE: ${msg.subject}`} 
                                className="admin-btn-primary" 
                                style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', textDecoration: 'none' }}
                              >
                                Reply via Email
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminMessages
