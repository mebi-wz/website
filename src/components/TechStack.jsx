import React from 'react'
import { LineChart, AlertTriangle, FileText, MessageSquare, DollarSign, BrainCircuit } from 'lucide-react'
import './TechStack.css'

const aiFeatures = [
  {
    icon: <LineChart size={22} />,
    title: 'Demand Forecasting',
    desc: 'ML models trained on your sales data predict inventory needs 30-90 days out. Reduce stockouts by 40%.'
  },
  {
    icon: <AlertTriangle size={22} />,
    title: 'Anomaly Detection',
    desc: 'Real-time monitoring flags suspicious transactions, data errors, and unusual spending before they become problems.'
  },
  {
    icon: <FileText size={22} />,
    title: 'Smart Document Processing',
    desc: 'OCR + AI extracts data from invoices and receipts, auto-populating your ERP. Critical for paper-to-digital transitions.'
  },
  {
    icon: <MessageSquare size={22} />,
    title: 'Amharic + English AI Assistant',
    desc: 'Query your ERP in natural language. "Show me last week\'s sales in Merkato branch" — no menu navigation required.'
  },
  {
    icon: <DollarSign size={22} />,
    title: 'Cash Flow Prediction',
    desc: 'AI analyzes receivables, payables, and payment patterns to forecast weekly cash positions. No more liquidity surprises.'
  }
]

const TechStack = () => (
  <section id="tech-stack" className="ai-section">
    <div className="container">
      <div className="ai-header">
        <div className="ai-badge">AI-POWERED</div>
        <h2 className="ai-title">Artificial Intelligence Built Into Everything We Deliver</h2>
        <p className="ai-desc">
          We don't just talk about AI — we ship it. Every ERP implementation comes with production AI features that work in the Ethiopian context.
        </p>
      </div>

      <div className="ai-grid">
        <div className="ai-features-list">
          {aiFeatures.map((feat, idx) => (
            <div className="ai-feature-card" key={idx}>
              <div className="ai-feature-icon">
                {feat.icon}
              </div>
              <div className="ai-feature-content">
                <h3 className="ai-feature-title">{feat.title}</h3>
                <p className="ai-feature-desc">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ai-hero-card-wrapper">
          <div className="ai-hero-card">
            <div className="ai-hero-icon-container">
              <BrainCircuit size={90} strokeWidth={2} />
            </div>
            <h3 className="ai-hero-title">AI That Works Here</h3>
            <p className="ai-hero-desc">
              Amharic language support. Offline-capable models for unreliable internet. On-premise deployment for data sovereignty. Built for Ethiopia, not copied from Silicon Valley.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TechStack
