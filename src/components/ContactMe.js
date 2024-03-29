import React, { useState ,useRef } from 'react'
import '../styles/ContactMe.css'
import SocialIcons from './SocialIcons'
import emailjs from '@emailjs/browser';





const Contact = () => {
  const [sent, setSent] = useState(false)

  const form = useRef();

  function sendEmail(e) {

    e.preventDefault()

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          // console.log(error.text);
      });
      
      e.target.reset()
      setSent(true)

      setTimeout(() => {
        setSent(false)
      }, 3000)


  }




  return (
    <section className='contactMe' id='contact'>
      <div className="contactMe__container">
        <h2>SEND US <span className='amessage'>A MESSAGE</span></h2>
        <div className="contactMe__box">


          <div className="contactMe__left">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" className='input__field' placeholder='Name' name="name" required/>

              <input type="email" className='input__field' placeholder='Email Address' name="email" required/>

              <input type="number" className='input__field' placeholder='Phone Number' name="number" required/>

              <textarea type="text" rows="4" placeholder='Message' name='message' required></textarea>
              
              {sent ? <span className="send__alert">Message was Sent</span> : ""}
              <button className="send-button" id="submit" type="submit" value="SEND">
                <div className="alt-send-button">
                  <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                </div>
              </button>
            </form>
          </div>


          <div className="contactMe__right">
            <div className="contactMe__info">
              <div className="contactMe__address">
                <i class="fa-solid fa-location-dot"></i>
                <p>Timonium, MD</p>
              </div>
              <div className="contactMe__phone">
                <i class="fa-solid fa-phone"></i>
                <p>1 443-630-3752</p>
              </div>
            </div>
            <hr/>
            <div className="contactMe__socialIcons">
              <SocialIcons />
            </div>
            <hr/>
            <div className='contactMe__copyright'>
              &copy; ALL OF THE RIGHTS RESERVED
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact