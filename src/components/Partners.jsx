import React from 'react'
import './Partners.css'

const partners = [
  { name: 'Ethio Telecom', logo: '/logos/ethiotelecom.png' },
  { name: 'Safaricom Ethiopia', logo: '/logos/safaricom.png' },
  { name: 'Commercial Bank of Ethiopia', logo: '/logos/cbe.png' },
  { name: 'Dashen Bank', logo: '/logos/dashen.png' },
  { name: 'Odoo', logo: '/logos/odoo.png' },
  { name: 'Amazon Web Services', logo: '/logos/aws.png' },
]

// Duplicate for seamless infinite scroll
const scrollRow = [...partners, ...partners]

const Partners = () => {
  return (
    <section className="partners-section" id="partners">
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
      </div>

      {/* Infinite scroll marquee — full-width, outside container */}
      <div className="partners-marquee-wrapper" aria-hidden="true">
        <div className="partners-marquee-track">
          {scrollRow.map((p, i) => (
            <div className="partners-marquee-item" key={i}>
              <img
                src={p.logo}
                alt={p.name}
                className="marquee-logo"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="marquee-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
