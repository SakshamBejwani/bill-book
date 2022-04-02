import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Hero from './Hero/Hero.jsx'
import Stats from './Stats/Stats.jsx'
import Pricing from './Pricing/Pricing.jsx'
function Homepage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Stats />
        <Pricing />
        
    </>
  )
}

export default Homepage