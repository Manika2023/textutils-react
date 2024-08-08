import { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import './App.css'

function App() {

  return (
    <>
    <Navbar title="textutils"/>
    <div className="container">
    <TextForm heading="Enter the text to analyse"/>
    </div>
    </>
  )
}

export default App
