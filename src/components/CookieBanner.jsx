import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, X, Check } from 'lucide-react'
import { loadAnalytics } from '../utils/analytics'
import './CookieBanner.css'

const COOKIE_KEY = 'marsbes_cookie_consent'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      // Small delay so it doesn't flash on initial load
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismiss = (value) => {
    setLeaving(true)

    // ✅ Load GA immediately when the user accepts
    if (value === 'accepted') {
      loadAnalytics()
    }

    setTimeout(() => {
      localStorage.setItem(COOKIE_KEY, value)
      setVisible(false)
      setLeaving(false)
    }, 350)
  }

  if (!visible) return null

  return (
    <div
      className={`cookie-banner ${leaving ? 'cookie-banner--leaving' : 'cookie-banner--visible'}`}
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="cookie-banner__inner">
        {/* Icon */}
        <div className="cookie-banner__icon">
          <Cookie size={22} strokeWidth={1.75} />
        </div>

        {/* Text */}
        <div className="cookie-banner__text">
          <p className="cookie-banner__title">We use cookies</p>
          <p className="cookie-banner__desc">
            We use cookies to improve your browsing experience and analyse site traffic.
            By clicking <strong>Accept</strong>, you agree to our{' '}
            <Link to="/cookies" className="cookie-banner__link">Cookie Policy</Link>.
          </p>
        </div>

        {/* Actions */}
        <div className="cookie-banner__actions">
          <button
            id="cookie-decline"
            className="cookie-btn cookie-btn--outline"
            onClick={() => dismiss('declined')}
            aria-label="Decline cookies"
          >
            <X size={14} />
            Decline
          </button>
          <button
            id="cookie-accept"
            className="cookie-btn cookie-btn--primary"
            onClick={() => dismiss('accepted')}
            aria-label="Accept cookies"
          >
            <Check size={14} />
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
