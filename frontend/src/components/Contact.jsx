import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { useForm } from "react-hook-form";


function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.preventDefault();
    alert("Thanks! Your essage has been submitted!")
  }
  return (
    <div>
      <>
      <Navbar />
    
    <div className='flex h-screen items-center justify-center'>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}></button> */}
        <div id="my_modal_3" className="">
        <div className="">
            <form method='dialog'
            onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="font-bold text-lg">Contact Us</h3>
              <div className='mt-4 space-y-2'>
                  <span>Name: <span className='text-red-500'> *</span></span>
                  <br />
                  <input className = 'w-80 px-3 py-1 outline-none border rounded:md' 
                      type = 'text' 
                      placeholder='Enter your Email'
                      {...register("name", { required: true })}></input>
                  {/* errors will return when field validation fails  */}
                  <br />
                  {errors.name && <span>This field is required</span>}
              </div>
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
                  <span>Message: <span className='text-red-500'> *</span></span>
                  <br />
                  <textarea className = 'w-80 px-3 py-1 h-[120px] outline-none border rounded:md' 
                        type = 'text' 
                        placeholder='Enter your Message'
                        {...register("message", { required: true })}></textarea>
                  {/* errors will return when field validation fails  */}
                  <br />
                  {errors.message && <span>This field is required</span>}
              </div>
              <div className='mt-6 justify-around flex'>
                  <button className=' text-white bg-blue-500 hover:bg-pink-900 border rounded px-3 py-1'
                  onSubmit={handleSubmit(onSubmit)}>Submit</button>
              </div>
            </form>

        </div>
            
        <form method="dialog" className="modal-backdrop">
            <button>close</button>
        </form>
        </div>
    </div>
    <Footer />
    </>
      Contact</div>
  )
}

export default Contact