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
          <p className='aboutus'><span style={{ fontSize : "1.75rem"}}>WDFTRAINING LLC</span>  <br/> Provides the finest firearms and tactics training available today. Whether you are in the military, law enforcement, or are a private citizen, we are here to assist you in the very best in quality, firearms training.
          </p>
          <br />
          <p className='aboutus'>Our courses are conducted in a friendly, relaxed environment that emphasizes safety and mastery of weapons systems for all experience levels. No matter what your level of expertise, we have a class that can teach you something new. We encourage all students, from beginners to the more advanced, to challenge themselves by learning and reinforcing proper techniques in order to take their skills to the next level</p>
        </div>
      </div>
    </section>
  )
}

export default AboutUs