"use client"
import { signOut } from 'next-auth/react'
import ProtectedRoute from '../../components/ProtectedRoute'
const Dashboard = () => {
  const handleLogout=async ()=>{
    await signOut({ callbackUrl: '/Login' });
  }
  return (
    <ProtectedRoute>
      <div className='py-10'>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </ProtectedRoute>
  )
}

export default Dashboard
