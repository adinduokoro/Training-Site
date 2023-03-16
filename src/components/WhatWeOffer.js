import React from 'react'
import "../styles/WhatWeOffer.css"
import { service } from '../data'



const WhatWeOffer = () => {
  return (
    <section className='whatWeOffer'>
      <div className="whatWeOffer__container">
        <h2>WHAT <span>WE OFFER</span></h2>
        <div className="whatWeOffer__box">
          <div className="whatWeOffer__card">
            {service.map((item, index) => {
              return(
                <ul key={index}>
                  <img src={item.img} alt="" />
                  <p>{item.text}</p>
                </ul>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer