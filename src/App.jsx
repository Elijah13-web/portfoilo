import { useState } from 'react'
import Navbar from './pages/Navbar'

import Portfolio from './pages/Portfolio'
import AboutMe from './pages/aboutMe'
import Testimonials from './pages/Testimonials'
import Skill from './pages/Skill'
import Home from './pages/Home'

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
      </div>      
    </>
  )
}

export default App
