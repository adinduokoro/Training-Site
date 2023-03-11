import React from 'react'
import "../styles/NavbarBottom.css"
import Logo from "../images/washington-logo.png"
import {nav} from "../data.js"
import { HashLink as Link } from 'react-router-hash-link'

const NavbarBottom = () => {
  return (
    <div className='navbarBottom'>
      <div className="nav__logo">
        <img src={Logo} alt="" />
      </div>
      <i class='bx bx-menu'></i>
      <ul className="nav__menu">
        {
          nav.map((item, index) =>{
            return(
              <li>
                <Link smooth to={item.path}><p>{item.text}</p></Link>
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