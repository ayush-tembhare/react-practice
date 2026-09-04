import React from 'react'

const App = () => {
  return (
    <div className='bg-black h-screen'>

      <h1 className='text-center bg-[#1A1A1D] text-white text-3xl p-5 font-bold'>
        Notes App
      </h1>

      <div className='flex'>

        <div className='w-[50%]'>

          <h2 className='text-white text-center p-5 bg-[#3B1C32] mt-2 ml-5 text-2xl rounded-2xl'>
            Create Note
          </h2>

          <form>

            <input
              className='text-white ml-20 mt-5 rounded-2xl pl-5 w-[80%] h-30 m-5 bg-[#6A1E55] text-3xl'
              type='text'
              placeholder='Enter Notes Title'
            />

            <input
              className='text-white ml-20 mt-5 rounded-2xl pl-5 w-[80%] h-30 m-5 bg-[#6A1E55] text-3xl'
              type='text'
              placeholder='Enter Details'
            />

            <br />

            <button className='text-white ml-100 mt-5 bg-pink-950 rounded-2xl p-5'>
              Submit
            </button>

          </form>

        </div>

        <div className='ml-5 border-l-2 text-white w-[50%]'>

          <h1 className='text-center p-5 bg-[#3B1C32] mt-2 ml-5 text-2xl rounded-2xl'>
            NOTES LIST
          </h1>

          <div className='h-162.5 m-5 ml-20 flex flex-wrap overflow-auto'>

            <div className='m-5 w-50 h-50 bg-[#A64D79] rounded-2xl'>
              <h1 className='text-center pt-2 font-bold'>
                Heading
              </h1>

              <h2 className='m-4'>
                Details Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, saepe!
              </h2>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App