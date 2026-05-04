import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import { 
  Building2, Users, PackageOpen, Target, Truck, Factory, Folders, PieChart, Car, Wrench,
  BrainCircuit, TrendingUp, ShieldCheck, Smartphone, 
  ShoppingCart, Store, CreditCard, LayoutTemplate, Server, 
  Gamepad2, Bot, MessageSquare, Workflow, Presentation, Lightbulb, Lock, UserCheck
} from 'lucide-react'
import './ServiceDetail.css'

const generateModules = {
  erp: () => [
    {
      title: 'Finance & Accounting',
      icon: <Building2 className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">The financial brain of your ERP system — the part that keeps money flowing and records straight. It connects with every other module so numbers update automatically.</p>
          <div className="module-list-items">
            <div className="module-list-item"><h4>General Ledger (GL)</h4><ul><li>Create multi-level account structures.</li><li>Generate trial balances, balance sheets, and income statements in real time.</li></ul></div>
          </div>
        </div>
      )
    },
    {
      title: 'Human Resource Management',
      icon: <Users className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Streamline all your employee interactions from recruitment to retirement in one unified database.</p>
          <div className="module-list-items">
            <div className="module-list-item"><h4>Employee Profiles</h4><ul><li>Maintain central employee databases covering emergency contacts, tax info, and job history.</li></ul></div>
          </div>
        </div>
      )
    },
    {
      title: 'Inventory And Asset Management',
      icon: <PackageOpen className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Track stock levels, monitor warehouse movements, and ensure asset depreciation is logged automatically across your organization.</p>
          <div className="module-list-items">
            <div className="module-list-item"><h4>Stock Control</h4><ul><li>Real-time tracking of item quantities across multiple warehouse locations.</li></ul></div>
          </div>
        </div>
      )
    },
    {
      title: 'CRM & Sales',
      icon: <Target className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Manage your sales pipeline effectively to capture leads, track customer conversations, and quote seamlessly.</p>
          <div className="module-list-items">
            <div className="module-list-item"><h4>Lead Management</h4><ul><li>Capture leads directly from the web and assign them to representatives.</li></ul></div>
          </div>
        </div>
      )
    },
    {
      title: 'Procurement & Supply Chain',
      icon: <Truck className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Centralize your purchasing logic. Create requests for quotation, compare incoming vendor prices, and release purchase orders efficiently.</p>
        </div>
      )
    },
    {
      title: 'Manufacturing & Production',
      icon: <Factory className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Handle Bills of Materials (BOM), work center routing, and maintenance requests inside your factory walls without leaving the ERP.</p>
        </div>
      )
    },
  ],
  'ai-bi': () => [
    {
      title: 'Predictive Demand Forecasting',
      icon: <TrendingUp className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Anticipate market needs before they happen. Our AI models analyze historical data to predict future demand accurately.</p>
          <div className="module-list-items">
            <div className="module-list-item"><h4>Smart Replenishment</h4><ul><li>Automatically trigger warehouse restocking based on AI projections.</li></ul></div>
          </div>
        </div>
      )
    },
    {
      title: 'Automated Insight Dashboards',
      icon: <PieChart className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Transform raw data into visually stunning, interactive dashboards that summarize company performance.</p>
        </div>
      )
    },
  ],
  mobile: () => [
    {
      title: 'Cross-Platform Applications',
      icon: <Smartphone className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">We build utilizing React Native and Flutter, ensuring your application works flawlessly on iOS and Android with a single codebase.</p>
        </div>
      )
    },
    {
      title: 'Enterprise Tooling',
      icon: <LayoutTemplate className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Empower your on-the-go workforce with internal field-service tracking apps.</p>
        </div>
      )
    },
  ],
  ecommerce: () => [
    {
      title: 'Seamless Payment Integrations',
      icon: <CreditCard className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Integrate natively with Ethiopian payment systems like Telebirr, CBE Birr, and international gateways securely.</p>
        </div>
      )
    },
    {
      title: 'Platform Management',
      icon: <Store className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Robust inventory handling capable of processing thousands of SKUs concurrently without lag.</p>
        </div>
      )
    },
  ],
  web: () => [
    {
      title: 'High-Performance Landing Pages',
      icon: <LayoutTemplate className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Beautiful, conversion-optimized designs engineered using React, Next.js, and high-performance frameworks.</p>
        </div>
      )
    },
    {
      title: 'Scalable Backends',
      icon: <Server className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Robust databases utilizing PostgreSQL and Node.js ensuring military-grade stability for complex apps.</p>
        </div>
      )
    },
  ],
  game: () => [
    {
      title: 'Immersive Mobile Experiences',
      icon: <Gamepad2 className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">We develop highly optimized Unity and web-based games targeting vast mobile demographics.</p>
        </div>
      )
    },
  ],
  chatbots: () => [
    {
      title: 'Natural Language Processing',
      icon: <MessageSquare className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Bots trained in multiple languages (English, Amharic) capable of solving 70% of customer inquiries autonomously.</p>
        </div>
      )
    },
    {
      title: 'Workflow Automation',
      icon: <Workflow className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Connect your Telegram/WhatsApp chatbots directly to Odoo ERP to perform real-time order bookings.</p>
        </div>
      )
    },
  ],
  consulting: () => [
    {
      title: 'Digital Capability Audits',
      icon: <Presentation className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Our senior architects assess your current tech stack and formulate a roadmap for scalable transformation.</p>
        </div>
      )
    },
    {
      title: 'Corporate Training',
      icon: <Lightbulb className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Hands-on corporate IT training regimes empowering your staff to manage new software confidently.</p>
        </div>
      )
    },
  ],
  cybersecurity: () => [
    {
      title: 'Penetration Testing',
      icon: <ShieldCheck className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Systematic vulnerability scanning to identify structural weaknesses before malicious actors do.</p>
        </div>
      )
    },
    {
      title: 'Identity & Access Control',
      icon: <UserCheck className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">Deploy enterprise-grade biometric, 2FA, and SSO controls preserving organizational data integrity.</p>
        </div>
      )
    },
  ]
}

const serviceDictionary = {
  'erp': {
    title: 'Intelligent ERP Systems',
    label: 'Enterprise Solutions',
    intro1: 'Enterprise Resource Planning (ERP) is a software platform that manages and integrates your core business processes in real time. It replaces scattered tools with one system, giving you a complete picture of your business performance.',
    intro2: 'Instead of wasting hours reconciling spreadsheets or chasing approvals, ERP automates routine work and connects your teams with accurate data, so decisions are faster and smarter.',
    whyHeader: 'Why ERP?',
    whyList: [
      { t: 'Efficiency:', desc: 'Automates repetitive tasks like invoicing, reporting, and approvals.' },
      { t: 'Visibility:', desc: 'Gives managers real-time insights across departments.' },
      { t: 'Scalability:', desc: 'Grows intelligently with your company.' }
    ]
  },
  'ai-bi': {
    title: 'AI Data Intelligence',
    label: 'Analytics & Predictions',
    intro1: 'In the modern landscape, raw data alone isn\'t enough. AI-Powered Business Intelligence sifts through immense databases to find exactly what drives revenue and what degrades operational efficiency without requiring manual analysis.',
    intro2: 'By integrating these AI models directly into your workflow, executives get high-level predictive modeling while managers receive pinpoint alerts detailing actionable optimization metrics.',
    whyHeader: 'Why AI-Driven BI?',
    whyList: [
      { t: 'Proactive:', desc: 'Anticipate market supply shifts before they happen.' },
      { t: 'Precision:', desc: 'Limit human error in complicated financial forecasts.' },
      { t: 'Automated:', desc: 'Eliminate weekly manual spreadsheet aggregation.' }
    ]
  },
  'mobile': {
    title: 'Enterprise Mobile Apps',
    label: 'Mobile Development',
    intro1: 'Your consumers expect to communicate and transact anywhere, anytime. Our mobile applications are engineered from the ground up prioritizing speed, flawless design, and offline capability.',
    intro2: 'Whether it is a customer-facing e-commerce app or an internal field-agent logistics tool, we leverage React Native and Flutter to deliver premium cross-platform experiences.',
    whyHeader: 'Why Custom Mobile?',
    whyList: [
      { t: 'Reach:', desc: 'Capture users directly on their most highly-used devices.' },
      { t: 'Retention:', desc: 'Push notifications and streamlined UX drive significantly higher retention.' },
      { t: 'Utility:', desc: 'Capitalize on device-native features like GPS, Biometrics, and Cameras.' }
    ]
  },
  'ecommerce': {
    title: 'Scalable Digital Storefronts',
    label: 'E-Commerce Platforms',
    intro1: 'Selling online requires robust infrastructure. Our scalable e-commerce solutions manage everything from payment gateway integration to live localized inventory mapping.',
    intro2: 'We build tailored digital marketplaces emphasizing rapid page loads, frictionless checkouts, and unshakeable security to drive continuous conversion optimization.',
    whyHeader: 'Why Upgrade E-Commerce?',
    whyList: [
      { t: 'Boundless:', desc: 'Break geographical boundaries to securely reach an infinite customer base.' },
      { t: 'Autonomous:', desc: 'Catalog updates and invoice generation perform autonomously.' },
      { t: 'Security:', desc: 'Guaranteed compliance and safe payment routing.' }
    ]
  },
  'web': {
    title: 'Modern Web Architecture',
    label: 'Web Design & Dev',
    intro1: 'Your website is your digital corporate headquarters. We engineer high-fidelity, meticulously designed web applications that convey immense brand authority upon first visit.',
    intro2: 'Ranging from fluid corporate portfolios to immense, dashboard-driven SaaS platforms, our stack relies heavily on modern SEO-compatible frameworks designed for instantaneous execution.',
    whyHeader: 'Why High-End Web?',
    whyList: [
      { t: 'First Impressions:', desc: 'A stunning UI establishes immediate trust.' },
      { t: 'Indexable:', desc: 'Flawless code architecture improves Google positioning heavily.' },
      { t: 'Responsive:', desc: 'Perfectly adapts dynamically across desktops, tablets, and mobile devices.' }
    ]
  },
  'game': {
    title: 'Interactive Gaming Experiences',
    label: 'Game Development',
    intro1: 'Harness the immense engagement power of gaming. Our specialized division builds immersive digital experiences targeting vast demographics via compelling mechanics and narrative graphics.',
    intro2: 'From hyper-casual mobile titles emphasizing Ethiopian cultural heritage to complex corporate gamified training modules, we utilize Unity and robust physics engines.',
    whyHeader: 'Why Game Dev?',
    whyList: [
      { t: 'Engagement:', desc: 'Games retain user attention vastly more than traditional media.' },
      { t: 'Monetization:', desc: 'Integrate native advertising and micro-transactions fluidly.' },
      { t: 'Education:', desc: 'Dramatically improves corporate learning retention rates.' }
    ]
  },
  'chatbots': {
    title: 'Automated Agent Systems',
    label: 'AI & Automations',
    intro1: 'Drastically cut operational support costs while simultaneously improving customer satisfaction via instantaneous, natural language processing conversational agents.',
    intro2: 'Our multi-lingual automated chatbots integrate flawlessly into Telegram, WhatsApp, and proprietary websites to answer queries, process commands, and log data autonomously.',
    whyHeader: 'Why Use Chatbots?',
    whyList: [
      { t: '24/7 Uptime:', desc: 'Answer customer questions flawlessly regardless of time zones.' },
      { t: 'Integrated:', desc: 'Automatically input CRM data directly from user interactions.' },
      { t: 'Cost-Effective:', desc: 'Dramatically reduces call center operational loads.' }
    ]
  },
  'consulting': {
    title: 'Enterprise IT Roadmaps',
    label: 'Consulting & Strategy',
    intro1: 'Technology investments only yield returns if strategically navigated. Our enterprise architects act as your fractional CTOs, surveying your architecture to minimize tech debt.',
    intro2: 'Beyond mere advisory, we deploy rigorous training schedules and comprehensive digital transformation roadmaps ensuring staff embrace incoming structural changes.',
    whyHeader: 'Why IT Consulting?',
    whyList: [
      { t: 'Clarity:', desc: 'Avoid expensive software subscriptions that do not mesh with your operations.' },
      { t: 'Adoption:', desc: 'Overcome staff resistance through empathetic technological training.' },
      { t: 'Future-Proof:', desc: 'Design systems that easily scale 10x over the coming years.' }
    ]
  },
  'cybersecurity': {
    title: 'Fortified Data Protection',
    label: 'Cybersecurity',
    intro1: 'In an era of relentless digital assault, a single unpatched vulnerability can critically damage brand valuation and user trust. We enforce military-grade structural protocols.',
    intro2: 'Through intensive penetration testing, routine auditing, and access control management, we fortify organizational infrastructure to surpass standard regulatory compliance.',
    whyHeader: 'Why Prioritize Security?',
    whyList: [
      { t: 'Liability:', desc: 'Avoid catastrophic data breaches and accompanying legal repercussions.' },
      { t: 'Trust:', desc: 'Users heavily scrutinize platforms possessing their confidential material.' },
      { t: 'Resilience:', desc: 'Maintain flawless uptime through preventative DDOS architecture.' }
    ]
  }
}

const GenericServiceContent = ({ data, modules }) => (
  <div className="service-detail-container container">
    <div className="sd-sidebar">
      <div className="sd-graphic">
        <div className="sd-odoo-placeholder">
          <h1>{data.label.split(' ')[0]}</h1>
        </div>
      </div>
      
      <div className="sd-section">
        <h3 className="sd-heading">{data.whyHeader}</h3>
        <p className="sd-text-block">
          {data.whyList.map((item, index) => (
            <React.Fragment key={index}>
              <strong className="text-highlight">{item.t}</strong> {item.desc}<br/><br/>
            </React.Fragment>
          ))}
        </p>
      </div>

      <div className="sd-section">
        <h3 className="sd-heading">Strategic Impact</h3>
        <p className="sd-text-block">
          Implementing {data.label} fundamentally changes how decisions and operations are scaled within your ecosystem.
        </p>
      </div>
    </div>

    <div className="sd-main">
      <div className="sd-intro">
        <span className="sd-label">About {data.label}</span>
        <h2 className="sd-main-heading">{data.title}</h2>
        <p className="sd-paragraph">
          {data.intro1}
        </p>
        <p className="sd-paragraph">
          {data.intro2}
        </p>
      </div>

      <h3 className="sd-sub-heading">Modules & Capabilities</h3>
      <Accordion modules={modules} />
    </div>
  </div>
)

const ServiceDetailPage = () => {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id])

  const currentData = serviceDictionary[id]
  const currentModules = generateModules[id] ? generateModules[id]() : []

  return (
    <div className="service-detail-page">
      {currentData ? (
        <GenericServiceContent data={currentData} modules={currentModules} />
      ) : (
        <div className="container" style={{ padding: '8rem 0', minHeight: '60vh', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'var(--text-primary)' }}>Service Undefined</h1>
          <p style={{ color: 'var(--text-secondary)' }}>The requested service identifier was not found.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Home</Link>
        </div>
      )}
    </div>
  )
}

export default ServiceDetailPage
