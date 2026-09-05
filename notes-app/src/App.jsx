import { useState } from 'react'

const App = () => {
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [notesArr, setnotesArr] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const copyArr = [...notesArr]
    copyArr.push({ title, details })
    setnotesArr(copyArr)
    settitle('')
    setdetails('')
  }

  const deletentry = (idx) => {
    const copyArr = [...notesArr]
    copyArr.splice(idx, 1)
    setnotesArr(copyArr)
  }

  return (
    <div className='bg-black min-h-screen'>

      <h1 className='text-center bg-[#1A1A1D] text-white text-3xl p-5 font-bold'>
        Notes App
      </h1>

      <div className='flex flex-col md:flex-row'>

        {/* CREATE NOTE */}
        <div className='w-full md:w-[50%]'>

          <h2 className='text-white text-center p-5 bg-[#3B1C32] mt-2 ml-5 mr-5 text-2xl rounded-2xl'>
            Create Note
          </h2>

          <form onSubmit={(e) => {
            submitHandler(e)
          }}>

            <input
              className='text-white ml-5 md:ml-20 mt-5 rounded-2xl pl-5 w-[90%] md:w-[80%] h-30 m-5 bg-[#6A1E55] text-3xl'
              type='text'
              name='title'
              value={title}
              onChange={(elem) => {
                settitle(elem.target.value)
              }}
              placeholder='Enter Notes Title'
            />

            <input
              className='text-white ml-5 md:ml-20 mt-5 rounded-2xl pl-5 w-[90%] md:w-[80%] h-30 m-5 bg-[#6A1E55] text-3xl'
              type='text'
              name='details'
              value={details}
              onChange={(elem) => {
                setdetails(elem.target.value)
              }}
              placeholder='Enter Details'
            />

            <br />

            <button className='text-white ml-20 md:ml-100 mt-5 bg-pink-950 rounded-2xl p-5'>
              Submit
            </button>

          </form>

        </div>


        {/* NOTES LIST */}
        <div className='ml-0 md:ml-5 border-l-0 md:border-l-2 text-white w-full md:w-[50%]'>

          <h1 className='text-center p-5 bg-[#3B1C32] mt-2 ml-5 mr-5 text-2xl rounded-2xl'>
            NOTES LIST
          </h1>

          <div className='h-162.5 m-5 ml-5 flex flex-wrap overflow-auto [&::-webkit-scrollbar]:hidden'>

            {
              notesArr.map(function (elem, idx) {
                return (
                  <div
                    key={idx}
                    className='flex flex-col justify-between m-5 w-50 h-50 bg-[#A64D79] rounded-2xl bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDA4-I8KsHnOYWuFX7JBcHmdogKiHrKlQE5D6ILE0Ig&s=10)]'
                  >

                    <h1 className='text-center pt-2 font-bold'>
                      {elem.title}
                    </h1>

                    <h2 className='m-4'>
                      {elem.details}
                    </h2>

                    <div className='flex justify-center'>

                      <button
                        onClick={(elem) => {
                          deletentry(idx)
                        }}
                        className='bg-red-700 p-1 rounded-xl mb-2'
                      >
                        Delete Note
                      </button>

                    </div>

                  </div>
                )
              })
            }

          </div>

        </div>

      </div>

    </div>
  )
}

export default App