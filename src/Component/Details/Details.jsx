// import  { useState } from 'react';
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const Information = useLoaderData();
  console.log(Information);
  const { sellerName, email, photoURL, price, rating, quantity, subCategory } =
    Information;
  console.log(Information);
  return (
    <div className="w-6/12 flex justify-center  mx-auto">
      <div
        className="hero h-96 text-white my-28"
        style={{
          backgroundImage: `url('${photoURL}')`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content">
          <div className="max-w-md text-xl">
          <p>
              <span className="font-semibold">Product Name:</span>{" "}
              {subCategory}
            </p>
            <p>
              <span className="font-semibold">Seller Name:</span>{" "}
              {sellerName}
            </p>
            <p>
              <span className="font-semibold">Seller Email:</span>{" "}
              {email}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${price}
            </p>
            <p>
              <span className="font-semibold">Ratings:</span> {rating}
            </p>
            <p>
              <span className="font-semibold text-lg">Avail.Qnty:</span>{" "}
              {quantity} pics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
