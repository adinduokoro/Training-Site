import React from 'react'
import "../styles/WhatWeOffer.css"
import { service } from '../data'
import { NavHashLink as Link} from 'react-router-hash-link'



const WhatWeOffer = () => {

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset

    window. scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    })
  }


  return (
    <section className='whatWeOffer'>
      <div className="whatWeOffer__container">
        <h2>WHAT <span className='weoffer'>WE OFFER</span></h2>
        <div className="whatWeOffer__box">
          {service.map((item, index) => {
            return(
              <div className="whatWeOffer__card" key={index}>
                <Link smooth to="#contact" scroll={el => scrollWithOffset(el, 129)}>
                  <div>
                    <img src={item.img} alt="" />
                    <p>{item.text}</p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer