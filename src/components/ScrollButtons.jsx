import React, { useState, useEffect } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'
import './ScrollButtons.css'

const ScrollButtons = () => {
  const [showUp, setShowUp] = useState(false)
  const [showDown, setShowDown] = useState(true)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowH = window.innerHeight
      const docH = document.documentElement.scrollHeight

      setShowUp(scrollY > 300)
      setIsAtBottom(scrollY + windowH >= docH - 50)
      setShowDown(scrollY + windowH < docH - 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }

  return (
    <div className="scroll-buttons" role="group" aria-label="Page navigation">
      {/* Scroll Up */}
      <button
        id="scroll-to-top"
        className={`scroll-btn scroll-btn--up ${showUp ? 'scroll-btn--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <ArrowUp size={18} strokeWidth={2.5} />
      </button>

      {/* Scroll Down */}
      <button
        id="scroll-to-bottom"
        className={`scroll-btn scroll-btn--down ${showDown ? 'scroll-btn--visible' : ''}`}
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        title="Scroll to bottom"
      >
        <ArrowDown size={18} strokeWidth={2.5} />
      </button>
    </div>
  )
}

export default ScrollButtons
