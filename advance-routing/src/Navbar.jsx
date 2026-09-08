import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-cyan-500 w-100% flex p-5'>
      <Link className='p-2' to='/'>Home</Link>
       <Link className='p-2' to='/dashboard'>Dashboard</Link>
        <Link className='p-2' to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar
