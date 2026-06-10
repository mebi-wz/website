/**
 * analytics.js
 * Google Analytics 4
 */

const GA_ID = 'G-CCP8MD05EN'
const COOKIE_KEY = 'marsbes_cookie_consent'

let initialized = false

export function loadAnalytics() {
  if (typeof window === 'undefined') return
  if (initialized) return

  const consent = localStorage.getItem(COOKIE_KEY)

  if (consent !== 'accepted') {
    console.info('[Analytics] Consent not granted.')
    return
  }

  initialized = true

  // Load gtag script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  // Setup dataLayer
  window.dataLayer = window.dataLayer || []

  function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag = gtag

  gtag('js', new Date())

  gtag('config', GA_ID, {
    anonymize_ip: true,
    send_page_view: true,
    debug_mode: import.meta.env.DEV,
  })

  console.info('[Analytics] Loaded successfully.')
}

export function acceptAnalyticsConsent() {
  localStorage.setItem(COOKIE_KEY, 'accepted')
  loadAnalytics()
}

export function rejectAnalyticsConsent() {
  localStorage.setItem(COOKIE_KEY, 'rejected')
}

export function trackPageView(path) {
  if (!window.gtag) return

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_path: path,
    page_location: window.location.href,
  })
}

export function trackEvent(eventName, params = {}) {
  if (!window.gtag) return

  window.gtag('event', eventName, params)
}

export function initAnalyticsFromConsent() {
  if (typeof window === 'undefined') return

  const consent = localStorage.getItem(COOKIE_KEY)

  if (consent === 'accepted') {
    loadAnalytics()
  }
}