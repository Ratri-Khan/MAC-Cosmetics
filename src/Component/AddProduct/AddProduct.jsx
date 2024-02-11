import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [selectValue, setSelectValue] = useState(" ");

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const price = form.price.value;
    const sellerName = form.sellerName.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;

    const productInfo = {
      sellerName,
      email,
      photoURL,
      price,
      quantity,
      rating,
      subCategory: selectValue,
    };
    console.log(productInfo);
    fetch('http://localhost:3000/product', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          text: "Successfully added a toy",
        });
      });
    form.reset();
  };
  return (
    <div className="w-3/5 mx-auto mb-24">
      <h3 className=" font-bold pt-32 text-3xl ">Add A Product</h3>
      <form
        onSubmit={handleForm}
        className="md:flex justify-between text-slate-600"
      >
        <div className="w-full m-5">
          <div>
            <label className="label">
              <span className="label-text ">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              value={user?.displayName}
              className="border w-full rounded-xl p-2 border-slate-400"
              placeholder="Enter Seller Name"
            />
          </div>
          <div className="w-full">
            <label className="block my-2 label-text">Email</label>
            <input
              className="border w-full rounded-xl p-2 border-slate-400"
              name="email"
              value={user?.email}
              placeholder="Enter Your Email"
              type="text"
            />
          </div>
          <div className="w-full">
            <label className="block my-2 label-text">Product Name</label>
            <select
              className="select border w-full  rounded-xl p-2 border-slate-400"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option disabled selected>
                Select subCategory
              </option>
              <option value="Lipstick">Lipstick</option>
              <option value="Nail polish">Nail polish</option>
              <option value="Eye Shadow">Eye Shadow</option>
            </select>
          </div>
          <div className=" w-full">
            <label className="block my-2 label-text">Photo URL</label>
            <input
              className="border w-full rounded-xl p-2 border-slate-400"
              name="photoURL"
              placeholder="Your Product Photo URL"
              type="text"
            />
          </div>
        </div>

        <div className="w-full m-5">
          <div className=" w-full">
            <label className="block my-2 label-text">Price</label>
            <input
              name="price"
              className="border w-full p-2 rounded-xl border-slate-400"
              placeholder="Price Of Product"
              type="text"
            />
          </div>
          <div>
            <label className="label label-text">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="ratings"
              className="border w-full p-2 rounded-xl border-slate-400"
            />
          </div>
          <div className=" w-full">
            <label className="block my-2 label-text" placeholder="Available">
              Quantity
            </label>
            <input
              className="border w-full p-2 rounded-xl border-slate-400"
              name="quantity"
              placeholder="Quantity"
              type="text"
            />
          </div>
          <div className="w-full m-auto">
            <input
              type="submit"
              className="border w-full mt-10 p-2 rounded-xl bg-lime-950 text-center text-white"
              value="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
