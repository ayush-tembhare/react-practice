import React from 'react'
import { Outlet,Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div>
            <h1 className='text-white'>This is Dashnoard </h1>
            <div className='w-100% flex justify-center mt-2 text-white p-5 gap-5 text-2xl'>
                <Link className='bg-cyan-500 p-5' to='/dashboard/profile'>Profile</Link>
                 <Link className='bg-cyan-500 p-5' to='/dashboard/setting'>Setting</Link>
                  <Link className='bg-cyan-500 p-5' to='/dashboard/orders/:id'>Orders</Link>

            </div>
           
            <Outlet/>
    </div>
  )
}

export default Dashboard
