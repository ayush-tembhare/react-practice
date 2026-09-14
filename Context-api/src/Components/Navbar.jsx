import React, { useContext } from 'react'
import { ThemeDataContext } from '../ContextData/ThemeContext'
import CButton from './CButton'

const Navbar = () => {
const [theme, setTheme] = useContext(ThemeDataContext)  
  
  return (
    <div>
      
      <h1 className='p-5'>the theme is {theme}</h1>

      <CButton/>
    </div>
  )
}

export default Navbar
