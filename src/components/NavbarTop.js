import React from 'react'
import "../styles/NavbarTop.css"

const NavbarTop = () => {
  return (
    <div className='navbarTop' id='home'>
      <div className="navbarTop__contact">
        <a href="tel:+14436303752"><p>+1 443-630-3752</p></a>
        <a href="mailto:wdftraining@yahoo.com"><p>wdftraining@yahoo.com</p></a>
      </div>
      <div>
        <a href="https://www.instagram.com/washington_firearm_training/" target="_blank"><i className='bx bxl-instagram-alt'></i>
        </a>
        <a href="https://mobile.twitter.com/wdftraining/" target="_blank"><i class='bx bxl-twitter'></i></a>
        <a href="https://facebook.com/" target="_blank"><i class='bx bxl-facebook-circle' ></i></a>
      </div>
    </div>
  )
}

export default NavbarTop