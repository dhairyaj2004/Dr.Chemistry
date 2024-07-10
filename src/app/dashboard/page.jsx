"use client"
import { signOut } from 'next-auth/react'
import ProtectedRoute from '../../components/ProtectedRoute'
const Dashboard = () => {
  const handleLogout=async ()=>{
    await signOut({ callbackUrl: '/Login' });
  }
  return (
    <ProtectedRoute>
      <div>
      <div className='py-14 mt-10 px-10 flex justify-between'>
        <h1 className='font-serif font-extrabold text-3xl'>Dashboard</h1>
        <button onClick={handleLogout} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>
      </div>
      {/* <h2 className='px-10 text-2xl md:text-3xl lg:text-4xl leading-5 font-bold text-red-300 '>Our Free Live Hero Sessions</h2> */}
      </div>
    </ProtectedRoute>
  )
}

export default Dashboard
