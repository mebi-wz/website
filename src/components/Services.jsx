import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Building2, BrainCircuit, Smartphone, ShoppingCart, 
  LayoutTemplate, Gamepad2, Bot, Presentation, ShieldCheck,
  ArrowRight
} from 'lucide-react'
import './Services.css'

const servicesData = [
  {
    id: 'erp',
    icon: <Building2 size={24} />, 
    title: 'ERP Development & Implementation',
    desc: 'Integrated, scalable ERP systems (Odoo-based) that connect your accounting, inventory, sales, HR, and operations into one powerful platform. Go live in 90 days or less.',
  },
  {
    id: 'ai-bi',
    icon: <BrainCircuit size={24} />, 
    title: 'AI-Powered Business Intelligence',
    desc: 'Demand forecasting, anomaly detection, cash flow prediction, and automated reporting — AI modules that make your ERP smarter and your decisions faster.',
  },
  {
    id: 'mobile',
    icon: <Smartphone size={24} />, 
    title: 'Mobile App Development',
    desc: 'Custom cross-platform mobile apps for your business. From customer-facing apps to internal tools, built with Flutter and React Native for iOS and Android.',
  },
  {
    id: 'ecommerce',
    icon: <ShoppingCart size={24} />, 
    title: 'E-Commerce Solutions',
    desc: 'Fast, secure online stores with Telebirr and bank payment integration. Full inventory management, order tracking, and customer analytics built in.',
  },
  {
    id: 'web',
    icon: <LayoutTemplate size={24} />, 
    title: 'Web Design & Development',
    desc: 'Modern, responsive websites and web applications that drive engagement and convert visitors. SEO-optimized, mobile-first, and built for the Ethiopian market.',
  },
  {
    id: 'game',
    icon: <Gamepad2 size={24} />, 
    title: 'Game Development',
    desc: 'Immersive cross-platform games from casual mobile to interactive experiences. Ethiopian stories and culture brought to life through gaming.',
  },
  {
    id: 'chatbots',
    icon: <Bot size={24} />, 
    title: 'AI Chatbots & Automation',
    desc: 'Intelligent chatbots in Amharic and English for customer service, ERP queries, and business automation. Deploy on Telegram, WhatsApp, and web.',
  },
  {
    id: 'consulting',
    icon: <Presentation size={24} />, 
    title: 'IT Consulting & Training',
    desc: 'Digital transformation roadmaps, IT strategy consulting, and hands-on training programs. We guide your team through every step of the technology journey.',
  },
  {
    id: 'cybersecurity',
    icon: <ShieldCheck size={24} />, 
    title: 'Cybersecurity Solutions',
    desc: 'Penetration testing, security audits, and secure system design. Protect your business data and ensure compliance with industry standards.',
  },
]

const Services = () => (
  <section id="services" className="services-section">
    <div className="container">
      <div className="services-header">
        <div className="services-badge">WHAT WE BUILD</div>
        <h2 className="section-title">
          Services That Move Your Business Forward
        </h2>
        <p className="section-desc">
          From ERP systems to AI-powered analytics, we deliver the technology Ethiopian businesses need to compete and grow.
        </p>
      </div>
      
      <div className="services-grid">
        {servicesData.map((s) => (
          <Link to={`/services/${s.id}`} className="service-card" key={s.id}>
            <div className="service-card-inner">
              <div className="service-icon">
                {s.icon}
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default Services
