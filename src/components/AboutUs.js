import React from 'react'
import '../styles/AboutUs.css'
import aboutImg from '../images/aboutUs-img.jpg'

const AboutUs = () => {
  return (
    <section className='aboutUs' id='about'>
      <div className="aboutUs__container">
        <img src={aboutImg} alt="" />
        <div className="overlay"></div>
        <div className="aboutUs__text">
          <h2>ABOUT US</h2>
          <p className='aboutus'><span>WASHINGTON'S DIRECT</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellat illum? Vero corporis vitae omnis quia nisi enim quisquam ipsa animi maiores, doloribus, odit aliquid quos ad fuga nostrum at alias esse maxime unde tenetur incidunt amet! Vero perspiciatis qui accusamus nemo soluta inventore eius expedita nihil, corporis facilis quisquam.</p>
          <br />
          <p className='aboutus'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magnam, deleniti ipsam facere, repellendus culpa corrupti maxime, deserunt et repellat consequatur provident quis. Temporibus, quibusdam..</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs