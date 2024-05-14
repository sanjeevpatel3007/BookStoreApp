import React from 'react'
import { useAuth } from '../context/AuthProvider'
import User from '../../../backend/modal/user.modal';

import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Logout() {
const [authUser, setAuthUser]=useAuth();
// const navigate = useNavigate();

const handleLogout=()=>{
  try {
     setAuthUser({
      ...authUser,
      user:null
     })

      localStorage.removeItem("Users")
      toast.success("Logout succefully")

    setTimeout(()=>{
      window.location.reload();
     // Redirect to home page after logout
    //  navigate('/', { replace: true });
    },500)

      // window.location.href="/"
  } catch (error) {
    toast.error("error : " , error.message)
    setTimeout(()=>{},1000)
  }
}

  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
      onClick={handleLogout}
      >
        Logout
        </button>
    </div>
  )
}
