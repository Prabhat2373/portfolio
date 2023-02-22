import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Home/Hero'
import { Routes, Route } from "react-router-dom";
import About from './pages/About/AboutIndex'
import Footer from './components/Footer'
import Page from './components/Page'
import ProjectContent from './pages/Projects/ProjectContent'
import ProjectIndex from './pages/Projects/ProjectIndex'
import ContactIndex from './pages/Contact/ContactIndex'

function App() {

  return (
    <>
      {/* <Suspense fallback={<h1>Loading..</h1>}> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<ProjectIndex />} />
        <Route path='/contact' element={<ContactIndex />} />
      </Routes>
      {/* <Footer /> */}
      {/* </Suspense> */}
      {/* <Navbar />
      <Hero /> */}
    </>
  )
}

export default App
