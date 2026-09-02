import {ArrowRight} from 'lucide-react';

const Card = () => {
  return (
    <div className=' relative mt-18 ml-8 w-[325px] shrink-0'>
       <h3 className=' absolute top-6 left-6  font-bold py-3 px-5 rounded-full text-2xl bg-white'>1</h3>
      <img
        className=" h-[75vh] object-cover rounded-4xl"
        
      src='https://images.unsplash.com/photo-1635766854982-fc151c6e9278?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D'/>
      <div className='absolute bottom-35 left-7'>
            <p className='text-white font-bold text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolor consequuntur voluptate repellat consectetur iste dolorum nulla beatae est dolorem.</p>
      </div>
       <div className=" absolute bottom-15 flex justify-between">
          <button  className=" absolute left-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">Satiesfied</button>
          <button className='absolute left-60 font-bold py-2 px-4 rounded-full text-2xl bg-blue-600'><ArrowRight /></button>
      </div>
      
    </div>
  )
}

export default Card
