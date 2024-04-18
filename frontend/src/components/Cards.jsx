import React from 'react'
import list from "../../public/list.json"
import image from '../../public/img/book1.avif'
export default function Cards({item}) {
  console.log(item);
  return (
    <div >

      <div className="card w-72 bg-base-100 shadow-xl  ">
        <figure>
        <img src={image} alt="Book Cover" />
          </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">
        {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-800">Buy Now</div>
          </div>
        </div>
      </div>



    </div>
  )
}
