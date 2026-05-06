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
          <p className="module-intro">This is the financial brain of your ERP system — the part that keeps money flowing, records straight, and managers sane. It connects with every other module (sales, procurement, HR, etc.) so numbers update automatically instead of relying on someone’s memory or a forgotten spreadsheet.</p>
          <div className="module-list-items">
            <div className="module-list-item">
              <h4>1. General Ledger (GL)</h4>
              <p>All your financial data ends up here — income, expenses, assets, liabilities.</p>
              <ul>
                <li>Create multi-level account structures.</li>
                <li>Auto-post entries from other modules (sales, payroll, inventory).</li>
                <li>Generate trial balances, balance sheets, and income statements in real time.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Gives management a live, trustworthy picture of company performance.</p>
            </div>
            <div className="module-list-item">
              <h4>2. Accounts Payable (AP)</h4>
              <p>Handles every outgoing payment and keeps vendors happy without overpaying.</p>
              <ul>
                <li>Record and approve supplier invoices.</li>
                <li>Match purchase orders with receipts before releasing payment.</li>
                <li>Schedule due dates and automate reminders.</li>
                <li>Track vendor balances and early-payment discounts.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Prevents duplicate or late payments and improves supplier relations.</p>
            </div>
            <div className="module-list-item">
              <h4>3. Accounts Receivable (AR)</h4>
              <p>Where your incoming money lives.</p>
              <ul>
                <li>Generate and email invoices automatically.</li>
                <li>Track who owes what, with credit limits and payment history.</li>
                <li>Send alerts for overdue balances and automate receipts.</li>
                <li>Integrate with CRM to link customers and sales invoices.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Improves cash flow by tightening collection and visibility.</p>
            </div>
            <div className="module-list-item">
              <h4>4. Cash & Bank Management</h4>
              <p>Keeps daily liquidity under control.</p>
              <ul>
                <li>Manage multiple bank accounts and petty cash.</li>
                <li>Automate bank reconciliation and transaction imports.</li>
                <li>Handle currency exchange and revaluation.</li>
                <li>Real-time cash-flow forecasting.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Ensures accurate cash positions and smarter short-term financial planning.</p>
            </div>
            <div className="module-list-item">
              <h4>5. Budgeting & Forecasting</h4>
              <p>Turns planning from guesswork into measurable control.</p>
              <ul>
                <li>Create department-level or project-based budgets.</li>
                <li>Compare actual vs. planned spending automatically.</li>
                <li>Simulate “what-if” financial scenarios.</li>
                <li>Lock and version budgets for audit tracking.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Gives managers control over spending before it happens, not after.</p>
            </div>
            <div className="module-list-item">
              <h4>6. Fixed Assets Management</h4>
              <p>For tracking everything your company owns — machines, vehicles, IT gear, even furniture.</p>
              <ul>
                <li>Record purchases, depreciation, and disposal.</li>
                <li>Auto-calculate depreciation by method and period.</li>
                <li>Tag assets to locations, departments, or users.</li>
                <li>Integrate with Maintenance and Accounting for full traceability.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Protects company property and provides accurate asset valuation.</p>
            </div>
            <div className="module-list-item">
              <h4>7. Tax & Compliance</h4>
              <p>Avoids those heart-stopping calls from auditors.</p>
              <ul>
                <li>Configure multiple tax types (VAT, withholding, etc.).</li>
                <li>Auto-calculate taxes on sales and purchases.</li>
                <li>Generate tax returns and electronic filings.</li>
                <li>Full audit trail with date, user, and transaction history.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Keeps your company compliant and audit-ready at all times.</p>
            </div>
            <div className="module-list-item">
              <h4>8. Financial Reporting & Analytics</h4>
              <p>Because data is only useful if you can read it.</p>
              <ul>
                <li>Real-time dashboards for cash flow, revenue, and expenses.</li>
                <li>Customizable financial statements by company, branch, or project.</li>
                <li>Drill down to transaction details from any report.</li>
                <li>Export reports to PDF, Excel, or live dashboards.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Enables informed decisions and gives leadership confidence in every number.</p>
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
          <p className="module-intro">The HRM module keeps every part of your workforce organized — hiring, paying, evaluating, and retaining talent. It connects with other ERP modules like Payroll, Finance, and Projects to automate the people side of your business.</p>
          <div className="module-list-items">
            <div className="module-list-item">
              <h4>1. Employee Information Management</h4>
              <p>A single, centralized database for all employee records.</p>
              <ul>
                <li>Store personal details, contact info, job position, and company hierarchy.</li>
                <li>Track employment history, transfers, promotions, and training.</li>
                <li>Attach scanned documents (contracts, IDs, certificates).</li>
                <li>Role-based access to protect sensitive employee data.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Eliminates paper files and keeps employee data secure, accurate, and easy to find.</p>
            </div>
            <div className="module-list-item">
              <h4>2. Recruitment & Onboarding</h4>
              <p>Handles the full hiring journey — from job posting to first-day setup.</p>
              <ul>
                <li>Manage job openings and applications in one system.</li>
                <li>Schedule interviews and record feedback.</li>
                <li>Generate offer letters and employment contracts automatically.</li>
                <li>Onboard new hires with task checklists and document tracking.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Speeds up hiring and ensures a smooth, professional experience for new employees.</p>
            </div>
            <div className="module-list-item">
              <h4>3. Payroll Management</h4>
              <p>Integrates directly with Accounting to make salary processing painless.</p>
              <ul>
                <li>Calculate gross pay, deductions, and net salary automatically.</li>
                <li>Handle bonuses, overtime, and tax deductions accurately.</li>
                <li>Generate payslips and bank transfer lists.</li>
                <li>Multi-currency and multi-company payroll support.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Reduces payroll errors and saves hours every pay cycle.</p>
            </div>
            <div className="module-list-item">
              <h4>4. Attendance & Leave Management</h4>
              <p>Tracks employee presence and absence without the drama.</p>
              <ul>
                <li>Clock-in/clock-out via biometric, web, or mobile apps.</li>
                <li>Automatic attendance logs integrated with payroll.</li>
                <li>Leave request, approval, and balance tracking workflows.</li>
                <li>Public holidays and shift schedules configurable by company.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Keeps attendance fair, transparent, and effortlessly linked to payroll.</p>
            </div>
            <div className="module-list-item">
              <h4>5. Performance Management</h4>
              <p>Turns appraisals from an annual headache into a continuous improvement system.</p>
              <ul>
                <li>Set goals and KPIs per role or department.</li>
                <li>Track progress and feedback throughout the year.</li>
                <li>360° evaluations with manager and peer reviews.</li>
                <li>Generate performance reports for promotion or training decisions.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Builds accountability and helps identify top performers early.</p>
            </div>
            <div className="module-list-item">
              <h4>6. Training & Development</h4>
              <p>Invests in employee growth instead of letting talent stagnate.</p>
              <ul>
                <li>Maintain a library of training programs and certifications.</li>
                <li>Schedule sessions, track attendance, and record results.</li>
                <li>Identify skill gaps automatically from performance data.</li>
                <li>Integrate with employee profiles for career path tracking.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Keeps your workforce skilled, motivated, and ready for new challenges.</p>
            </div>
            <div className="module-list-item">
              <h4>7. Benefits & Compensation</h4>
              <p>Manages non-salary benefits so HR doesn’t drown in spreadsheets.</p>
              <ul>
                <li>Define allowances, insurance, pensions, and bonuses.</li>
                <li>Automate eligibility rules and deduction logic.</li>
                <li>Integrate benefits data with Payroll and Accounting.</li>
                <li>Generate detailed reports for audits and management.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Simplifies complex compensation structures and ensures fairness.</p>
            </div>
            <div className="module-list-item">
              <h4>8. Employee Self-Service Portal</h4>
              <p>Gives staff access to their own information and requests.</p>
              <ul>
                <li>Submit leave, reimbursement, or document requests online.</li>
                <li>View payslips, attendance records, and company notices.</li>
                <li>Update personal information with HR approval workflow.</li>
                <li>Available via web or mobile app.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Reduces HR workload and makes employees more independent.</p>
            </div>
            <div className="module-list-item">
              <h4>9. Compliance & Policy Management</h4>
              <p>Keeps the organization legally clean and culturally consistent.</p>
              <ul>
                <li>Define and publish HR policies company-wide.</li>
                <li>Track contract renewals, ID expirations, and mandatory trainings.</li>
                <li>Generate compliance reports for audits or inspections.</li>
                <li>Alert HR about upcoming renewals or violations.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Protects the company from compliance risks and policy gaps.</p>
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
          <p className="module-intro">This module controls every physical item that moves through your company — from raw materials and spare parts to laptops and delivery trucks. It keeps quantity, value, and location accurate in real time.</p>
          <div className="module-list-items">
            <div className="module-list-item">
              <h4>1. Inventory Control</h4>
              <p>The heart of warehouse management.</p>
              <ul>
                <li>Real-time tracking of stock quantities and locations.</li>
                <li>Record item codes, serial numbers, and batch details.</li>
                <li>Set minimum and reorder levels with automatic alerts.</li>
                <li>FIFO, LIFO, or weighted-average costing options.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Prevents stockouts, overstocking, and the mysterious “missing item” problem that kills margins.</p>
            </div>
            <div className="module-list-item">
              <h4>2. Warehouse Management</h4>
              <p>Organizes how items move inside and between warehouses.</p>
              <ul>
                <li>Multi-warehouse, multi-location support.</li>
                <li>Define bins, racks, and zones for precise item placement.</li>
                <li>Record transfers between sites or branches.</li>
                <li>Integration with barcode/QR code scanners.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Makes warehouses smarter and faster instead of chaotic.</p>
            </div>
            <div className="module-list-item">
              <h4>3. Purchase & Receiving Integration</h4>
              <p>Keeps procurement and inventory in sync.</p>
              <ul>
                <li>Automatically updates stock on goods receipt.</li>
                <li>Match purchase orders with received quantities.</li>
                <li>Record quality checks and rejections at receiving stage.</li>
                <li>Track pending orders and supplier performance.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Eliminates double entry and gives full visibility from purchase to storage.</p>
            </div>
            <div className="module-list-item">
              <h4>4. Stock Movement & Transfer Tracking</h4>
              <p>Every movement is recorded — no more invisible inventory.</p>
              <ul>
                <li>Issue stock to departments or projects.</li>
                <li>Approve and log internal transfers digitally.</li>
                <li>Real-time balance update across all locations.</li>
                <li>Full audit trail of who moved what, when, and why.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Strengthens accountability and makes reconciliation painless.</p>
            </div>
            <div className="module-list-item">
              <h4>5. Asset Management</h4>
              <p>For items that last longer than a single transaction — vehicles, machines, computers, furniture.</p>
              <ul>
                <li>Record acquisition cost, location, and responsible employee.</li>
                <li>Schedule and track preventive maintenance.</li>
                <li>Manage warranties and service contracts.</li>
                <li>Handle disposal, sale, or reassignment with approval workflows.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Extends asset life, avoids downtime, and keeps depreciation accurate.</p>
            </div>
            <div className="module-list-item">
              <h4>6. Depreciation & Valuation</h4>
              <p>Integrates seamlessly with Accounting.</p>
              <ul>
                <li>Multiple depreciation methods (straight-line, declining balance, units of use).</li>
                <li>Auto-calculate depreciation monthly or yearly.</li>
                <li>Revalue assets and track adjustments.</li>
                <li>Post depreciation entries directly to the General Ledger.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Keeps asset values current and compliant with accounting standards.</p>
            </div>
            <div className="module-list-item">
              <h4>7. Inventory Costing & Valuation</h4>
              <p>Ties your stock value to financial accuracy.</p>
              <ul>
                <li>Automatically calculate cost of goods sold (COGS).</li>
                <li>Valuate inventory by method and category.</li>
                <li>Generate monthly and annual stock valuation reports.</li>
                <li>Integrate with Finance for audit and tax compliance.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Ensures financial reports reflect the true cost of materials and goods.</p>
            </div>
            <div className="module-list-item">
              <h4>8. Maintenance Management</h4>
              <p>Because neglected assets turn into expensive problems.</p>
              <ul>
                <li>Schedule regular service for machinery and equipment.</li>
                <li>Track maintenance requests, costs, and spare-part usage.</li>
                <li>Monitor downtime and repair history.</li>
                <li>Link maintenance data with asset and inventory records.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Keeps operations running smoothly and reduces unplanned outages.</p>
            </div>
            <div className="module-list-item">
              <h4>9. Reporting & Analytics</h4>
              <p>Data that helps managers act instead of guess.</p>
              <ul>
                <li>Stock movement history, fast/slow-moving item reports.</li>
                <li>Asset depreciation, aging, and maintenance cost analysis.</li>
                <li>Warehouse efficiency metrics and stock value trends.</li>
                <li>Exportable dashboards for management review.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Gives decision-makers clear visibility of materials, assets, and costs at every moment.</p>
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
          <p className="module-intro">This module manages your sales pipeline, customer interactions, and revenue tracking. It connects with Accounting, Inventory, and Marketing modules, giving you a complete view of every deal and every client.</p>
          <div className="module-list-items">
            <div className="module-list-item">
              <h4>1. Lead Management</h4>
              <p>Track potential clients from first contact to conversion.</p>
              <ul>
                <li>Capture leads from multiple sources (website, email, phone, events).</li>
                <li>Assign leads to sales reps automatically based on territory or expertise.</li>
                <li>Track follow-ups, meetings, and communication history.</li>
                <li>Score leads based on engagement and potential value.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Ensures no opportunity is lost and sales teams prioritize the right leads.</p>
            </div>
            <div className="module-list-item">
              <h4>2. Opportunity & Pipeline Management</h4>
              <p>Visualize and manage your sales process.</p>
              <ul>
                <li>Create opportunities linked to leads or existing customers.</li>
                <li>Track deals through stages: prospecting → negotiation → closing.</li>
                <li>Set probability, expected revenue, and closing dates for each deal.</li>
                <li>Generate pipeline reports for forecasting and resource planning.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Improves sales visibility and helps forecast revenue accurately.</p>
            </div>
            <div className="module-list-item">
              <h4>3. Quotation & Order Management</h4>
              <p>Streamline the path from quote to cash.</p>
              <ul>
                <li>Generate professional quotes based on product catalogs and pricing rules.</li>
                <li>Convert accepted quotes into sales orders automatically.</li>
                <li>Track order fulfillment and delivery schedules.</li>
                <li>Integrate with Inventory and Procurement for stock availability.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Reduces manual errors and accelerates order processing.</p>
            </div>
            <div className="module-list-item">
              <h4>4. Customer Database & Interaction Tracking</h4>
              <p>Keep all customer information in one place.</p>
              <ul>
                <li>Maintain detailed profiles with contact info, preferences, and history.</li>
                <li>Log emails, calls, meetings, and notes.</li>
                <li>Assign tasks to sales reps for follow-ups or reminders.</li>
                <li>Segment customers for targeted marketing and upselling.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Improves customer relationships and builds long-term loyalty.</p>
            </div>
            <div className="module-list-item">
              <h4>5. Sales Analytics & Reporting</h4>
              <p>Measure performance and optimize strategy.</p>
              <ul>
                <li>Track individual and team sales performance.</li>
                <li>Analyze trends in revenue, product demand, and customer behavior.</li>
                <li>Generate reports for pipeline, closed deals, and forecasting.</li>
                <li>Export dashboards and reports for management review.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Provides actionable insights to increase revenue and efficiency.</p>
            </div>
            <div className="module-list-item">
              <h4>6. Integration with Accounting & Inventory</h4>
              <p>Keep finances and stock aligned with sales.</p>
              <ul>
                <li>Automatic invoice creation when orders are confirmed.</li>
                <li>Real-time stock updates as orders are processed.</li>
                <li>Track outstanding payments and customer credit limits.</li>
                <li>Ensure accurate COGS and revenue reporting.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Reduces errors, improves cash flow, and links sales with operational data.</p>
            </div>
            <div className="module-list-item">
              <h4>7. Customer Support & Service Management</h4>
              <p>Optional module for after-sales support.</p>
              <ul>
                <li>Track support tickets linked to customer orders.</li>
                <li>Manage warranty claims, returns, and service requests.</li>
                <li>Analyze service trends and customer satisfaction.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Enhances post-sales experience and builds trust with clients.</p>
            </div>
            <div className="module-list-item">
              <h4>8. Mobile & Remote Access</h4>
              <p>Empowers sales teams on the go.</p>
              <ul>
                <li>Access leads, opportunities, and customer data from mobile devices.</li>
                <li>Update visit notes and orders in real-time.</li>
                <li>Receive alerts for high-priority tasks or customer actions.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Keeps your team responsive and productive anywhere.</p>
            </div>
            <div className="module-list-item">
              <h4>9. Automation & Alerts</h4>
              <p>Automate repetitive sales tasks.</p>
              <ul>
                <li>Follow-up reminders for leads and opportunities.</li>
                <li>Automatic notifications for order approvals, stock issues, or expiring contracts.</li>
                <li>Integration with email/SMS for communication.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Reduces manual work and ensures timely action on every sales opportunity.</p>
            </div>
            <div className="module-list-item">
              <h4>10. Reporting & Analytics Dashboards</h4>
              <p>Centralized view for management.</p>
              <ul>
                <li>Sales trends by product, region, or team.</li>
                <li>Customer segmentation and lifetime value reports.</li>
                <li>Pipeline, conversion, and performance dashboards.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Supports strategic decision-making and helps grow revenue efficiently.</p>
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
          <p className="module-intro">This module manages how your company sources, purchases, and receives materials or services. It links vendors, warehouses, and finance teams, ensuring every purchase is transparent, timely, and cost-effective.</p>
          <div className="module-list-items">
            <div className="module-list-item">
              <h4>1. Purchase Requisition & Approval Workflow</h4>
              <p>Turns manual paper trails into automated requests.</p>
              <ul>
                <li>Employees can create digital purchase requisitions.</li>
                <li>Set up multi-level approval workflows by department or budget.</li>
                <li>Track request status and approval history in real time.</li>
                <li>Automatically notify approvers and requesters at each step.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Prevents unauthorized spending and speeds up procurement decisions.</p>
            </div>
            <div className="module-list-item">
              <h4>2. Supplier & Vendor Management</h4>
              <p>Keeps a clean, centralized supplier database.</p>
              <ul>
                <li>Register supplier profiles, tax details, and payment terms.</li>
                <li>Rate suppliers by quality, delivery speed, and reliability.</li>
                <li>Track contract terms, renewal dates, and communication history.</li>
                <li>Maintain blacklists or preferred vendor lists.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Builds stronger vendor relationships and reduces purchase risks.</p>
            </div>
            <div className="module-list-item">
              <h4>3. Request for Quotation (RFQ) & Tender Management</h4>
              <p>Simplifies comparing suppliers before committing.</p>
              <ul>
                <li>Create and send RFQs to multiple suppliers at once.</li>
                <li>Record and compare prices, delivery times, and conditions.</li>
                <li>Auto-generate purchase orders from winning bids.</li>
                <li>Archive tender responses for audit and compliance.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Ensures fair competition and better pricing for your company.</p>
            </div>
            <div className="module-list-item">
              <h4>4. Purchase Order Management</h4>
              <p>The control center of buying operations.</p>
              <ul>
                <li>Generate and send POs directly to suppliers.</li>
                <li>Link POs with approved requisitions and budgets.</li>
                <li>Track order status: pending, shipped, or completed.</li>
                <li>Manage partial deliveries and balance quantities.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Reduces manual follow-up and keeps procurement fully traceable.</p>
            </div>
            <div className="module-list-item">
              <h4>5. Goods Receipt & Inspection</h4>
              <p>Guarantees what you ordered is exactly what you got.</p>
              <ul>
                <li>Record incoming goods by PO or supplier.</li>
                <li>Perform quantity and quality checks.</li>
                <li>Manage rejections, returns, or replacements easily.</li>
                <li>Automatically update inventory levels after approval.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Keeps your warehouse accurate and your finance records honest.</p>
            </div>
            <div className="module-list-item">
              <h4>6. Invoice Matching & Payment Tracking</h4>
              <p>Bridges Procurement with Accounting.</p>
              <ul>
                <li>Match supplier invoices with POs and goods receipts (3-way match).</li>
                <li>Approve invoices for payment automatically after verification.</li>
                <li>Track due dates, early-payment discounts, and pending balances.</li>
                <li>Integrate with accounting for expense posting.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Eliminates duplicate or false payments and maintains audit integrity.</p>
            </div>
            <div className="module-list-item">
              <h4>7. Contract & Agreement Management</h4>
              <p>Never lose track of supplier commitments.</p>
              <ul>
                <li>Store purchase contracts and service agreements in one place.</li>
                <li>Set alerts for renewal, expiry, or renegotiation dates.</li>
                <li>Record amendments and price revisions with full history.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Ensures compliance and avoids lapses in critical supply contracts.</p>
            </div>
            <div className="module-list-item">
              <h4>8. Budget & Spend Control</h4>
              <p>Keeps procurement aligned with company finances.</p>
              <ul>
                <li>Set department- or project-based purchase limits.</li>
                <li>Validate requests and POs against available budget.</li>
                <li>Generate budget utilization reports in real time.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Prevents overspending and supports financial planning.</p>
            </div>
            <div className="module-list-item">
              <h4>9. Logistics & Supply Chain Tracking</h4>
              <p>Tracks material movement across suppliers, warehouses, and branches.</p>
              <ul>
                <li>Monitor shipment status and delivery performance.</li>
                <li>Plan inbound and outbound logistics efficiently.</li>
                <li>Integrate with warehouse and inventory modules.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Creates end-to-end visibility across the entire supply chain.</p>
            </div>
            <div className="module-list-item">
              <h4>10. Reporting & Analytics</h4>
              <p>Turns procurement data into insight.</p>
              <ul>
                <li>Supplier performance reports and cost trend analysis.</li>
                <li>Purchase cycle time, budget variance, and savings reports.</li>
                <li>Dashboard views for management and auditors.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Supports strategic purchasing and smarter business decisions.</p>
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
          <p className="module-intro">This module manages the entire production process, from planning and scheduling to quality control and output tracking. It connects raw materials, inventory, and work orders to ensure efficient manufacturing operations.</p>
          <div className="module-list-items">
            <div className="module-list-item">
              <h4>1. Bill of Materials (BOM) Management</h4>
              <p>Defines what materials are needed to produce each product.</p>
              <ul>
                <li>Create multi-level BOMs for complex products.</li>
                <li>Track components, subassemblies, and finished goods.</li>
                <li>Manage revisions and versions of BOMs automatically.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Ensures accurate material planning and reduces production errors.</p>
            </div>
            <div className="module-list-item">
              <h4>2. Production Planning & Scheduling</h4>
              <p>Optimizes production timelines and resources.</p>
              <ul>
                <li>Plan production orders based on demand forecasts and stock levels.</li>
                <li>Schedule machines, labor, and work centers efficiently.</li>
                <li>Track progress in real time and adjust schedules dynamically.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Reduces downtime, improves resource utilization, and meets delivery deadlines.</p>
            </div>
            <div className="module-list-item">
              <h4>3. Shop Floor Control</h4>
              <p>Monitors production activities on the factory floor.</p>
              <ul>
                <li>Track work-in-progress (WIP) at each stage.</li>
                <li>Record labor and machine hours for accurate costing.</li>
                <li>Capture quality checks and defects in real time.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Provides visibility into operations and ensures quality standards.</p>
            </div>
            <div className="module-list-item">
              <h4>4. Quality Management</h4>
              <p>Ensures products meet required standards.</p>
              <ul>
                <li>Define inspection criteria at different production stages.</li>
                <li>Record test results, defects, and corrective actions.</li>
                <li>Integrate quality data with production and inventory modules.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Reduces waste, improves customer satisfaction, and ensures compliance.</p>
            </div>
            <div className="module-list-item">
              <h4>5. Maintenance & Equipment Management</h4>
              <p>Keeps machinery operational.</p>
              <ul>
                <li>Schedule preventive maintenance and track repairs.</li>
                <li>Monitor equipment downtime and usage.</li>
                <li>Maintain maintenance history for all assets.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Minimizes production interruptions and extends equipment life.</p>
            </div>
            <div className="module-list-item">
              <h4>6. Reporting & Analytics</h4>
              <p>Measure efficiency and track KPIs.</p>
              <ul>
                <li>Production output, scrap rate, and machine utilization.</li>
                <li>Cost analysis per product or production batch.</li>
                <li>Customizable dashboards for managers and executives.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Helps optimize production processes and reduce costs.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Project Management',
      icon: <Workflow className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">This module helps plan, execute, and monitor projects efficiently, ensuring deadlines, budgets, and quality targets are met.</p>
          <div className="module-list-items">
            <div className="module-list-item">
              <h4>1. Task & Workflow Management</h4>
              <p>Organize projects into tasks and subtasks.</p>
              <ul>
                <li>Assign responsibilities to team members.</li>
                <li>Track task progress and deadlines.</li>
                <li>Visualize tasks with Gantt charts or Kanban boards.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Ensures work is structured and everyone knows what to do.</p>
            </div>
            <div className="module-list-item">
              <h4>2. Resource & Time Allocation</h4>
              <p>Manage people, equipment, and budgets effectively.</p>
              <ul>
                <li>Assign resources to tasks and monitor availability.</li>
                <li>Track hours worked per project or task.</li>
                <li>Avoid overbooking or underutilizing resources.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Optimizes productivity and keeps projects on schedule.</p>
            </div>
            <div className="module-list-item">
              <h4>3. Budgeting & Cost Tracking</h4>
              <p>Monitor project finances in real time.</p>
              <ul>
                <li>Define project budgets and allocate expenses.</li>
                <li>Track actual vs. planned costs for tasks and resources.</li>
                <li>Generate alerts for budget overruns.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Prevents cost overruns and ensures financial accountability.</p>
            </div>
            <div className="module-list-item">
              <h4>4. Quality Management</h4>
              <p>Ensures projects meet required standards.</p>
              <ul>
                <li>Define inspection criteria at different project stages.</li>
                <li>Record test results, defects, and corrective actions.</li>
                <li>Integrate quality data with project and resource modules.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Reduces waste, improves customer satisfaction, and ensures compliance.</p>
            </div>
            <div className="module-list-item">
              <h4>5. Maintenance & Equipment Management</h4>
              <p>Keeps project-specific machinery operational.</p>
              <ul>
                <li>Schedule preventive maintenance and track repairs.</li>
                <li>Monitor equipment downtime and usage.</li>
                <li>Maintain maintenance history for all project assets.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Minimizes interruptions and extends equipment life.</p>
            </div>
            <div className="module-list-item">
              <h4>6. Reporting & Analytics</h4>
              <p>Measure efficiency and track KPIs.</p>
              <ul>
                <li>Project output, completion rate, and resource utilization.</li>
                <li>Cost analysis per project or milestone.</li>
                <li>Customizable dashboards for project managers.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Helps optimize project workflows and reduce costs.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Business Intelligence & Reporting',
      icon: <PieChart className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">This module turns raw data from all ERP modules into actionable insights, helping management make informed decisions.</p>
          <div className="module-list-items">
            <div className="module-list-item">
              <h4>1. Data Integration</h4>
              <p>Consolidates information from finance, sales, HR, inventory, and production.</p>
              <ul>
                <li>Connect multiple databases and modules.</li>
                <li>Ensure clean, accurate, and up-to-date data.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Provides a single source of truth for the business.</p>
            </div>
            <div className="module-list-item">
              <h4>2. Dashboards & KPI Tracking</h4>
              <p>Visualize performance metrics in real time.</p>
              <ul>
                <li>Customizable dashboards for departments and executives.</li>
                <li>Track KPIs like revenue, expenses, production efficiency, and employee performance.</li>
                <li>Drill-down capabilities to see details behind the metrics.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Enables quick decision-making and proactive management.</p>
            </div>
            <div className="module-list-item">
              <h4>3. Advanced Analytics & Forecasting</h4>
              <p>Predict trends and identify opportunities.</p>
              <ul>
                <li>Perform trend analysis and predictive modeling.</li>
                <li>Forecast sales, inventory needs, and project outcomes.</li>
                <li>Identify anomalies or inefficiencies.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Turns data into forward-looking insights for strategic planning.</p>
            </div>
            <div className="module-list-item">
              <h4>4. Reports & Exports</h4>
              <p>Generate and share insights easily.</p>
              <ul>
                <li>Standardized and custom reports in PDF, Excel, or online dashboards.</li>
                <li>Scheduled automated reports for management teams.</li>
                <li>Integration with other modules for real-time reporting.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Saves time and ensures stakeholders have the information they need.</p>
            </div>
            <div className="module-list-item">
              <h4>5. Decision Support & Alerts</h4>
              <p>Helps management act on insights quickly.</p>
              <ul>
                <li>Set alerts for KPI thresholds, budget overruns, or production issues.</li>
                <li>Provide scenario analysis for strategic decisions.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Improves responsiveness and reduces risk from delayed information.</p>
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
          <p className="module-intro">This module manages all company vehicles — from cars and trucks to specialized equipment. It ensures efficient usage, maintenance, and cost control.</p>
          <div className="module-list-items">
            <div className="module-list-item">
              <h4>1. Vehicle Register & Tracking</h4>
              <p>Keep complete records of all vehicles.</p>
              <ul>
                <li>Store details: registration, model, mileage, fuel type, and assigned driver.</li>
                <li>Track vehicle location via GPS (optional).</li>
                <li>Record usage history and trips.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Improves accountability and reduces misuse of vehicles.</p>
            </div>
            <div className="module-list-item">
              <h4>2. Maintenance & Repairs</h4>
              <p>Ensure vehicles stay roadworthy and safe.</p>
              <ul>
                <li>Schedule preventive maintenance and inspections.</li>
                <li>Track repairs, spare parts usage, and service costs.</li>
                <li>Alert for upcoming maintenance or expired insurance.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Reduces downtime, prevents breakdowns, and saves repair costs.</p>
            </div>
            <div className="module-list-item">
              <h4>3. Fuel & Expense Management</h4>
              <p>Control costs associated with fleet operations.</p>
              <ul>
                <li>Record fuel consumption and efficiency.</li>
                <li>Track tolls, fines, and other vehicle expenses.</li>
                <li>Integrate expenses with Accounting module.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Helps optimize costs and improves fleet budgeting.</p>
            </div>
            <div className="module-list-item">
              <h4>4. Driver & Assignment Management</h4>
              <p>Manage who drives which vehicle and when.</p>
              <ul>
                <li>Assign vehicles to drivers and track schedules.</li>
                <li>Record driver performance, incidents, or violations.</li>
                <li>Maintain licenses and training compliance.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Ensures safe and efficient use of fleet resources.</p>
            </div>
            <div className="module-list-item">
              <h4>5. Trip & Route Planning</h4>
              <p>Optimize logistics and field operations.</p>
              <ul>
                <li>Plan routes for deliveries, service calls, or pickups.</li>
                <li>Track vehicle usage and travel time.</li>
                <li>Reduce fuel consumption and improve delivery efficiency.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Saves time and operational costs while improving service.</p>
            </div>
            <div className="module-list-item">
              <h4>6. Reporting & Analytics</h4>
              <p>Turn fleet data into actionable insight.</p>
              <ul>
                <li>Vehicle utilization, maintenance costs, and efficiency reports.</li>
                <li>Track fuel consumption trends and fleet performance.</li>
                <li>Export reports for management review and audits.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Helps management make informed decisions about fleet operations.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Field Service & Workshop Management',
      icon: <Wrench className="module-title-icon" size={20} />,
      content: (
        <div className="module-content">
          <p className="module-intro">This module handles on-site service, maintenance, and workshop operations, connecting staff, assets, and customers for smooth execution.</p>
          <div className="module-list-items">
            <div className="module-list-item">
              <h4>1. Job / Work Order Management</h4>
              <p>Track every service or field assignment.</p>
              <ul>
                <li>Create and assign work orders to staff or technicians.</li>
                <li>Include detailed instructions, required tools, and materials.</li>
                <li>Track status: pending, in-progress, or completed.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Ensures accountability and visibility of field activities.</p>
            </div>
            <div className="module-list-item">
              <h4>2. Resource & Equipment Management</h4>
              <p>Ensure the right tools and equipment are available.</p>
              <ul>
                <li>Allocate tools, spare parts, and machines to work orders.</li>
                <li>Track usage, availability, and maintenance of equipment.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Reduces downtime and prevents lost or misused resources.</p>
            </div>
            <div className="module-list-item">
              <h4>3. Scheduling & Dispatching</h4>
              <p>Organize field operations efficiently.</p>
              <ul>
                <li>Assign tasks to technicians based on availability, skill, or location.</li>
                <li>Plan routes for on-site visits.</li>
                <li>Automate alerts for upcoming jobs.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Maximizes staff efficiency and reduces response times.</p>
            </div>
            <div className="module-list-item">
              <h4>4. Inventory & Materials Tracking</h4>
              <p>Keep materials used in workshops or fieldwork under control.</p>
              <ul>
                <li>Track spare parts, consumables, and tools used per job.</li>
                <li>Integrate with Inventory module for stock updates.</li>
                <li>Alert for low stock levels.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Prevents stockouts and ensures smooth field operations.</p>
            </div>
            <div className="module-list-item">
              <h4>5. Time & Labor Tracking</h4>
              <p>Monitor staff performance and work hours.</p>
              <ul>
                <li>Record hours spent per job or project.</li>
                <li>Track overtime, travel time, and productivity.</li>
                <li>Integrate with Payroll for accurate wage calculation.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Ensures fair labor accounting and improves resource planning.</p>
            </div>
            <div className="module-list-item">
              <h4>6. Reporting & Analytics</h4>
              <p>Measure efficiency and service quality.</p>
              <ul>
                <li>Track job completion rates, response times, and costs.</li>
                <li>Analyze resource usage and workshop performance.</li>
                <li>Export dashboards for management and client reporting.</li>
              </ul>
              <p className="module-purpose"><strong>Purpose:</strong> Helps management optimize field operations and service delivery.</p>
            </div>
          </div>
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
