import React from 'react'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        e.preventDefault();
        alert("Thanks! You are logged in!");
    }
  return (
    <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}></button> */}
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
            <form method='dialog'
            onSubmit={handleSubmit(onSubmit)}
            >

                <h3 className="font-bold text-lg">LogIn</h3>
                <div className='mt-4 space-y-2'>
                    <span>Email: <span className='text-red-500'> *</span></span>
                    <br />
                    <input className = 'w-80 px-3 py-1 outline-none border rounded:md' 
                        type = 'email' 
                        placeholder='Enter your Email'
                        {...register("email", { required: true })}
                        ></input>
                        {/* errors will return when field validation fails  */}
                        <br />
                        {errors.email && <span>This field is required</span>}
                </div>
                <div className='mt-4 space-y-2'>
                    <span>Password: <span className='text-red-500'> *</span></span>
                    <br />
                    <input className = 'w-80 px-3 py-1 outline-none border rounded:md' 
                        type = 'password' 
                        placeholder='Enter your Password'
                        {...register("password", { required: true })}
                        ></input>
                        {/* errors will return when field validation fails  */}
                        <br />
                        {errors.password && <span>This field is required</span>}
                </div>
                <div className='mt-6 justify-around flex'>
                    <button className=' text-white bg-pink-500 hover:bg-pink-900 border rounded px-3 py-1'
                    onSubmit={handleSubmit(onSubmit)}>Login</button>
                    <p className=''>Not Registered Yet? <Link className='text-blue-500 underline' to='/signup'>Sign Up</Link></p>
                </div>
            </form>
        </div>
            
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </dialog>
    </div>
  )
}

export default Login