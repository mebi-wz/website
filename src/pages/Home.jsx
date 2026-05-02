import React from 'react'
import Hero from '../components/Hero'
import TQDTSection from '../components/TQDTSection'
import About from '../components/About'
import Services from '../components/Services'
import TechStack from '../components/TechStack'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <TQDTSection />
      <About />
      <Services />
      <TechStack />
      <Contact />
    </div>
  )
}

export default Home
