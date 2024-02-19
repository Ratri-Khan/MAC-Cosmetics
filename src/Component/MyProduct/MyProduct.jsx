import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyProduct = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:3000/myProduct?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [url]);

  //   const handleDelete = (_id) => {
  //     const warning = Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     });
  //     if (warning) {
  //       fetch(`http://localhost:3000/products/${_id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.deletedCount > 0) {
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your file has been deleted.",
  //               icon: "success",
  //             });
  //           }
  //         });
  //     }
  //   };
  const handleDelete = _id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
        fetch(`http://localhost:3000/products/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = bookings.filter(booking => booking._id !== _id);
                    setBookings(remaining);
                }
            })
    }
}
  return (
    <div className="overflow-x-auto">
  <table className="table w-full text-center my-28 border border-lime-900">
    <thead>
      <tr className="text-xl text-lime-900">
        <th className="border border-lime-900">Img</th>
        <th className="border border-lime-900">Seller</th>
        <th className="border border-lime-900">Email</th>
        <th className="border border-lime-900">Product</th>
        <th className="border border-lime-900">Price</th>
        <th className="border border-lime-900">Rating</th>
        <th className="border border-lime-900">Available</th>
        <th className="border border-lime-900">Action</th>
      </tr>
    </thead>
    <tbody className="text-sm font-bold">
      {products &&
        products.map((product) => (
          <tr key={product._id}>
            <td className="border border-lime-900">
              <img
                src={product.photoURL}
                className="w-20 h-20"
                alt={`${product.subCategory}`}
              />
            </td>
            <td className="border border-lime-900 text-lg">
              {product?.sellerName}
            </td>
            <td className="border border-lime-900">{product?.email}</td>
            <td className="border border-lime-900">{product?.subCategory}</td>
            <td className="border border-lime-900">${product?.price}</td>
            <td className="border border-lime-900">{product?.rating}</td>
            <td className="border border-lime-900">{product?.quantity}</td>
            <td className="border border-lime-900">
              <button
                onClick={() => handleDelete(`${product._id}`)}
                className="bg-lime-950 text-lime-600 p-3 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
</div>

  );
};

export default MyProduct;
