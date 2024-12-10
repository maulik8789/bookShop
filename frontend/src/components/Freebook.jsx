import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import list from '../../public/list.json';
import list from '../assets/list.json';
import Cards from './Cards';

function Freebook() {
    const filterData = list.filter((data) => data.category==='Free');
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
        ],
    };
        
  return (
    <>
        <div className='max-w-screen-2xl container max-auto md:px-20 px-4'>
            <h1 className='text-xl font-semibold pb-2'>Free Offered Books</h1>
            <p className='pb-5'>Discover our collection of free books and enjoy endless reading without spending a dime! Expand your knowledge, fuel your imagination, and explore new genres—all at no cost. Perfect for students, avid readers, or anyone on a budget, our free books empower learning and leisure alike. Start your journey today and unlock the joy of reading for free!</p>
        </div>
        <div className='max-w-screen-2xl container max-auto md:px-20 px-4 py-14'>
        <Slider {...settings}>
          {
            filterData.map((item) => (
                <Cards item={item} key={item.id} />
            ))
          }
        </Slider>
      
        </div>
    </>
  )
}

export default Freebook