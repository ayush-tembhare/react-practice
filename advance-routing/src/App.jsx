import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Contact from './Contact'
import Profile from './Components/Profile'
import Orders from './Components/Orders'
import Setting from './Components/Setting'

const App = () => {
  return (
    <div className='h-screen bg-black'>
        <Navbar/>
      <Routes>
            <Route path='/' element={<Home/>} />
             <Route  path='/dashboard' element={<Dashboard/>} > 
             <Route path='/dashboard/profile' element={<Profile/>}/>
              <Route path='/dashboard/setting' element={<Setting/>}/>
              <Route path='/dashboard/orders' element={<Orders/>}></Route>
             </Route>
              <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
