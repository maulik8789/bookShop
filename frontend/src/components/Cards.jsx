import React from 'react'

function Cards({item}) {
    console.log(item);
  return (
    <>
        <div className='my-3 p-3'>
            <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200  dark:bg-black dark:border">
                <figure>
                    <img
                    src={item.image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline ">CAD {item.price}</div>
                        <div className="cursor-pointer border-[2px] rounded-full px-2 py-0 hover:bg-pink-500 hover:text-white hover:durtion-200 ">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards