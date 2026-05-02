import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import { Building2, Users, PackageOpen, Target, Truck, Factory, Folders, PieChart, Car, Wrench } from 'lucide-react'
import './ServiceDetail.css'

const generateERPModules = () => [
  {
    title: 'Finance & Accounting',
    icon: <Building2 className="module-title-icon" size={20} />,
    content: (
      <div className="module-content">
        <p className="module-intro">
          This is the financial brain of your ERP system — the part that keeps money flowing and records straight. It connects with every other module (sales, procurement, HR) so numbers update automatically without relying on spreadsheets.
        </p>
        <div className="module-list-items">
          <div className="module-list-item">
            <h4>General Ledger (GL)</h4>
            <ul>
              <li>Create multi-level account structures.</li>
              <li>Auto-post entries from other modules (sales, payroll, inventory).</li>
              <li>Generate trial balances, balance sheets, and income statements in real time.</li>
            </ul>
          </div>
          <div className="module-list-item">
            <h4>Accounts Payable & Receivable</h4>
            <ul>
              <li>Record and approve supplier invoices automatically.</li>
              <li>Manage outgoing payments and client billing systematically.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Human Resource Management',
    icon: <Users className="module-title-icon" size={20} />,
    content: (
      <div className="module-content">
        <p className="module-intro">
          Streamline all your employee interactions from recruitment to retirement in one unified database.
        </p>
        <div className="module-list-items">
          <div className="module-list-item">
            <h4>Employee Profiles</h4>
            <ul>
              <li>Maintain central employee databases covering emergency contacts, tax info, and job history.</li>
            </ul>
          </div>
          <div className="module-list-item">
            <h4>Leaves & Time Off</h4>
            <ul>
              <li>Automate vacation requests, manager approvals, and accrual tracking.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Inventory And Asset Management',
    icon: <PackageOpen className="module-title-icon" size={20} />,
    content: (
      <div className="module-content">
        <p className="module-intro">
          Track stock levels, monitor warehouse movements, and ensure asset depreciation is logged automatically across your organization.
        </p>
        <div className="module-list-items">
          <div className="module-list-item">
            <h4>Stock Control</h4>
            <ul>
              <li>Real-time tracking of item quantities across multiple warehouse locations.</li>
              <li>Automated re-ordering triggers when supplies drop below thresholds.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'CRM & Sales',
    icon: <Target className="module-title-icon" size={20} />,
    content: (
      <div className="module-content">
        <p className="module-intro">
          Manage your sales pipeline effectively to capture leads, track customer conversations, and quote seamlessly.
        </p>
        <div className="module-list-items">
          <div className="module-list-item">
            <h4>Lead Management</h4>
            <ul>
              <li>Capture leads directly from the web and assign them to representatives.</li>
              <li>Track email and phone communications directly on the customer record.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Procurement & Supply Chain',
    icon: <Truck className="module-title-icon" size={20} />,
    content: (
      <div className="module-content">
        <p className="module-intro">
          Centralize your purchasing logic. Create requests for quotation, compare incoming vendor prices, and release purchase orders efficiently.
        </p>
        <div className="module-list-items">
          <div className="module-list-item">
            <h4>Vendor Management</h4>
            <ul>
              <li>Compare multiple supplier bids before final selection.</li>
              <li>Route purchase approvals systematically through management hierarchies.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Manufacturing & Production',
    icon: <Factory className="module-title-icon" size={20} />,
    content: (
      <div className="module-content">
        <p className="module-intro">
          Handle Bills of Materials (BOM), work center routing, and maintenance requests inside your factory walls without leaving the ERP.
        </p>
        <div className="module-list-items">
          <div className="module-list-item">
            <h4>Work Orders</h4>
            <ul>
              <li>Schedule production runs based on raw material availability.</li>
              <li>Automatically decrease inventory stock for consumed raw goods during manufacturing.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Project Management',
    icon: <Folders className="module-title-icon" size={20} />,
    content: (
      <div className="module-content">
        <p className="module-intro">
          Organize, schedule, and plan your projects securely. Track billable hours and invoice directly from project milestones.
        </p>
        <div className="module-list-items">
          <div className="module-list-item">
            <h4>Timesheets</h4>
            <ul>
              <li>Allow employees to submit timesheets directly linked to active project tasks.</li>
              <li>Analyze project profitability in real-time.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Reporting & Business Intelligence',
    icon: <PieChart className="module-title-icon" size={20} />,
    content: (
      <div className="module-content">
        <p className="module-intro">
          Unlock the data within your ERP to generate beautiful, actionable reports, dashboards, and graphical analyses.
        </p>
        <div className="module-list-items">
          <div className="module-list-item">
            <h4>Dashboards</h4>
            <ul>
              <li>Build user-specific dashboards for distinct roles (CEO, VP Sales, Warehouse Manager).</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Fleet Management',
    icon: <Car className="module-title-icon" size={20} />,
    content: (
      <div className="module-content">
        <p className="module-intro">
          Maintain your organization's vehicles efficiently, tracking fuel costs, service logs, and driver assignments automatically.
        </p>
        <div className="module-list-items">
          <div className="module-list-item">
            <h4>Service Logs</h4>
            <ul>
              <li>Schedule routine maintenance checkups and record associated costs against the company ledger.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Workshop & Field Work',
    icon: <Wrench className="module-title-icon" size={20} />,
    content: (
      <div className="module-content">
        <p className="module-intro">
          Connect your remote technicians with headquarters. Submit field reports, log job timings, and consume spare parts from mobile devices.
        </p>
        <div className="module-list-items">
          <div className="module-list-item">
            <h4>Field Service</h4>
            <ul>
              <li>Assign technicians to physical locations based on proximity and skill-sets.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
]

const ERPContent = () => (
  <div className="service-detail-container container">
    <div className="sd-sidebar">
      <div className="sd-graphic">
        <div className="sd-odoo-placeholder">
          <h1>odoo</h1>
        </div>
      </div>
      
      <div className="sd-section">
        <h3 className="sd-heading">Why ERP?</h3>
        <p className="sd-text-block">
          <strong className="text-highlight">Efficiency:</strong> Automates repetitive tasks like invoicing, reporting, and approvals.<br/><br/>
          <strong className="text-highlight">Visibility:</strong> Gives managers real-time insights across departments.<br/><br/>
          <strong className="text-highlight">Scalability:</strong> Grows with your company—whether you're 10 employees or 10,000.<br/><br/>
          <strong className="text-highlight">Accuracy:</strong> Reduces errors from manual data entry and fragmented systems.<br/><br/>
          <strong className="text-highlight">Collaboration:</strong> Different teams (finance, HR, sales, etc.) work off the same data.
        </p>
      </div>

      <div className="sd-section">
        <h3 className="sd-heading">ERP In Action</h3>
        <p className="sd-text-block">
          Enterprise Resource Planning fundamentally changes how decisions are made. By connecting disparate data sources, management teams can pivot instantly based on live insights rather than end-of-month reconciliations.
        </p>
      </div>
    </div>

    <div className="sd-main">
      <div className="sd-intro">
        <span className="sd-label">About Enterprise Solutions</span>
        <h2 className="sd-main-heading">Intelligent ERP Systems</h2>
        <p className="sd-paragraph">
          Enterprise Resource Planning (ERP) is a software platform that manages and integrates your core business processes in real time. It replaces scattered tools with one system, giving you a complete picture of how your business is performing—finance, people, inventory, customers, projects, all in one place.
        </p>
        <p className="sd-paragraph">
          Instead of wasting hours reconciling spreadsheets or chasing approvals, ERP automates routine work and connects your teams with accurate data, so decisions are faster and smarter.
        </p>
      </div>

      <h3 className="sd-sub-heading">Modules We Provide</h3>
      <Accordion modules={generateERPModules()} />
    </div>
  </div>
)

const ServiceDetailPage = () => {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id])

  return (
    <div className="service-detail-page">
      {id === 'erp' ? (
        <ERPContent />
      ) : (
        <div className="container" style={{ padding: '8rem 0', minHeight: '60vh', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'var(--text-primary)' }}>Coming Soon</h1>
          <p style={{ color: 'var(--text-secondary)' }}>We're currently expanding the details for our {id.toUpperCase()} service.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Home</Link>
        </div>
      )}
    </div>
  )
}

export default ServiceDetailPage
