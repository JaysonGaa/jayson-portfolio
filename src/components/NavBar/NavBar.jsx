import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './NavBar.css'
import initials from '../../assets/initials.svg'
import menu_icon from '../../assets/menu_icon.svg'

/**
 * NavBar Component
 * 
 * Responsive navigation bar with smooth scrolling links to page sections.
 * Includes mobile menu toggle functionality for compact view.
 */
const NavBar = () => {
 
  // State to control mobile menu visibility
  const [compactMenu, setMenu] = useState(false)

  /**
   * Toggles the mobile menu open/closed
   */
  const toggleMenu = () => {
    compactMenu ? setMenu(false) : setMenu(true);
  }

  return (
    <nav className='container'>

      {/* Left section - logo and name */}
      <div className='left-corner'>
        <img src={initials} alt="" className='initials' />
        <p>Jayson Gaa</p>
      </div>

      {/* Navigation links - hidden on mobile unless menu is open */}
      <ul className={compactMenu ? '' : 'hide-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about-me' smooth={true} offset={-230} duration={500}>About Me</Link></li>
        <li><Link to='projects' smooth={true} offset={-230} duration={500}>Projects</Link></li>
        <li><Link to='my-life' smooth={true} offset={-200} duration={500}>Interest</Link></li>
        <li><Link to='contacts-page' smooth={true} offset={-200} duration={500}>Contact Me</Link></li>
        <li><Link to='experience' smooth={true} offset={-220} duration={500}>Resume</Link></li>
      </ul>

      {/* Mobile menu toggle icon */}
      <img src={menu_icon} alt="" className='menu_icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default NavBar