import React from 'react'
import "../styles/NavbarTop.css"

const NavbarTop = () => {
  return (
    <div className='navbarTop' id='home'>
      <div className="navbarTop__contact">
        <p>+1 443-630-3752</p>
        <p>wdftraining@yahoo.com</p>
      </div>
      <a href="https://www.instagram.com/washington_firearm_training/" target="_blank"><i className='bx bxl-instagram-alt'></i></a>
    </div>
  )
}

export default NavbarTop