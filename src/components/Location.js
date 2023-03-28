import React from 'react'
import "../styles/Location.css"
import locationImg from '../images/location-img.jpg'

const Location = () => {
  return (
    <section className='location' id='location'>
      <div className="location__container">
        <h2 className='locationtitle'>LOCATION</h2>
        <div className="location__info">
          <div className="left">
            <div className="location__img">
              <img src={locationImg} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="address">
              <h2>ADDRESS:</h2>
              <p>8 East Seminary Ave</p>
              <p>Timonium, MD 21093</p>
              <p>Monday - Sunday: 9am - 5pm EST</p>
            </div>
            <div className="contact">
              <h2>CONTACT:</h2>
              <p>+1 443-630-3752</p>
              <p style={{ letterSpacing: "3px" }}>wdftraining@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location