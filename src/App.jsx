import { useState } from 'react'
import Navbar from './pages/Navbar'
import Portfolio from './pages/Portfolio'
import AboutMe from './pages/aboutMe'
import Testimonials from './pages/Testimonials'
import Skill from './pages/Skill'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Contact from './pages/contact'

function App() {

  return (
    <>
    <div>
  
  <Navbar/>
   <Home/>
   <Skill/>
   <AboutMe/>
   <Portfolio/>
   <Testimonials/>
   <Contact/>
   <Footer/>
      </div>      
    </>
  )
}

export default App
