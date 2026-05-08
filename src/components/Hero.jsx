import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__background">
        <div className="hero__blob hero__blob--primary"></div>
        <div className="hero__blob hero__blob--secondary"></div>
        <div className="hero__noise"></div>
      </div>
      <div className="container hero__container">
        
        <div className="hero__content">
          <div className="hero__badge">
            <span className="badge-dot"></span>
            Now Serving Businesses Across Ethiopia
          </div>
          
          <h1 className="hero__title">
            Technology That <br/>
            <span className="hero__highlight">Delivers.</span> <br/>
            Partners You <span className="hero__highlight">Trust.</span>
          </h1>
          
          <p className="hero__subtitle">
            We build ERP systems, AI-powered tools, and digital solutions for Ethiopian businesses — delivered on time, built to the highest quality, backed by a team that never lets you down.
          </p>
          
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary hero__btn">
              Get Free ERP Assessment <ArrowRight className="hero__btn-icon" size={18} />
            </Link>
            <Link to="/services" className="btn btn-outline hero__btn-outline">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="hero__visuals">
           <div className="tqdt-wrapper">
             
             <div className="tqdt-card">
               <div className="tqdt-letter">T</div>
               <h4 className="tqdt-title">Time</h4>
               <p className="tqdt-desc">Every project delivered on schedule</p>
             </div>

             <div className="tqdt-card">
               <div className="tqdt-letter">Q</div>
               <h4 className="tqdt-title">Quality</h4>
               <p className="tqdt-desc">Built right the first time</p>
             </div>

             <div className="tqdt-card">
               <div className="tqdt-letter">D</div>
               <h4 className="tqdt-title">Delivery</h4>
               <p className="tqdt-desc">From demo to full go-live</p>
             </div>

             <div className="tqdt-card">
               <div className="tqdt-letter">T</div>
               <h4 className="tqdt-title">Trust</h4>
               <p className="tqdt-desc">Transparency & consistency</p>
             </div>

           </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
