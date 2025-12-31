import { useState } from 'react'
import './Projects.css'
import TextCard from '../TextCard/TextCard.jsx'

/**
 * Projects Component
 * 
 * Showcase of featured projects and technical work.
 * Each project is displayed using TextCard components with descriptions, tags, and links.
 */
const Projects = () => {
  return (
    <div className="projects">

      {/* Portfolio Website Project */}
      <TextCard 
      title = 'This Website!' 
      date = 'Dec. 2025'
      description = {
        [
        'Designed and developed a responsive personal portfolio using React and modern CSS to showcase projects, experience, and technical skills.',
        'Implemented reusable components (e.g., project cards, tag systems) to ensure maintainability and scalability.',
        'Applied clean UI/UX principles with a professional design system, consistent typography, and accessibility aware styling.',
        'Deployed and maintained the site with a focus on performance, responsiveness, and code organization.',
        'Integrated interactive Capture-the-Flag (CTF) challenges to demonstrate foundational cybersecurity concepts and hands-on problem-solving skills.'
        ]
      }
      tags = {
        [
        'React',
        'Vite', 
        'JavaScript', 
        'HTML', 
        'CSS',
        ]}
        link = "https://github.com/JaysonGaa/jayson-portfolio"
        linkText = ' View on GitHub →'
      />

      {/* Cybersecurity Research Project */}
      <TextCard 
      title = 'Cybersecurity Research: Alert Analysis & Visualization' 
      date = 'Dec. 2025'
      description = {
        [
        'Participated in an OSU research study examining the effectiveness of interactive alert summary graphs in cybersecurity incident response.', 
        'Investigated two simulated cyber attack scenarios while my analytical process was recorded, contributing data to research on improving the speed and accuracy of security alert resolution.',
        'Completed comprehensive questionnaires evaluating user experience and decision-making patterns in threat detection environments.'
        ]
      }
      tags = {
        [
        'Research',
        'Security Operations',
        'Incident Resposne', 
        'Network Monitoring', 
        'Threat Detection'
        ]}
      />

      {/* Schedule Builder Project */}
      <TextCard 
      title = 'Schedule Builder' 
      date = 'Sep. 2025 - Dec. 2025'
      description = {
        [
        'Collaborated with a team of developers to build a full-stack scheduling platform that allows instructors to upload shift spreadsheets, which are parsed, validated, and stored in a MariaDB database, replacing manual distribution workflows.',
        'Contributed to both backend and frontend development, helping design a Node.js/Express API and a responsive React interface that enables students to securely view and retrieve schedule data in real time.'
        ]
      }
      tags = {
        ['React', 
        'JavaScript',
        'SQL', 
        'HTML', 
        'CSS',
        'MariaDB', 
        'Node.js', 
        'Express.js']}
        link = "https://github.com/JaysonGaa/scheduleBuilder"
        linkText = ' View on GitHub →'
      />

      {/* Penetration Testing Labs Project */}
      <TextCard 
      title = 'Penetration Testing Labs' 
      date = 'April 2025 - Present'
      description = {
        [
        'Conducted hands-on penetration testing against intentionally vulnerable lab environments, identifying and exploiting security weaknesses using industry-standard tools and methodologies.',
        'Produced structured assessment reports detailing vulnerabilities, impact, exploitation paths, and remediation recommendations.',
        'Completed select engagements under weekly mentorship, incorporating feedback to improve testing methodology, technical analysis, and reporting quality.'

        ]}
      tags = {
        ['Linux', 
          'Metasploit',
          'Dirbuster',
          'Gobuster',
          'vim',
          'VMware',
          'Tmux'
        ]}
        link = "https://github.com/JaysonGaa/Penetration-Testing-Labs"
        linkText = ' View on GitHub →'
      />

      {/* Small Shell Project */}
      <TextCard 
      title = 'Small Shell' 
      date = 'May 2024'
      description = {
        [
        'Built a bash-like shell supporting command execution, argument parsing, I/O redirection, background processes, and built-ins (cd, exit, status) using fork(), execvp(), dup2(), and waitpid().',
        'Implemented robust signal handling for SIGINT and SIGTSTP, including foreground only mode toggling, background job management, and correct cleanup of terminated processes.'
        ]
      }
      tags = {
        [
        'C',
        'Linux Systems'
        ]}
        link = "https://github.com/JaysonGaa/SmallShell"
        linkText = ' View on GitHub →'
      />


    </div>
  );
};

export default Projects;
