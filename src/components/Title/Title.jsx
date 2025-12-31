import React from 'react'
import './Title.css'

/**
 * Title Component
 * 
 * Reusable section title component for page sections.
 * Displays a main title with optional subtitle for visual hierarchy.
 * 
 * @param {string} subTitle - Optional subtitle text displayed below the main title
 * @param {string} title - Main title text for the section
 */
const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
        {/* Main section title */}
        <p>{title}</p>
        
        {/* Optional subtitle for additional context */}
        <h2>{subTitle}</h2>
    </div>
  )
}

export default Title