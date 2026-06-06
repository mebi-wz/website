import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, ArrowLeft } from 'lucide-react'
import './LegalPage.css'

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'We collect information you provide directly to us, such as when you fill out our contact form, request a consultation, or communicate with our team. This may include your name, email address, phone number, company name, and the content of your messages.',
      'We may also automatically collect certain technical information when you visit our website, such as your IP address, browser type, operating system, referring URLs, and pages viewed. This data is collected through standard web server logs and analytics tools.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use the information we collect to respond to your inquiries and provide the services you request; to send you updates about our products, services, and company news (you may opt out at any time); to improve our website, services, and user experience; to comply with applicable laws and regulations; and to protect the security and integrity of our systems.',
    ],
  },
  {
    title: '3. Information Sharing',
    content: [
      'Marsbes Tech does not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and delivering services, subject to confidentiality agreements.',
      'We may also disclose your information when required by law, to protect our rights, or to prevent fraud or security threats.',
    ],
  },
  {
    title: '4. Data Security',
    content: [
      'We implement industry-standard security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: '5. Cookies',
    content: [
      'Our website may use cookies and similar tracking technologies to enhance your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, some portions of our website may not function properly.',
    ],
  },
  {
    title: '6. Third-Party Links',
    content: [
      'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.',
    ],
  },
  {
    title: '7. Data Retention',
    content: [
      'We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law.',
    ],
  },
  {
    title: '8. Your Rights',
    content: [
      'You have the right to access, correct, or delete your personal information that we hold. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at the details below.',
    ],
  },
  {
    title: '9. Changes to This Policy',
    content: [
      'We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated effective date. Your continued use of our website after such changes constitutes your acceptance of the revised policy.',
    ],
  },
  {
    title: '10. Contact Us',
    content: [
      'If you have any questions or concerns about this Privacy Policy, please contact us at: info@marsbestech.com | +251 980 671 768 | Ayat, Addis Ababa, Ethiopia.',
    ],
  },
]

const PrivacyPolicyPage = () => {
  return (
    <div className="legal-page">
      {/* Hero */}
      <div className="legal-hero">
        <div className="legal-hero__blob legal-hero__blob--1" />
        <div className="legal-hero__blob legal-hero__blob--2" />
        <div className="container legal-hero__content">
          <div className="legal-hero__icon">
            <Shield size={36} strokeWidth={1.5} />
          </div>
          <div className="legal-badge">Legal</div>
          <h1 className="legal-hero__title">Privacy Policy</h1>
          <p className="legal-hero__subtitle">
            Your privacy matters to us. This policy explains how Marsbes Tech collects, uses, and protects your information.
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

export default PrivacyPolicyPage
