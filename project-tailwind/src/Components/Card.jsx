import {ArrowRight} from 'lucide-react';

const Card = (props) => {
  return (
    <div className=' relative mt-18 ml-8 w-81.25 shrink-0'>
       <h3 className=' absolute top-6 left-6  font-bold py-3 px-5 rounded-full text-2xl bg-white'>{props.id+1}</h3>
      <img
        className=" h-[75vh] object-cover rounded-4xl"
      src={props.image}/>
      <div className='absolute bottom-35 left-7'>
            <p className='text-white font-bold text-lg leading-6 drop-shadow-lg'>{props.description}</p>
      </div>
       <div className=" absolute bottom-20 flex justify-between">
          <button  className=" absolute left-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">{props.status}</button>
          <button className='absolute left-60 font-bold py-2 px-4 rounded-full text-2xl bg-blue-600'><ArrowRight /></button>
      </div>
      
    </div>
  )
}

export default Card
