import React from 'react'
import './TQDTSection.css'

const tqdtData = [
  {
    letter: 'T',
    title: 'Time',
    desc: 'We respect your deadlines. Every engagement has a clear timeline and we deliver within it. Your time is your business — we never waste it.'
  },
  {
    letter: 'Q',
    title: 'Quality',
    desc: 'We build right the first time. No shortcuts, no compromises. Every solution is tested, refined, and validated before it touches your business.'
  },
  {
    letter: 'D',
    title: 'Delivery',
    desc: 'We follow through from first demo to full go-live and beyond. Our commitment doesn\'t end at the contract — it starts there.'
  },
  {
    letter: 'T',
    title: 'Trust',
    desc: 'We earn your confidence through transparency, consistency, and results — not promises. We say it, we mean it, we prove it.'
  }
]

const TQDTSection = () => {
  return (
    <section className="tqdt-full-section" id="promise">
      <div className="container">
        <div className="tqdt-full-header">
          <div className="tqdt-badge">OUR PROMISE</div>
          <h2 className="tqdt-full-title">
            The TQDT Standard — Why Businesses Choose Us
          </h2>
          <p className="tqdt-full-desc">
            Every competitor sells technology. We sell reliability. Four non-negotiable commitments we measure and report on every project.
          </p>
        </div>

        <div className="tqdt-full-grid">
          {tqdtData.map((item, idx) => (
            <div className="tqdt-full-card" key={idx}>
              <div className="tqdt-full-letter">{item.letter}</div>
              <h3 className="tqdt-full-card-title">{item.title}</h3>
              <p className="tqdt-full-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TQDTSection
