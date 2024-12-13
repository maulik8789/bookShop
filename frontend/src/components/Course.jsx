import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Courses from './Courses'
function Course() {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
    <>
    <Navbar />
    <div className='min-h-screen'><Courses /></div>
    <Footer />

    </>
    </div>
  )
}

export default Course