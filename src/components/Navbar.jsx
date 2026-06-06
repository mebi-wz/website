import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import logoLight from '../assets/logo_transparent.png'
import logoDark from '../assets/logo_dark.png'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/partners', label: 'Partners' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About us' },
    { href: '/contact', label: 'Contact' },
  ]

  // Scroll to #partners — works whether already on home or navigating to it
  const handlePartnersClick = (e, closeMobile) => {
    e.preventDefault()
    if (closeMobile) closeMobile()
    const scrollTo = () => {
      const el = document.getElementById('partners')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (location.pathname === '/') {
      scrollTo()
    } else {
      navigate('/')
      // Wait for home page to mount, then scroll
      setTimeout(scrollTo, 300)
    }
  }

  const renderLink = (link, closeMenu) => {
    if (link.anchor) {
      return (
        <a
          href={link.href}
          className="navbar__link"
          onClick={(e) => handlePartnersClick(e, closeMenu)}
        >
          {link.label}
        </a>
      )
    }
    return (
      <NavLink
        to={link.href}
        className="navbar__link"
        onClick={closeMenu}
      >
        {link.label}
      </NavLink>
    )
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">
          <img src={theme === 'dark' ? logoDark : logoLight} alt="Marsbes Tech" className="navbar__logo-img" />
        </NavLink>

        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.href}>
              {renderLink(link)}
            </li>
          ))}
          <li>
            <button
              className="navbar__theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
          <li>
            <NavLink to="/contact" className="btn btn-primary navbar__cta">Get Started</NavLink>
          </li>
        </ul>

        <div className="navbar__right-mobile">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="navbar__mobile-menu">
          {navLinks.map(link => (
            <li key={link.href}>
              {renderLink(link, () => setMenuOpen(false))}
            </li>
          ))}
          <li>
            <NavLink to="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Get Started</NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
