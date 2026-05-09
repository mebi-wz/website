import React, { useEffect } from 'react'
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom'
import { LogOut, LayoutDashboard, FileText, Home } from 'lucide-react'
import './Admin.css'

const AdminLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Basic auth check
  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token && location.pathname !== '/admin/login') {
      navigate('/admin/login')
    }
  }, [navigate, location])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUsername')
    navigate('/admin/login')
  }

  // If it's the login page, don't show the sidebar
  if (location.pathname === '/admin/login') {
    return (
      <div className="admin-root theme-dark">
        <Outlet />
      </div>
    )
  }

  return (
    <div className="admin-root theme-dark">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>Admin Panel</h2>
        </div>
        <nav className="admin-nav">
          <Link to="/admin" className={`admin-nav-link ${location.pathname === '/admin' ? 'active' : ''}`}>
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/admin/create" className={`admin-nav-link ${location.pathname === '/admin/create' ? 'active' : ''}`}>
            <FileText size={20} /> New Post
          </Link>
          <div className="admin-nav-divider"></div>
          <Link to="/" className="admin-nav-link">
            <Home size={20} /> View Site
          </Link>
          <button onClick={handleLogout} className="admin-nav-link logout-btn">
            <LogOut size={20} /> Logout
          </button>
        </nav>
      </aside>
      <main className="admin-content">
        <header className="admin-header">
          <h3>Welcome, {localStorage.getItem('adminUsername') || 'Admin'}</h3>
        </header>
        <div className="admin-content-inner">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout
