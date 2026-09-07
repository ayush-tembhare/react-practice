import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Card'

const App = () => {
  const [page, setpage] = useState(1)
  const [dataarr, setdataarr] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    apidata()
  }, [page])

  const apidata = async () => {
    setdataarr([])
    setloading(true)
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=12`
    )

    const copyData = response.data
    setdataarr(copyData)
    
    setloading(false)
  }
if(loading==true){
  return(
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
  <h1 className="text-2xl font-bold">
    Loading...
  </h1>
</div>
  )
}else{
  return (
    
  
  
    <div className="bg-black text-white min-h-screen p-5">

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {dataarr.map(function (elem, idx) {
          return (
            <Card
              key={idx}
              url={elem.url}
              download_url={elem.download_url}
              author={elem.author}
            />
          )
        })}
      </div>

      <div className="flex justify-center gap-5 mt-8">

        <button
          className="bg-amber-500 text-black px-5 py-2 rounded"
          onClick={() => {
            if (page > 1) {
              setpage(page - 1)
            }
          }}
        >
          Prev
        </button>

        <span className="flex items-center">
          Page {page}
        </span>

        <button
          className="bg-amber-500 text-black px-5 py-2 rounded"
          onClick={() => {
            
            setpage(page + 1)
          }}
        >
          Next
        </button>

      </div>

    </div>
  )
}


}

export default App