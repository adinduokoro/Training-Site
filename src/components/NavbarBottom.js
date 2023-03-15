import React from 'react'
import "../styles/NavbarBottom.css"
import Logo from "../images/washington-logo.png"
import {nav} from "../data.js"
import { NavHashLink as Link} from 'react-router-hash-link'
import { useState } from 'react'

const NavbarBottom = () => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  const closeMenu = () => {
    setClicked(false)
  }

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset

    window. scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    })
  }


  return (
    <div className='navbarBottom'>
      <div className="nav__logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menu__icons" onClick={handleClick}>
        <i className={clicked ? "bx bx-x" : "bx bx-menu"}></i>
      </div>

      {/* NAVBAR MENU */}
      <ul className="nav__menu">
        {
          nav.map((item, index) =>{
            return(
              <li>
                <Link smooth to={item.path} scroll={el => scrollWithOffset(el, 129)}><p>{item.text}</p></Link>
              </li>
            )
          })
        }
        <button>BOOK NOW</button>
      </ul>

      {/* MOBILE MENU */}
      <ul id="mobile__menu" className={clicked ? "mobile__nav active" : "mobile__nav"}>
        {
          nav.map((item, index) =>{
            return(
              <li>
                <Link onClick={closeMenu} smooth to={item.path}><p>{item.text}</p></Link>
              </li>
            )
          })
        }
        <button>BOOK NOW</button>
      </ul>
    </div>
  )
}

export default NavbarBottom