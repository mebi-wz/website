import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, ArrowLeft } from 'lucide-react'
import './LegalPage.css'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using the Marsbes Tech website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.',
    ],
  },
  {
    title: '2. Description of Services',
    content: [
      'Marsbes Tech provides enterprise software development, ERP implementation, AI/automation, game development, and related technology consulting services primarily serving the Ethiopian market. Our services are subject to separate engagement agreements signed with individual clients.',
      'The information and content on this website are provided for general informational purposes only and do not constitute a binding offer or contract.',
    ],
  },
  {
    title: '3. Intellectual Property',
    content: [
      'All content on this website, including but not limited to text, graphics, logos, icons, images, and software, is the property of Marsbes Tech or its content suppliers and is protected by applicable intellectual property laws.',
      'You may not reproduce, distribute, modify, or create derivative works from any content on this website without the express written permission of Marsbes Tech.',
    ],
  },
  {
    title: '4. User Conduct',
    content: [
      'You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the site. Prohibited conduct includes transmitting any unlawful, harmful, or offensive content; attempting to gain unauthorised access to our systems; and using automated tools to scrape or extract data without permission.',
    ],
  },
  {
    title: '5. Disclaimer of Warranties',
    content: [
      'Our website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. Marsbes Tech does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.',
    ],
  },
  {
    title: '6. Limitation of Liability',
    content: [
      'To the fullest extent permitted by law, Marsbes Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or its content.',
    ],
  },
  {
    title: '7. Third-Party Links',
    content: [
      'Our website may contain links to third-party websites. These links are provided for your convenience only. Marsbes Tech has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.',
    ],
  },
  {
    title: '8. Governing Law',
    content: [
      'These Terms of Service shall be governed by and construed in accordance with the laws of the Federal Democratic Republic of Ethiopia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Addis Ababa, Ethiopia.',
    ],
  },
  {
    title: '9. Modifications',
    content: [
      'Marsbes Tech reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following any changes constitutes your acceptance of the revised terms.',
    ],
  },
  {
    title: '10. Contact',
    content: [
      'For questions about these Terms of Service, please contact us at: info@marsbestech.com | +251 980 671 768 | Ayat, Addis Ababa, Ethiopia.',
    ],
  },
]

const TermsOfServicePage = () => {
  return (
    <div className="legal-page">
      {/* Hero */}
      <div className="legal-hero">
        <div className="legal-hero__blob legal-hero__blob--1" />
        <div className="legal-hero__blob legal-hero__blob--2" />
        <div className="container legal-hero__content">
          <div className="legal-hero__icon">
            <FileText size={36} strokeWidth={1.5} />
          </div>
          <div className="legal-badge">Legal</div>
          <h1 className="legal-hero__title">Terms of Service</h1>
          <p className="legal-hero__subtitle">
            Please read these terms carefully before using our website or engaging our services.
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

export default TermsOfServicePage
