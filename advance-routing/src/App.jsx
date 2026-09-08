import { Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Contact from './Contact'
import Profile from './Components/Profile'
import Orders from './Components/Orders'
import Setting from './Components/Setting'
import NotFound from './NotFound'

const App = () => {
 
  return (
    <div className='h-screen bg-black'>
        <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>} />
        <Route  path='/dashboard' element={<Dashboard/>} > 
             <Route path='profile' element={<Profile/>}/>
              <Route path='setting' element={<Setting/>}/>
              <Route path='orders/:id' element={<Orders/>}/>   
       </Route>
              <Route path='/contact' element={<Contact/>} />
                <Route path='*' element={<NotFound />} />
      </Routes>

    </div>

  )
}

export default App
