import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Users } from 'lucide-react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        {/* Left Side: Stats/Visuals */}
        <div className="about-visuals">
          <div className="about-stat-card primary">
            <div className="stat-number">50+</div>
            <div className="stat-label">Enterprise Clients</div>
            <Users className="stat-icon" size={24} />
          </div>
          
          <div className="about-stat-card secondary">
            <div className="stat-number">100%</div>
            <div className="stat-label">Delivery Rate</div>
            <TrendingUp className="stat-icon" size={24} />
          </div>

          <div className="about-stat-card accent">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Local Support</div>
            <Shield className="stat-icon" size={24} />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="about-content">
          <div className="about-badge">WHO WE ARE</div>
          <h2 className="about-title">
            Your Business Growth <br /> <span className="highlight-text">Through Marsbes Tech</span>
          </h2>
          <p className="about-desc">
            We are a 100% Trusted ERP Partner dedicated to the Ethiopian market. Our goal is to simplify complex operations, connect isolated departments, and provide real-time insights that guarantee sustainable business growth.
          </p>
          
          <ul className="about-features">
            <li>
              <CheckCircle2 color="var(--accent-primary)" size={20} className="feature-icon" />
              <span>End-to-end custom software development</span>
            </li>
            <li>
              <CheckCircle2 color="var(--accent-primary)" size={20} className="feature-icon" />
              <span>Agile and fully transparent project management</span>
            </li>
            <li>
              <CheckCircle2 color="var(--accent-primary)" size={20} className="feature-icon" />
              <span>Dedicated post-launch training and support</span>
            </li>
          </ul>

          <Link to="/contact" className="btn btn-primary about-btn">
            Work With Us <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
