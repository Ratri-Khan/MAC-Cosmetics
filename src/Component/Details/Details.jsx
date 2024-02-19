// import  { useState } from 'react';
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const Information = useLoaderData();
  const { sellerName, email, photoURL, price, rating, quantity, subCategory } =
    Information;
  return (
      <div className="grid md:grid-cols-2 rounded w-8/12 mx-auto">
        <div className="rounded h-96 p-7 text-slate-300 text-xl bg-black/90 font-bold mt-28 md:mb-28">
          <p>Product Name :
            <span className="text-sm text-lime-100"> {subCategory}</span>
          </p>
          <p>Seller Name :
            <span className="text-sm text-lime-100"> {sellerName} </span> 
          </p>
          <p>Seller Email :
            <span className="text-sm text-lime-100"> {email} </span> 
          </p>
          <p>Price :
            <span className="text-sm text-lime-100"> ${price} </span> 
          </p>
          <p>Ratings :
            <span className="text-sm text-lime-100"> {rating} </span> 
          </p>
          <p>Avail.Qnty :
            <span className="text-sm text-lime-100"> {quantity} pics 
            </span>            
          </p>
        </div>
        <div>
          <img src={photoURL} alt="" className="h-96 md:my-28 lg:my-28 bg-black/90 p-4 rounded" />
        </div>
      </div>
  );
};

export default Details;
