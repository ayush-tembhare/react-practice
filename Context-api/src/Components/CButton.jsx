import React, { useContext } from 'react'
import { ThemeDataContext } from '../ContextData/ThemeContext'

const Button = () => {
  const [theme,setTheme] = useContext(ThemeDataContext)
  const changeTheme=()=>{
    setTheme('Dark')


  }
  return (
    <div>
      <button className='bg-amber-500 p-2 m-2'
      onClick={changeTheme}
      >Change Theme</button>
    </div>
  )
}

export default Button
