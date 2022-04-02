import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Hero from './Hero/Hero.jsx'
import Stats from './Stats/Stats.jsx'
import Pricing from './Pricing/Pricing.jsx'
import Footer from '../../components/Footer/Footer.jsx'
function Homepage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Stats />
        <Pricing />
        <Footer />
    </>
  )
}

export default Homepage