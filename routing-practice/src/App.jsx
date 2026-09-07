import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import About from './Routes/About'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact></Contact>}/>
         <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
