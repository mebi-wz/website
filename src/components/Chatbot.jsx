import React, { useState, useRef, useEffect } from 'react'
import { MessageSquare, X, Send, Bot } from 'lucide-react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import './Chatbot.css'

const PRESETS = [
  {
    keywords: ['service', 'what do you do', 'offer', 'work'],
    reply: 'We offer high-quality software services including Enterprise ERP Implementation (Odoo/SAP), Custom Web & Mobile Apps, AI & Workflow Automation, Game Development, and DevOps consulting.'
  },
  {
    keywords: ['contact', 'email', 'phone', 'call', 'address', 'office', 'where'],
    reply: 'You can reach us at info@marsbestech.com, call us at +251 980 671 768, or visit our office at Ayat, Addis Ababa, Ethiopia.'
  },
  {
    keywords: ['erp', 'odoo', 'sap', 'customization'],
    reply: 'We are experts in ERP customization, especially Odoo and SAP. We align business processes like accounting, inventory, and HR to the Ethiopian regulatory landscape.'
  },
  {
    keywords: ['mobile', 'app', 'android', 'ios', 'flutter', 'react native'],
    reply: 'Yes, we design and build cross-platform and native mobile applications using React Native and Flutter, ensuring native performance and beautiful designs.'
  },
  {
    keywords: ['price', 'cost', 'pricing', 'quote'],
    reply: 'Pricing depends on the scope and complexity of your project. We offer free consultations! Please write to info@marsbestech.com or use our Contact Form to get a custom quote.'
  },
  {
    keywords: ['about', 'who are you', 'marsbes'],
    reply: 'Marsbes Tech is an Addis Ababa-based enterprise technology agency delivering state-of-the-art software, integrations, AI automation, and digital products.'
  }
]

const SYSTEM_INSTRUCTION = `You are a helpful, professional, and friendly AI chatbot assistant for Marsbes Tech (a leading enterprise software and technology agency based in Addis Ababa, Ethiopia).
Your goal is to answer inquiries about Marsbes Tech.

Here is key information about Marsbes Tech:
- Office Location: Ayat, Addis Ababa, Ethiopia.
- Contact Details: info@marsbestech.com | Phone: +251 980 671 768.
- Working Hours: Mon-Sat: 8:00am To 5:00pm.
- Services Offered:
  1. Enterprise ERP Implementation: Customization and deployment of ERP systems (Odoo, SAP) matching the Ethiopian tax & business landscape.
  2. Custom Web & Mobile Apps: Natively compiled mobile applications (using React Native, Flutter) and premium web platforms.
  3. AI & Workflow Automation: Streamlining workflows, AI integrations, data analytics.
  4. Game Development: Creating engaging interactive experiences.
  5. DevOps Consulting: Modern CI/CD pipelines, cloud deployment.

Behavior guidelines:
- Be polite, direct, concise, and helpful.
- Suggest leaving a message if you don't know the answer or if the user wants custom support.
- If they ask how to contact the team, give our email (info@marsbestech.com) and phone (+251 980 671 768), and mention they can use the "Leave a Message" option.
- Keep responses relatively brief (max 2-3 sentences per answer) to fit neatly in the chat bubbles. Do not use Markdown headings or lists unless absolutely necessary; keep answers conversational.
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi there! 👋 I am your Marsbes Tech assistant. How can I help you today?'
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [step, setStep] = useState(null) // null, 'email', 'name', 'message'
  const [form, setForm] = useState({ email: '', name: '', message: '' })
  
  const messagesEndRef = useRef(null)

  // Scroll to bottom whenever messages change or bot starts typing
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSend = (textToSend) => {
    const text = textToSend.trim()
    if (!text) return

    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text }])
    setInput('')
    setIsTyping(true)

    // Lead collector flow
    if (step === 'email') {
      setTimeout(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(text)) {
          setMessages((prev) => [
            ...prev,
            { sender: 'bot', text: 'Please enter a valid email address so we can reach you:' }
          ])
        } else {
          setForm((prev) => ({ ...prev, email: text }))
          setStep('name')
          setMessages((prev) => [
            ...prev,
            { sender: 'bot', text: 'Thank you! What is your full name?' }
          ])
        }
        setIsTyping(false)
      }, 1000)
      return
    }

    if (step === 'name') {
      setTimeout(() => {
        setForm((prev) => ({ ...prev, name: text }))
        setStep('message')
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: 'Excellent. What is your message or project description?' }
        ])
        setIsTyping(false)
      }, 1000)
      return
    }

    if (step === 'message') {
      // Send message to backend
      const finalForm = { ...form, message: text }
      setTimeout(async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              name: finalForm.name,
              email: finalForm.email,
              subject: `Chatbot Contact from ${finalForm.name}`,
              message: finalForm.message
            })
          })

          if (response.ok) {
            setMessages((prev) => [
              ...prev,
              { sender: 'bot', text: `Success! Your message has been sent to our team. Thank you, ${finalForm.name}! We will get back to you at ${finalForm.email} within 24 hours.` }
            ])
          } else {
            throw new Error('Server error')
          }
        } catch (err) {
          setMessages((prev) => [
            ...prev,
            { sender: 'bot', text: `Sorry, I had trouble sending that automatically. Please feel free to email us directly at info@marsbestech.com or call +251 980 671 768.` }
          ])
        } finally {
          setStep(null)
          setForm({ email: '', name: '', message: '' })
          setIsTyping(false)
        }
      }, 1000)
      return
    }

    // Normal chatbot response (Gemini AI with preset fallback)
    const handleNormalChat = async () => {
      const normalized = text.toLowerCase()
      
      // Direct detection of leaving a message
      if (
        normalized.includes('leave a message') || 
        normalized.includes('contact us') || 
        normalized.includes('send message') || 
        normalized.includes('talk to human')
      ) {
        setStep('email')
        setMessages((prev) => [
          ...prev,
          { sender: 'bot', text: "Sure! I can collect your details and send a message directly to our team. Please type your Email Address first:" }
        ])
        setIsTyping(false)
        return
      }

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY
      if (apiKey) {
        try {
          const genAI = new GoogleGenerativeAI(apiKey)
          const model = genAI.getGenerativeModel({
            model: 'gemini-2.5-flash',
            systemInstruction: SYSTEM_INSTRUCTION
          })
          
          // Map React state history to Gemini history (excluding initial welcome message, and ensuring alternating roles starting with user)
          const historyToMap = messages.slice(1)
          const geminiHistory = []
          let expectedRole = 'user'
          
          for (const msg of historyToMap) {
            const role = msg.sender === 'user' ? 'user' : 'model'
            if (role === expectedRole) {
              geminiHistory.push({
                role,
                parts: [{ text: msg.text }]
              })
              expectedRole = expectedRole === 'user' ? 'model' : 'user'
            }
          }

          const chat = model.startChat({ history: geminiHistory })
          const result = await chat.sendMessage(text)
          const replyText = result.response.text()

          setMessages((prev) => [...prev, { sender: 'bot', text: replyText }])
          setIsTyping(false)
          return
        } catch (error) {
          console.error("Gemini API error, falling back to presets:", error)
        }
      }

      // Fallback: Normal bot presets
      let replyText = "That's a great question! If you want to send a message directly to our team, just type 'leave a message' or click the chip below."

      // Search presets
      for (const preset of PRESETS) {
        if (preset.keywords.some((k) => normalized.includes(k))) {
          replyText = preset.reply
          break
        }
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: replyText }])
      setIsTyping(false)
    }

    handleNormalChat()
  }

  const handleSuggestionClick = (suggestionText) => {
    handleSend(suggestionText)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend(input)
    }
  }

  return (
    <div className="chatbot-container">
      {/* Floating Trigger Button */}
      <button 
        className="chatbot-trigger" 
        onClick={toggleChat}
        aria-label="Open chat assistant"
      >
        {isOpen ? (
          <X size={26} />
        ) : (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.75" className="bot-icon-svg">
            <rect x="4" y="6" width="16" height="13" rx="3" fill="rgba(255, 255, 255, 0.05)" />
            <path d="M2 11h2M20 11h2" strokeWidth="2" />
            <circle cx="12" cy="3" r="1.5" fill="var(--bg-darker)" />
            <path d="M12 4.5v1.5" />
            <circle cx="9" cy="11.5" r="1.5" fill="currentColor" className="bot-eye-left" />
            <circle cx="15" cy="11.5" r="1.5" fill="currentColor" className="bot-eye-right" />
            <path d="M9 15.5c1 1 5 1 6 0" strokeWidth="1.5" />
          </svg>
        )}
        <div className="chatbot-trigger__pulse" />
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'chatbot-window--open' : ''}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header__info">
            <div className="chatbot-header__avatar">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="bot-icon-svg" style={{ transform: 'none' }}>
                <rect x="4" y="6" width="16" height="13" rx="3" />
                <path d="M2 11h2M20 11h2" strokeWidth="2" />
                <circle cx="12" cy="3" r="1.2" fill="var(--accent-primary)" />
                <path d="M12 4.5v1.5" />
                <circle cx="9" cy="11.5" r="1.2" fill="currentColor" />
                <circle cx="15" cy="11.5" r="1.2" fill="currentColor" />
                <path d="M9 15.5c1 1 5 1 6 0" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="chatbot-header__details">
              <span className="chatbot-header__title">Marsbes Support</span>
              <span className="chatbot-header__status">Online</span>
            </div>
          </div>
          <button 
            className="chatbot-header__close" 
            onClick={toggleChat}
            aria-label="Close chat window"
          >
            <X size={18} />
          </button>
        </div>

        {/* Message Log */}
        <div className="chatbot-messages">
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`chatbot-message chatbot-message--${msg.sender}`}
            >
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="chatbot-message chatbot-message--bot">
              <div className="chatbot-typing">
                <div className="chatbot-typing__dot" />
                <div className="chatbot-typing__dot" />
                <div className="chatbot-typing__dot" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        {!isTyping && (
          <div className="chatbot-suggestions">
            {messages.length === 1 && (
              <>
                <button 
                  className="chatbot-suggestion"
                  onClick={() => handleSuggestionClick('What services do you offer?')}
                >
                  Our Services
                </button>
                <button 
                  className="chatbot-suggestion"
                  onClick={() => handleSuggestionClick('How can I contact support?')}
                >
                  Contact Details
                </button>
                <button 
                  className="chatbot-suggestion"
                  onClick={() => handleSuggestionClick('Tell me about pricing')}
                >
                  Pricing Details
                </button>
              </>
            )}
            {!step && (
              <button 
                className="chatbot-suggestion"
                onClick={() => handleSuggestionClick('Leave a message')}
              >
                Leave a Message ✉️
              </button>
            )}
          </div>
        )}

        {/* Input Form */}
        <div className="chatbot-input">
          <input
            type="text"
            className="chatbot-input__field"
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            disabled={isTyping}
          />
          <button
            className="chatbot-input__send"
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isTyping}
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
