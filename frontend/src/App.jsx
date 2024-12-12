import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Course from './components/Course';
import Home from './components/home/Home';
import Contact from './components/Contact';
import About from './components/About';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/course' element={<Course />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element = {<About />} />
          <Route path='/signup' element = {<Signup />} />

        </Routes>
      </div>
    </>
  )
}

export default App