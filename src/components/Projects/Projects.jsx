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
      
      {/* AI Resume Analyzer */}
      <TextCard 
      title = 'AI Resume Analyzer' 
      date = 'Mar. 2026'
      description = {
        [
        'Built a full-stack AI application using FastAPI and Streamlit that scores how well a resume matches a job description, identifies missing skills, and suggests targeted improvements.',
        'Integrated Claude API (Anthropic) for deep resume analysis and sentence-transformers for semantic similarity scoring, enabling accurate, context-aware match evaluation.',
        'Implemented PDF parsing with PyMuPDF and exposed a REST /analyze endpoint to handle resume and job description processing end-to-end.'
        ]
      }
      tags = {
        [
        'Python',
        'FastAPI',
        'Claude API',
        'Streamlit',
        'PyMuPDF',
        'sentence-transformers',
        'NLP'
        ]}
        link = "https://github.com/JaysonGaa/AI-Resume-Analyzer"
        linkText = ' View on GitHub →'
      />

      {/* Packet Scanner */}
      <TextCard 
      title = 'Network Packet Scanner' 
      date = 'Jan. 2026 - Feb. 2026'
      description = {
        [
        'Developed a full-stack web application using Flask and PyShark to analyze PCAP files and detect network vulnerabilities including insecure protocols, weak TLS versions, and plaintext credentials.',
        'Implemented traffic analysis dashboard displaying real-time packet statistics, TCP/UDP breakdowns, unique IP tracking, and color-coded vulnerability severity levels (critical/high/medium).',
        'Deployed containerized application with Docker on Render, handling asynchronous packet processing and session management for 50+ packet analysis per file.'
        ]
      }
      tags = {
        [
        'Python',
        'pyShark',
        'Flask',
        'Docker',
        'HTML',
        'CSS',
        'Render'

        ]}
        link = "https://github.com/JaysonGaa/network-packet-scanner"
        linkText = ' View on GitHub →'
      />

      {/* Portfolio Website Project */}
      <TextCard 
      title = 'This Website!' 
      date = 'Dec. 2025'
      description = {
        [
        'Designed and developed a responsive personal portfolio showcasing projects and technical skills with clean UI/UX principles and accessibility-aware styling.',
        'Implemented reusable React components and a consistent design system to ensure maintainability and scalability across the application.'
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
        'Built a full-stack scheduling platform automating instructor shift assignments from uploaded spreadsheets.',
        'Developed REST APIs and responsive React components for secure, real-time schedule access.',
        'Presented final application and technical architecture to class and program mentors with a comprehensive slide deck demonstrating core features and design decisions.'
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
        'Conducted penetration tests on intentionally vulnerable systems, identifying and exploiting security weaknesses using Metasploit, Gobuster, and other industry-standard tools.',
        'Produced detailed assessment reports documenting vulnerabilities, exploitation paths, and remediation recommendations following professional penetration testing methodology.'

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
