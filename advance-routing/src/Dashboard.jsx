import React from 'react'
import { Outlet, Route,Routes } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
            <h1 className='text-white'>This is Dashnoard </h1>
           
            <Outlet/>
    </div>
  )
}

export default Dashboard
