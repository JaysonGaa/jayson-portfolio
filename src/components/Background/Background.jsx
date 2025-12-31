import React from 'react'
import './Background.css'
import TextCard from '../TextCard/TextCard.jsx'

const Background = () => {
  return (
    <div className='experience'>

      <div className='work'>
        <h2 className='subhead'>Work Experience</h2>

        <TextCard
        title = 'Security Analyst' 
        date = 'Sep. 2025 - Present'
        subtitle = 'ORTSOC - The Nations First Cybersecurity Teaching Hospital'
        description = {
          ['Performed web application and infrastructure penetration testing, vulnerability analysis, and remediation support to improve client security posture.',
            'Contributed to GRC initiatives including risk assessments, control validation, and policy alignment across rotations in threat intelligence, cybersecurity assessments, and offensive security.',
            'Supported SOC operations by triaging and validating security alerts, verifying exploitability, and assessing control effectiveness.'
          ]}
        />
        
        <TextCard
        title = 'Store Manager' 
        date = 'June 2024 - Present'
        subtitle = 'Happy Lemon'
        description = {
          ['Oversaw all daily operations for a high-volume boba shop, streamlining processes that reduced customer wait times by 25% and improved order accuracy, directly boosting customer satisfaction scores.',
            'Trained and managed a team of 12 employees; implemented shift scheduling and workflow systems that kept the labor cost under 30% and decreased the average wait time for the customer by 30%.',
            'Monitored inventory and optimized stock levels to reduce food waste by 20% and proactively prevent stockouts, ensuring consistent product availability and contributing to a 10% increase in monthly sales.'
          ]}
        />
        </div>

      <div className='school'>
        <h2 className='subhead'>Education</h2>
        <TextCard
        title = 'Bachelors of Science in Computer Science: Cybersecurity Option' 
        date = 'Sep. 2022 - June 2026'
        subtitle = 'Oregon State University'
        description = 'Corvallis, OR'
        tags ={
          [
            'Technical Writing for Engineers', 
            'Computer Architecture & Assembly Language', 
            'Operating Systems', 
            'Databases', 
            'Software Engineering', 
            'Analysis of Algorithms', 
            'Networks',
            'Cryptography',
            'Network Security',
            'Offensive Cyber Security',
            'Digital Forensics'
          ]
        }
        />
        
      </div>

    </div>
  )
}

export default Background
