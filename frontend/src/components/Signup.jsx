import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { Link } from 'react-router-dom'
import Login from './Login'
function Signup() {
  return (
    <>
    <Navbar />
    
    <div className='flex h-screen items-center justify-center'>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}></button> */}
        <div id="my_modal_3" className="">
        <div className="">
            <h3 className="font-bold text-lg">Sign In</h3>
            <div className='mt-4 space-y-2'>
                <span>Name: </span>
                <br />
                <input className = 'w-80 px-3 py-1 outline-none border rounded:md' type = 'text' placeholder='Enter your Email'></input>
            </div>
            <div className='mt-4 space-y-2'>
                <span>Email: </span>
                <br />
                <input className = 'w-80 px-3 py-1 outline-none border rounded:md' type = 'email' placeholder='Enter your Email'></input>
            </div>
            <div className='mt-4 space-y-2'>
                <span>Password: </span>
                <br />
                <input className = 'w-80 px-3 py-1 outline-none border rounded:md' type = 'password' placeholder='Enter your Password'></input>
            </div>
            <div className='mt-6 justify-around flex'>
                <button className=' text-white bg-pink-500 hover:bg-pink-900 border rounded px-3 py-1'>Sign In</button>
                <p className='my-1 items-center justify-center '>Already have an Account? 
                    <button className='text-blue-500 underline'
                    onClick={()=>document.getElementById('my_modal_2').showModal()}>LogIn</button></p>

            </div>

        </div>
            
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Signup