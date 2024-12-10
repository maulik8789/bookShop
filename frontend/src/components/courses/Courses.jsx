import React from 'react'
import Cards from '../Cards'
import list from './../../assets/list.json'
import {Link} from 'react-router-dom'

function Courses() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-28  item-center justify-center text-center'>
                <h1 className='text-2xl font-semibold md:text-4xl'>
                    We're Delighted to have you <span className='text-pink-500'>Here! :)</span>
                </h1>
                <p className='mt-12'>
                Book courses offer a structured and comprehensive approach to learning, often blending theoretical concepts with practical exercises. These courses can cater to a variety of subjects, ranging from technical skills like coding and data analysis to creative pursuits such as writing and photography. Designed to suit different learning paces, they provide step-by-step guidance, ensuring that learners build a solid foundation. Many book courses include examples, case studies, and exercises to reinforce understanding and encourage hands-on application. They are often written by industry experts, offering valuable insights and tips that are hard to find elsewhere.
                </p>
                <Link to = "/">
                    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-700 dureation-200'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    list.map((item) => (
                        <Cards item={item} key={item.id} />
                    ))
                }
            </div>

        </div>
    </>
  )
}

export default Courses