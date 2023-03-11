import React from 'react'
import "../styles/Navbar.css"
import NavbarBottom from './NavbarBottom'
import NavbarTop from './NavbarTop'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavbarTop />
      <NavbarBottom />
    </div>
  )
}

export default Navbar