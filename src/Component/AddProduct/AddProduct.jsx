import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [selectValue, setSelectValue] = useState(" ");

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const price = form.price.value;
    const sellerName = form.sellerName.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const productInfo = {
      productName,
      email,
      photoURL,
      price,
      sellerName,
      quantity,
      description,
      rating,
      subCategory: selectValue,
    };

    console.log(productInfo);
    fetch("http://localhost:3000/product", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="w-3/5 mx-auto mb-24">
      <h3 className=" font-bold pt-32 text-3xl text-blue-950">Add A Product</h3>
      <form
        onSubmit={handleForm}
        className="md:flex justify-between text-blue-800"
      >
        <div className="w-full m-5">
          <div className="w-full">
            <label className="block my-2">Product Name</label>
            <select
              className="select border w-full rounded-xl p-2 border-blue-800"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option disabled selected>
                Select subCategory
              </option>
              <option value="Ear Ring">Ear Ring</option>
              <option value="Necklace">Necklace</option>
              <option value="Bracelet">Bracelet</option>
            </select>
          </div>
          <div className="w-full">
            <label className="block my-2">Email</label>
            <input
              className="border w-full rounded-xl p-2 border-blue-800"
              name="email"
              value={user?.email}
              placeholder="Enter Your Email"
              type="text"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-blue-400">SellerName</span>
            </label>
            <input
              type="text"
              name="sellerName"
              value={user?.displayName}
              className="border w-full rounded-xl p-2 border-blue-800"
              placeholder="Enter Seller Name"
            />
          </div>
          <div className=" w-full">
            <label className="block my-2 ">Photo URL</label>
            <input
              className="border w-full rounded-xl p-2 border-blue-800"
              name="photoURL"
              placeholder="Your Product Photo URL"
              type="text"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="ratings"
              className="border w-full p-2 rounded-xl border-blue-800"
            />
          </div>
        </div>
        <div className="w-full m-5">
          <div className=" w-full">
            <label className="block my-2 ">Price</label>
            <input
              name="price"
              className="border w-full p-2 rounded-xl border-blue-800"
              placeholder="Price Of Product"
              type="text"
            />
          </div>
          <div className=" w-full">
            <label className="block my-2 ">Seller Name</label>
            <input
              className="border w-full p-2 rounded-xl border-blue-800"
              name="sellerName"
              placeholder="Seller Name"
              type="text"
            />
          </div>
          <div className=" w-full">
            <label className="block my-2 " placeholder="Available">
              Quantity
            </label>
            <input
              className="border w-full p-2 rounded-xl border-blue-800"
              name="quantity"
              placeholder="Quantity"
              type="text"
            />
          </div>
          <div className="w-full m-auto">
            <input
              type="submit"
              className="border w-full mt-8 p-2 rounded-xl bg-blue-950 text-center text-white"
              value="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
