import React from 'react'
import { Link } from 'react-router-dom'
import { Cookie, ArrowLeft } from 'lucide-react'
import './LegalPage.css'

const sections = [
  {
    title: '1. What Are Cookies?',
    content: [
      'Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.',
    ],
  },
  {
    title: '2. How We Use Cookies',
    content: [
      'Marsbes Tech uses cookies to ensure the website functions correctly, to understand how visitors interact with the site, and to improve our services. We do not use cookies for advertising or to track you across other websites.',
    ],
  },
  {
    title: '3. Types of Cookies We Use',
    content: [
      'Essential Cookies — These cookies are necessary for the website to function. They enable core features such as page navigation, form submission, and secure access. You cannot opt out of these cookies.',
      'Analytics Cookies — We use analytics tools to understand how visitors use our site (e.g., which pages are visited most, how long users spend on each page). This data is aggregated and anonymous. These cookies help us continually improve the website experience.',
      'Preference Cookies — These cookies remember your choices (such as your dark/light theme preference) so that your experience is consistent between visits.',
    ],
  },
  {
    title: '4. Third-Party Cookies',
    content: [
      'Some features on our website may be provided by third-party services (such as embedded maps or social media buttons). These third parties may set their own cookies when you interact with those features. We do not control these cookies — please refer to the respective third-party privacy policies for more information.',
    ],
  },
  {
    title: '5. Managing Cookies',
    content: [
      'You can control and/or delete cookies at any time through your browser settings. Most browsers allow you to block cookies, delete existing cookies, or be notified when a cookie is being set. Please note that disabling certain cookies may affect the functionality of our website.',
      'To learn how to manage cookies in your browser, visit the help section of your browser or visit www.aboutcookies.org for detailed guidance.',
    ],
  },
  {
    title: '6. Cookie Consent',
    content: [
      'When you first visit our website, we will ask for your consent to use non-essential cookies via our cookie banner. You may accept or decline at that time. You can change your preference at any time by clearing your browser\'s local storage or adjusting your browser cookie settings.',
    ],
  },
  {
    title: '7. Data Retention',
    content: [
      'The data collected through analytics cookies is retained for up to 26 months. Preference and essential cookies are retained for the duration of your browser session or up to 12 months, depending on the cookie type.',
    ],
  },
  {
    title: '8. Updates to This Policy',
    content: [
      'We may update this Cookie Policy from time to time to reflect changes in technology or legislation. Any updates will be posted on this page with a revised effective date. We encourage you to check this page periodically.',
    ],
  },
  {
    title: '9. Contact Us',
    content: [
      'If you have any questions about our use of cookies, please contact us at: info@marsbestech.com | +251 980 671 768 | Ayat, Addis Ababa, Ethiopia.',
    ],
  },
]

const CookiePolicyPage = () => {
  return (
    <div className="legal-page">
      {/* Hero */}
      <div className="legal-hero">
        <div className="legal-hero__blob legal-hero__blob--1" />
        <div className="legal-hero__blob legal-hero__blob--2" />
        <div className="container legal-hero__content">
          <div className="legal-hero__icon">
            <Cookie size={36} strokeWidth={1.5} />
          </div>
          <div className="legal-badge">Legal</div>
          <h1 className="legal-hero__title">Cookie Policy</h1>
          <p className="legal-hero__subtitle">
            This policy explains what cookies are, how we use them, and the choices you have regarding cookies on the Marsbes Tech website.
          </p>
          <p className="legal-meta">Effective date: <strong>June 1, 2025</strong></p>
        </div>
      </div>

      {/* Content */}
      <div className="container legal-body">
        <div className="legal-content">
          {sections.map((sec, i) => (
            <div className="legal-section" key={i}>
              <h2 className="legal-section__title">{sec.title}</h2>
              {sec.content.map((para, j) => (
                <p className="legal-section__text" key={j}>{para}</p>
              ))}
            </div>
          ))}
        </div>

        <Link to="/" className="legal-back-btn">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default CookiePolicyPage
