import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'

import Contact from './components/contact/Contact'

function App() {
 
  return (
    <>
     <Sidebar/>
     <main className='main'>
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      <Testimonials/>
    
      <Contact/>
     </main>
    </>
  )
}

export default App
