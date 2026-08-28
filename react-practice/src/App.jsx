import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import './App.css'
import Footer from './Components/Footer'
const App = () => {
  return (
    <div>
      <h1>Hello React Practice Day 2</h1>
     
      <Navbar/>
       <Card/> 
       <Card/>
        <Card/>
      <Footer/>

    </div>
  )
}

export default App
