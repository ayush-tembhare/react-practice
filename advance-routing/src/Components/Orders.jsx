import {useParams} from 'react-router-dom'

const Orders = () => {
   
  const params = useParams()
  
  return (
    <div className='w-100% flex justify-center mt-6'>
      <h2 className='text-white font-bold text-4xl m-10'>This is Orders and id is {params.id}</h2>
    </div>
  )
}

export default Orders
