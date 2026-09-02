import RightSection from './RightSection'
import LeftSection from './LeftSection'

const MainContent = () => {
  return (
    <div className='flex'>
        <div className='w-[30%]'>
            <LeftSection/>
        </div>
        <div className='min-w-0'>
             <RightSection/>
        </div>
       
   
    </div>
  )
}

export default MainContent
