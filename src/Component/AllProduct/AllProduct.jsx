import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllProduct = () => {
    const products = useLoaderData();
    return (
        <div className="overflow-x-auto">
            <table className="table my-24 border border-lime-900">
                <thead>
                    <tr className='text-xl text-lime-900'>
                        <th className='border border-lime-900 w-min'>Img</th>
                        <th className='border border-lime-900 w-min'>Seller</th>
                        <th className='border border-lime-900'>Product</th>
                        <th className='border border-lime-900'>Price</th>
                        <th className='border border-lime-900'>Rating</th>
                        <th className='border border-lime-900'>Available</th>
                    </tr>
                </thead>
                {products.map(product =>
                    <tbody key={product._id}>
                        {/* row 1 */}
                        <tr className='text-sm font-bold'>
                            <td className='border border-lime-900 w-min'>
                                    <div className="avatar">
                                        <div className="mask w-20 h-20">
                                            <img src={product.photoURL} alt="Avatar" />
                                        </div>
                                </div>
                            </td>
                            <td className='w-min border border-lime-900 text-lg'><p>{product.sellerName}</p></td>
                            <td className='border border-lime-900'><p>{product.subCategory}</p></td>
                            <td className='border border-lime-900'><p>
                                {product.price} <span>$</span></p></td>
                            <td className='border border-lime-900'><p>{product.rating}</p></td>
                            <td className='border border-lime-900'><p>{product.quantity}</p></td>
                        </tr>
                    </tbody>
                )
                }
            </table>
        </div>
//         <div className="overflow-x-auto">
//   <table className="table my-24">
//     {/* head */}
//     <thead>
//       <tr>
//         <th></th>
//         <th>Name</th>
//         <th>Job</th>
//         <th>Favorite Color</th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
//       <tr>
//         <th>1</th>
//         <td>Cy Ganderton</td>
//         <td>Quality Control Specialist</td>
//         <td>Blue</td>
//       </tr>
//       {/* row 2 */}
//       <tr>
//         <th>2</th>
//         <td>Hart Hagerty</td>
//         <td>Desktop Support Technician</td>
//         <td>Purple</td>
//       </tr>
//       {/* row 3 */}
//       <tr>
//         <th>3</th>
//         <td>Brice Swyre</td>
//         <td>Tax Accountant</td>
//         <td>Red</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
    );
};

export default AllProduct;