import React from 'react'
import { Link } from 'react-scroll'
import './Hero.css'

/**
 * Hero Component
 * 
 * Landing page hero section with introduction text and call-to-action buttons.
 * Features smooth scroll navigation to Projects and Contact sections.
 */
const Hero = () => {
  return (
    <div className='hero container'>
      {/* Main introduction text */}
      <div className='hero-text'>
        <h1>
          Hi, I'm Jayson!
        </h1>
        <p> Computer Science student at Oregon State University specializing in 
        cybersecurity. Passionate about security operations, penetration testing, 
        and website development. Currently seeking opportunities in cybersecurity 
        and software development.</p>
      </div>

      {/* Call-to-action buttons with smooth scroll */}
      <div className='buttons'>
        <Link to='projects' smooth={true} offset={-230} duration={500}
        className='btn'>Projects</Link>
        <Link to='contacts-page' smooth={true} offset={-230} duration={500}
        className='btn'>Get in Touch!</Link>
      </div>
    </div>
  )
}

export default Hero