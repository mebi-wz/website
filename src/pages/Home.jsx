import React from 'react'
import Hero from '../components/Hero'
import TQDTSection from '../components/TQDTSection'
import Services from '../components/Services'
import TechStack from '../components/TechStack'
import Partners from '../components/Partners'
import About from '../components/About'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <TQDTSection />
      <Services />
      <TechStack />
      <Partners />
      <About />
      <Contact />
    </div>
  )
}

export default Home
