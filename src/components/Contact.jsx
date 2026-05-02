import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-desc">
          Ready to transform your business? We'd love to hear about your project.
        </p>
        <div className="contact-grid">
          {/* Info side */}
          <div className="contact-info">
            <h3 className="contact-info__title">Reach Us Directly</h3>
            <p className="contact-info__text">
              Whether you're looking to start a new project or need expert consultation, our team is ready to help you succeed.
            </p>
            <div className="contact-info__items">
              <div className="contact-info__item">
                <Mail size={20} color="var(--accent-primary)" />
                <div>
                  <strong>Email</strong>
                  <p>info@marsbestech.com</p>
                </div>
              </div>
              <div className="contact-info__item">
                <Phone size={20} color="var(--accent-primary)" />
                <div>
                  <strong>Phone (24/7 Support)</strong>
                  <p>+251980671768</p>
                </div>
              </div>
              <div className="contact-info__item">
                <MapPin size={20} color="var(--accent-primary)" />
                <div>
                  <strong>Location &amp; Hours</strong>
                  <p>Airport Road, Addis Ababa<br/>Mon-Sat: 8:00am To 5:00pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="glass-card contact-form-card">
            {sent ? (
              <div className="contact-success">
                <MessageSquare size={48} color="var(--accent-primary)" />
                <h3>Message Sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Tell us about your project..." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary contact-submit">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
