import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Route>
        
        </Route>
      </Suspense>

    </>
  )
}

export default App
