import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from '../components/Login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'



export default function Signup() {
 
  const location=useLocation();
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
//   watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
      // confirmPassword:data.confirmPassword,
    }
    await axios.post("http://localhost:3000/user/signup" ,userInfo)
    .then((res)=>{
      console.log(res.data)

      if (res.data.message === "User allready exist") {
        // alert();
        toast.error("User already exists");// just like alert
      } else {
        // alert("Signup successfully");
        toast.success('Signup Successfully !');
        navigate(from,{ replace:true});

      }

localStorage.setItem('Users',JSON.stringify(res.data));

    })
    .catch((err)=>{
      if(err.response){
      console.log(err)
      // alert("error : " + err.response.data.message)
      toast.error("error : " + err.response.data.message);
    }
    })
  }



  return (


    <div className="flex h-screen items-center justify-center">
      <div id="my_modal_3" >
        <div className="  p-10 modal-box">
          <form method='dialog' >
            {/* if there is a button in form, it will close the modal */}

            <Link to={"/"}>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </Link>
          </form >
          <form  onSubmit={handleSubmit(onSubmit)}>        
          <div  >
            <h3 className="font-bold text-lg">SignUp</h3>
            <br />
            <br />
            <span>Name :</span>
            <br />
            <input type="text" className='outline-none p-1 bg-slate-300' placeholder='Full Name'  {...register("fullname", { required: true })} />
            <br />
                        {errors.fullname && <span className='text-red-500'>This field is required</span>}
            <br />
            <br />
            <span className="py-10 mb-10">Email : </span>
            <br />

           
            <input className='outline-none p-1 bg-slate-300' type="email" placeholder='example@gmail.com'  {...register("email", { required: true })}/>
            <br />
                        {errors.email && <span className='text-red-500'>This field is required</span>}
            <br />

            <br />
            <span> Passward :</span>
            <br />
            <input className='outline-none p-1  bg-slate-300' type="password" placeholder='********'   {...register("password", { required: true })}/>
            <br />
                        {errors.password && <span className='text-red-500'>This field is required</span>}
            <br />
            <br />
            <br />
            <button className="btn btn-sm bg-pink-600 border-none mt-2">Register</button>
            <p>Have account ? {"  "} </p>

           <Link to={"/"}>
                <span className="text-blue-500 underline">
                  Login
                </span>
                </Link>

  
              <Login />
           


          </div>
          </form >



        </div>
      </div>



    </div>
  )
}
