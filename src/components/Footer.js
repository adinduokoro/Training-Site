import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='info'>
      <div className="info__container">
        <div className="info__text">
          <p>Please note that refunds are only available for cancellations submitted 72 hours in advance of classes and events.</p>
          <p>Notices of cancellation submitted within 24 hours of the class will not be rescheduled.</p>
          <p>No-shows will not be rescheduled.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer