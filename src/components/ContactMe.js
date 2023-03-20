import React, { useState } from 'react'
import '../styles/ContactMe.css'
import axios from 'axios'


const Contact = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [number, setNumber] = useState("")
  const [sent, setSent] = useState(false)

  const reset = () => {
    setSent(true)
    setEmail("")
    setName("")
    setText("")
    setNumber("")
  }



  const sendEmail = async (e) => {
    e.preventDefault()

    const data = {
      email,
      name,
      text,
      number,
    }

    const response = await axios.post("http://localhost:3001/api/sendemail", data)
    reset()
  }


  return (
    <section className='contactMe' id='contact'>
      <div className="contactMe__container">
        <h2>SEND US <span className='amessage'>A MESSAGE</span></h2>
        <div className="contactMe__box">
          <div className="contactMe__left">
            <form onSubmit={sendEmail}>
              <input type="name" className='input__field' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/>

              <input type="email" className='input__field' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>

              <input type="number" className='input__field' placeholder='Phone Number' value={number} onChange={(e) => setNumber(e.target.value)}/>

              <textarea type="text" rows="4" placeholder='Message' value={text} onChange={(e) => setText(e.target.value)} required></textarea>
              
              {sent ? <span className="send__alert">Message was Sent</span> : ""}
              <button className="send-button" id="submit" type="submit" value="SEND">
                <div className="alt-send-button">
                  <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                </div>
              </button>
            </form>
          </div>
          <div className="contactMe__right">
            
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact