import React from 'react'
import "../styles/WhatWeOffer.css"
import { service } from '../data'



const WhatWeOffer = () => {
  return (
    <section className='whatWeOffer'>
      <div className="whatWeOffer__container">
        <h2>WHAT <span className='weoffer'>WE OFFER</span></h2>
        <div className="whatWeOffer__box">
          {service.map((item, index) => {
            return(
              <div className="whatWeOffer__card" key={index}>
                <div>
                  <img src={item.img} alt="" />
                  <p>{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer