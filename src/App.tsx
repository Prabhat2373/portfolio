import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import { Routes, Route } from "react-router-dom";
import About from './pages/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
      {/* <Suspense fallback={<h1>Loading..</h1>}> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
      {/* </Suspense> */}
      {/* <Navbar />
      <Hero /> */}
    </>
  )
}

export default App
