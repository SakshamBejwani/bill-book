import React from 'react'
import Login from './Login/Login'
function Hero() {
  return (
    <div class="container-fluid bg-custom-hero">
        <div class="hero-title">
            <div class="hero-title-text">
                <strong>Simple GST Billing</strong> & <strong> Stock Management</strong> <br/>
                software for your business.
            </div>
            <div class="sub-text">
                Atma Nirbhar Vyapaari bane
            </div>
            <div class="hero-logos">
                <img src="icn_Made_with_love.svg" alt="LOVE" />
                <img src="icn_ISO.svg " alt="ISO" />
            </div>
        </div>
        <div class="login-form">
            <Login />
        </div>
        
    </div>
  )
}

export default Hero