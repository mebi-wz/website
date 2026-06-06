import React from 'react'
import { ExternalLink } from 'lucide-react'
import './Partners.css'

const partners = [
  {
    name: 'Ethio Telecom',
    category: 'Telecom & Payments',
    description: 'Strategic integration partner for Telebirr payments, SMS notifications, and enterprise connectivity across Ethiopia.',
    url: 'https://www.ethiotelecom.et',
    logo: '/logos/ethiotelecom.png',
    logoFallback: '📡',
    tier: 'Local',
  },
  {
    name: 'Safaricom Ethiopia',
    category: 'Telecom & M-Pesa',
    description: 'Partner for M-Pesa mobile money integration and enterprise communication services in the Ethiopian market.',
    url: 'https://www.safaricom.et',
    logo: '/logos/safaricom.png',
    logoFallback: '🟢',
    tier: 'Local',
  },
  {
    name: 'Commercial Bank of Ethiopia',
    category: 'Banking Integration',
    description: 'Official CBE digital banking integration — enabling seamless payment processing and financial workflows inside ERP.',
    url: 'https://www.combanketh.et',
    logo: '/logos/cbe.png',
    logoFallback: '🏦',
    tier: 'Local',
  },
  {
    name: 'Odoo Community',
    category: 'ERP Platform',
    description: 'Certified Odoo Community partner delivering open-source ERP implementations, custom modules, and ongoing support.',
    url: 'https://www.odoo.com',
    logo: '/logos/odoo.png',
    logoFallback: '🟣',
    tier: 'Gold',
  },
]

// Duplicate for seamless infinite scroll
const scrollRow = [...partners, ...partners]

const tierColors = {
  Gold: { bg: 'rgba(212,175,55,0.12)', border: 'rgba(212,175,55,0.35)', text: '#d4af37' },
  Silver: { bg: 'rgba(192,192,192,0.10)', border: 'rgba(192,192,192,0.3)', text: '#c0c0c0' },
  Local: { bg: 'rgba(94,158,158,0.12)', border: 'rgba(94,158,158,0.3)', text: 'var(--accent-primary)' },
}

const Partners = () => {
  return (
    <div className="page-standalone">
      <div className="container">
        {/* Header */}
        <div className="partners-header">
          <div className="partners-badge">TRUSTED PARTNERSHIPS</div>
          <h2 className="partners-title">
            Built on a Foundation of&nbsp;
            <span className="partners-highlight">World-Class Partners</span>
          </h2>
          <p className="partners-desc">
            We collaborate with global technology leaders and local fintech innovators to deliver
            enterprise solutions that are both globally powerful and locally relevant.
          </p>
        </div>

        {/* Infinite scroll marquee */}
        <div className="partners-marquee-wrapper" aria-hidden="true">
          <div className="partners-marquee-track">
            {scrollRow.map((p, i) => (
              <div className="partners-marquee-item" key={i}>
                <span className="marquee-logo">{p.logoFallback}</span>
                <span className="marquee-name">{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partner cards grid */}
        <div className="partners-grid">
          {partners.map((partner, idx) => {
            const tier = tierColors[partner.tier]
            return (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-card"
                style={{ '--tier-bg': tier.bg, '--tier-border': tier.border, '--tier-text': tier.text }}
              >
                <div className="partner-card-top">
                  <div className="partner-logo-wrapper">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="partner-logo-img"
                      onError={e => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextSibling.style.display = 'flex'
                      }}
                    />
                    <span className="partner-logo-fallback" style={{ display: 'none' }}>
                      {partner.logoFallback}
                    </span>
                  </div>
                  <div className="partner-tier-badge">{partner.tier}</div>
                </div>
                <div className="partner-card-body">
                  <div className="partner-category">{partner.category}</div>
                  <h3 className="partner-name">{partner.name}</h3>
                  <p className="partner-description">{partner.description}</p>
                </div>
                <div className="partner-card-footer">
                  <span className="partner-link-text">Visit Partner</span>
                  <ExternalLink size={14} className="partner-link-icon" />
                </div>
              </a>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="partners-cta">
          <p className="partners-cta-text">Interested in becoming a partner?</p>
          <a href="/contact" className="btn btn-outline partners-cta-btn">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default Partners
