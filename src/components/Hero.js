import React from 'react'
import '../styles/Hero.css'
import heroImg from '../images/hero-pic.jpg'

const Hero = () => {
  return (
    <section className="hero" id='home'>
      <img src={heroImg} alt="" />
      <div className="overlay"></div>
      <div className="hero__info">
        <h1>WASHINGTON'S DIRECT</h1>
        <h2>FIREARMS TRAINING</h2>
        <p>Qualified Instructors Teaching Safety and Defense Skills</p>
        <button>BOOK NOW</button>
      </div>
    </section>
  )
}

export default Hero