import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Title from './components/Title/Title'
import AboutMe from './components/AboutMe/AboutMe'
import MyLife from './components/MyLife/MyLife'
import Contact from './components/Contact/Contact'
import Background from './components/Background/Background'

/**
 * App Component
 * 
 * Main application component that structures the portfolio layout.
 * Renders all major sections in order: Hero, About, Projects, Personal Life, Contact, and Background.
 */
const App = () => {
  return (
    <div>
      {/* Navigation bar - fixed at top of page and moves to menu button when screen is too small*/}
      <NavBar/>
      
      {/* Hero section - landing page introduction */}
      <Hero/>
      
      {/* Main content container - holds all sections below hero */}
      <div className="container">
        {/* About Me section */}
        <AboutMe/>

        {/* Projects section */}
        <Title title='Featured Projects'/>
        <Projects/>

        {/* Personal life section */}
        <Title title='Outside of Tech'/>
        <MyLife/>

        {/* Contact section */}
        <Title title='Get in Touch'/>
        <Contact/>

        {/* Professional background section */}
        <Title title='Professional Background'/>
        <Background/>

      </div>

    </div>
  )
}

export default App