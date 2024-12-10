import React from 'react'
// import banner from "../../src/Banner.jpg";
import banner from "../assets/Banner.png";

function Banner() {
  return (
  <>
    <div className='max-w-screen-2xl container max-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
            <div className='space-y-8'>
                <h1 className='text-4xl font-bold'>Hello, wecome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                <p className='text-xl'>
                Welcome to bookStore, your one-stop destination for books that ignite imagination, inspire learning, and spark joy! Discover a vast collection of titles across genres, from timeless classics to the latest bestsellers, all curated to satisfy your love for reading. Whether you're an avid reader, a student, or searching for the perfect gift, our easy-to-navigate platform ensures a seamless shopping experience. Enjoy exclusive deals, personalized recommendations, and fast, reliable delivery right to your doorstep. Let us help you turn every page into an adventure—start exploring today!
                </p>
                <label className="input input-bordered flex items-center gap-2 block mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Email" />
                </label>
                <button className="btn btn-secondary block mt-0">Get Started</button>
            </div>
        </div>
        <div className='order-1 w-full mt-20 md:w-1/2'>
            <img src={banner} className='md:w-[550px] md:h-[460px] md:ml-12' alt='books banner'></img>
        </div>
    </div>

  </>
  )
}

export default Banner