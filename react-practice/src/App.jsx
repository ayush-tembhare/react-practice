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
       <Card user="Ayush" age={20} city="Nagpur"/> 
<Card user="Sammer" age={22} city="Rampur"/>
<Card user="Ramesh" age={30} city="Mumbai"/>
<Card user="Amit" age={25} city="Nagpur"/>
<Card user="Rahul" age={28} city="Pune"/>
<Card user="Priya" age={21} city="Delhi"/>
<Card user="Sneha" age={24} city="Bangalore"/>
<Card user="Vikas" age={27} city="Hyderabad"/>
      <Footer/>

    </div>
  )
}

export default App
