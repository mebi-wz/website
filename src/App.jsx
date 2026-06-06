import React, { useEffect } from 'react'
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
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import Footer from './components/Footer'
import ScrollButtons from './components/ScrollButtons'
import CookieBanner from './components/CookieBanner'
import { ThemeProvider } from './context/ThemeContext'
import { initAnalyticsFromConsent, trackPageView } from './utils/analytics'

// Admin Components
import AdminLayout from './pages/admin/AdminLayout'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminPostEditor from './pages/admin/AdminPostEditor'
import AdminMessages from './pages/admin/AdminMessages'
import Partners from './components/Partners'

function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  // On mount: load GA if user already accepted in a previous session
  useEffect(() => {
    initAnalyticsFromConsent()
  }, [])

  // Track page views on every route change
  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

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
            <Route path="/partners" element={<Partners />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="login" element={<AdminLogin />} />
              <Route path="create" element={<AdminPostEditor />} />
              <Route path="edit/:id" element={<AdminPostEditor />} />
              <Route path="messages" element={<AdminMessages />} />
            </Route>
          </Routes>
        </main>
        {!isAdminRoute && <Footer />}
        {!isAdminRoute && <ScrollButtons />}
        {!isAdminRoute && <CookieBanner />}
      </div>
    </ThemeProvider>
  )
}

export default App
