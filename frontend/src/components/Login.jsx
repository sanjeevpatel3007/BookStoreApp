import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
export default function Login() {
    const {
        register,
        handleSubmit,
//   watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    //   console.log(watch("example"))
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn " onClick={()=>document.getElementById('my_modal_3').showModal()}></button> */}
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box bg-white">
                    <form method="dialog" >
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form >
<form  onSubmit={handleSubmit(onSubmit)}>
                    <div  >

                    <h3 className="font-bold text-lg">Login</h3>
                   
                        <br />
                        <br />
                        <span className="py-10 mb-10">Email : </span>
                        <br />
                   
                        <input className='outline-none p-1 bg-slate-300' type="email" placeholder='example@gmail.com' defaultValue="" {...register("email", { required: true })} />
                       <br />
                        {errors.email && <span className='text-red-500' >This field is required</span>}
                        <br />
                        
                        <br />
                        <span> Passward :</span>
                        <br />
                        <input  className='outline-none p-1  bg-slate-300' type="password" placeholder='********'  {...register("passward", { required: true })}/>
                      <br />
                        {errors.passward && <span className='text-red-500'>This field is required</span>}
                        <br />
                        <br />
                        <br />
                        
                        <button className="btn btn-sm bg-pink-600 border-none mt-2">Login</button>
                           <p>Not Registered ? {"  "} 
                          <Link to={"/Signup"}>
                           <span className="text-blue-500 underline">Signup</span>
                           </Link> 
                           </p>
                           
                    </div>

                    </form>
                </div>
            </dialog>
        </div>
    )
}
