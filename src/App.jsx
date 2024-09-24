import { useState } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Header from './pages/Header'
import AboutMe from './pages/aboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>|
   <Route path='/'element={<Header/>}/>
   <Route path='/aboutMe'element={<AboutMe/>}/>
   </Routes>
  </BrowserRouter>
      </div>      
    </>
  )
}

export default App
