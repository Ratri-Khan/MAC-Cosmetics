import React from 'react';

const AddProject = () => {
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
            productName, email, photoURL, price, sellerName, quantity,description,rating}

        console.log(productInfo);
        fetch('http://localhost:3000/product',{
            method:'POST',
            headers: { "content-type": "application/json" },
            body:JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data =>console.log(data))

    }
    return (
        <div>
            <h3 className='text-center font-bold'>Add A Product</h3>
            <form onSubmit={handleForm} >
                <div className='md:flex justify-between m-auto w-3/4'>
                    <div className='w-2/4 m-5'>
                        <div className="w-full">
                        <label className='block my-2'>Product Name</label>
                            <select className="border-fuchsia-700 rounded-xl p-2 w-full border-2" value='productName' name="productName">
                                <option value="selectProduct" disabled selected >Select Product</option>
                                <option value="lipstick">lipstick</option>
                                <option value="NailPolish">NailPolish</option>
                                <option value="Eye Shadow">Eye Shadow</option>
                            </select>
                        </div>
                        <div className='w-full'>
                            <label className='block my-2'>Email</label>
                            <input className='border-2 w-full rounded-xl p-2 border-fuchsia-700' name='email' placeholder='Enter Your Email' type="text" />
                        </div>
                        <div className=' w-full'>
                            <label className='block my-2 '>Photo URL</label>
                            <input className='border-2 w-full rounded-xl p-2 border-fuchsia-700' name='photoURL' placeholder='Your Product Photo URL' type="text" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name="rating" placeholder="ratings"
                                className="border-2 w-full p-2 rounded-xl border-fuchsia-700"
                            />
                        </div>
                    </div>
                    <div className='w-2/4 m-5'>
                        <div className=' w-full'>
                            <label className='block my-2 '>Price</label>
                            <input name='price' className='border-2 w-full p-2 rounded-xl border-fuchsia-700' placeholder='Price Of Product' type="text" />
                        </div>
                        <div className=' w-full'>
                            <label className='block my-2 '>Seller Name</label>
                            <input className='border-2 w-full p-2 rounded-xl border-fuchsia-700' name='sellerName' placeholder='Seller Name' type="text" />
                        </div>
                        <div className=' w-full'>
                            <label className='block my-2 ' placeholder='Available'>Quantity</label>
                            <input className='border-2 w-full p-2 rounded-xl border-fuchsia-700' name='quantity' placeholder='Quantity' type="text" />
                        </div>
                    </div>
                </div>
                <div className='w-2/4 m-auto'>
                <textarea
                    name="description"
                    className='border-2  h-24 w-full rounded-xl border-fuchsia-700'
                    placeholder="Description">
                </textarea>
                </div>
                <div className='w-2/4 m-auto'>
                    <input type="submit" className='border-2 w-full py-3 rounded-xl bg-fuchsia-700 text-center text-white' value="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddProject;