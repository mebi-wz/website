import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import TechStackPage from './pages/TechStackPage'
import ContactPage from './pages/ContactPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

// Admin Components
import AdminLayout from './pages/admin/AdminLayout'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminPostEditor from './pages/admin/AdminPostEditor'

function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <ThemeProvider>
      <div className="App">
        {!isAdminRoute && <Navbar />}
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tech" element={<TechStackPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="login" element={<AdminLogin />} />
              <Route path="create" element={<AdminPostEditor />} />
              <Route path="edit/:id" element={<AdminPostEditor />} />
            </Route>
          </Routes>
        </main>
        {!isAdminRoute && <Footer />}
      </div>
    </ThemeProvider>
  )
}

export default App
