import React from 'react'
import './AboutMe.css'
import me from '../../assets/me.jpg'

/**
 * AboutMe Component
 * 
 * Introduction section featuring a personal photo and brief professional summary.
 * Split into two columns: image on left, text content on right.
 */
const AboutMe = () => {
  return (
    <div className='about-me'> 

      {/* Left column - personal photo */}
      <div className='about-me-left'>
          <img src={me} alt="" className='me'/>
      </div>

      {/* Right column - introduction text */}
      <div className='about-me-right'>
        <h3>ABOUT ME</h3>
        <h2>Computer Science student at Oregon State University</h2>
        <p>
        I'm a Computer Science student at Oregon State University with a 
        focus on cybersecurity. Through the ORTSOC program, I conduct 
        penetration testing, vulnerability assessments, and support security 
        operations for real clients. I also manage operations at Happy Lemon, 
        where I've developed strong leadership and process optimization skills 
        that complement my technical work. I'm seeking opportunities in the 
        tech industry where I can contribute to building and securing reliable 
        systems.
        </p>
      </div>
      
    </div>
  )
}

export default AboutMe