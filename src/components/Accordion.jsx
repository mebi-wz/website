import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import './Accordion.css'

const Accordion = ({ modules }) => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="accordion">
      {modules.map((mod, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <div className="accordion-header" onClick={() => toggle(index)}>
              <h3 className="accordion-title">{mod.title}</h3>
              <div className="accordion-icon">
                {isOpen ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
              </div>
            </div>
            {isOpen && (
              <div className="accordion-content">
                {mod.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
