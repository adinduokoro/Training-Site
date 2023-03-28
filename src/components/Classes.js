import React from 'react'
import "../styles/Classes.css"
import logo from '../images/washington-logo.png'
import { classes } from '../data'

const Classes = () => {
  return (
    <section className='classes' id='classes'>
      <div className="classes__container">
        <h2>CLASSES<span className='classtitle'>& COURSES</span></h2>
        <div className='package__container'>
          <div className="left">
            <img src={logo} alt="" />
            <div className="info__text">
              <p className='class__title'>FIREARMS</p>
              <p className='class__sub'>TRAINING COURSE</p>
            </div>
          </div>
          <div className="right">
            {classes.map((item, index) => {
              return(
              <div className="package__card">
                <p className='course__title'>{item.title}</p>
                <div className='price__card'>
                  <hr className='price__line'/>
                  <p className='course__price'>{item.price}</p>
                </div>
              </div>
              )
            })}
          </div> 
        </div>
        <p className="disclaimer">*Fingerprints are required to be done prior to class.<br/> MD state police has $75.00 (wear and cary) $50.00 (HQL) application fee* <br/><br/> ***PRICES MAY VARY***</p>
      </div>
    </section>
  )
}

export default Classes