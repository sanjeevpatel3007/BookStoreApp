import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'
import { useForm } from "react-hook-form"
export default function Signup() {

  const {
    register,
    handleSubmit,
//   watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className="flex h-screen items-center w-screen justify-center ">
      <div id="my_modal_3" >
        <div className=" bg-white p-10 modal-box">
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
            <input type="text" className='outline-none p-1 bg-slate-300' placeholder='Full Name'  {...register("name", { required: true })} />
            <br />
                        {errors.name && <span className='text-red-500'>This field is required</span>}
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
            <input className='outline-none p-1  bg-slate-300' type="password" placeholder='********'   {...register("passward", { required: true })}/>
            <br />
                        {errors.passward && <span className='text-red-500'>This field is required</span>}
            <br />
            <br />
            <br />
            <button className="btn btn-sm bg-pink-600 border-none mt-2">Register</button>
            <p>Have account ? {"  "}


              {/* <Link to={"/"}>
                           <span className="text-blue-500 underline">
                            Login
                           </span>
                           </Link> 
                           </p> */}

           <Link to={"/"}>
                <span className="text-blue-500 underline">
                  Login
                </span>
                </Link>
             
              <Login />
            </p>


          </div>
          </form >

        </div>
      </div>
    </div>
  )
}
