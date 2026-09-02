import MainContent from './MainContent'
import Navbar from './Navbar'

const Page1 = (props) => {
 
  return (
    
    <div className='ml-12 mr-4'>
      
    <Navbar/>
   <MainContent cards={props.cards}/>
    
    </div>
  )
}

export default Page1
