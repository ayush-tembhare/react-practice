import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className='absolute bottom-0 w-full bg-cyan-900 flex items-center justify-center py-3'>

      <button
        className='bg-cyan-500 p-4 m-1 rounded'
        onClick={() => {
          navigate(-1)
        }}
      >
        Prev
      </button>

      <button
        className='bg-green-500 p-4 m-1 rounded'
        onClick={() => {
          navigate(+1)
        }}
      >
        Next
      </button>

    </div>
  )
}

export default Footer