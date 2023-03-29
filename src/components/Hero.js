import React from 'react'
import '../styles/Hero.css'
import heroImg from '../images/hero-pic.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className='hero__img'>
        <img src={heroImg} alt="" />
      </div>
      <div className="overlay"></div>
      <div className="hero__info">
        <h1>WASHINGTON'S DIRECT</h1>
        <h2>FIREARMS TRAINING</h2>
        <p>Qualified Instructors Teaching Safety and Defense Skills</p>
        <a href='https://squareup.com/appointments/book/yha7kyt9bges4o/LD5ANTB6PMASK/services' target="_blank"><button>BOOK NOW</button></a>
      </div>
    </section>
  )
}

export default Hero