/**
 * Analytics utility — Google Analytics 4 (GA4)
 *
 * Replace GA_ID with your real Measurement ID from:
 * https://analytics.google.com → Admin → Data Streams → Web stream → Measurement ID
 *
 * Format: G-XXXXXXXXXX
 */

const GA_ID = 'G-CCP8MD05EN'
const COOKIE_KEY = 'marsbes_cookie_consent'

let initialized = false

/**
 * Inject the GA4 script tags into <head> and initialize dataLayer.
 * Safe to call multiple times — only runs once.
 */
export function loadAnalytics() {
  if (initialized || typeof window === 'undefined') return
  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') {
    console.info('[Analytics] No GA ID configured. Skipping analytics load.')
    return
  }

  initialized = true

  // 1. Inject the gtag.js script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  // 2. Initialise dataLayer & gtag function
  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag

  gtag('js', new Date())
  gtag('config', GA_ID, {
    // Respect privacy — anonymize IPs
    anonymize_ip: true,
    // Don't send data until we call gtag ourselves
    send_page_view: true,
  })

  console.info('[Analytics] Google Analytics loaded.')
}

/**
 * Track a page view — call this on route changes.
 * No-op if analytics was not loaded.
 */
export function trackPageView(path) {
  if (!window.gtag) return
  window.gtag('event', 'page_view', {
    page_path: path,
  })
}

/**
 * Track a custom event.
 * No-op if analytics was not loaded.
 *
 * @param {string} eventName  GA4 event name
 * @param {object} params     Additional event parameters
 */
export function trackEvent(eventName, params = {}) {
  if (!window.gtag) return
  window.gtag('event', eventName, params)
}

/**
 * Called on app mount — loads analytics if the user already accepted.
 */
export function initAnalyticsFromConsent() {
  const consent = localStorage.getItem(COOKIE_KEY)
  if (consent === 'accepted') {
    loadAnalytics()
  }
}
