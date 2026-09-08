import { Outlet,Link, useNavigate, useLocation } from 'react-router-dom'


const Dashboard = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname)
  
  return (
    <div>
            <h1 className='text-white'>This is Dashnoard </h1>
            <div className='w-100% flex justify-center mt-2 text-white p-5 gap-5 text-2xl'>
                <Link className='bg-cyan-500 p-5' to='/dashboard/profile'>Profile</Link>
                 <Link className='bg-cyan-500 p-5' to='/dashboard/setting'>Setting</Link>
                  <Link className='bg-cyan-500 p-5' to='/dashboard/orders/200'>Orders</Link>
                   <button
          className='bg-green-500 p-5'
          onClick={() => navigate('/contact')}
        >
          Go to Contact
        </button>


            </div>
           
            <Outlet/>
    </div>
  )
}

export default Dashboard
