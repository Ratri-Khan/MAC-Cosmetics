import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";


const Cart = () => {
  const [tabtext, setTabText] = useState("Lipstick");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://mac-cosmetics-server.vercel.app/categories?subCategory=${tabtext}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      });
  }, [tabtext]);


  return (
    <div className="w-5/6 m-auto">
      <p className="text-3xl mt-16 font-serif text-center text-slate-700">
        Our Product Collection
      </p>

      <Tabs className='text-slate-700'>
        <TabList>
          <Tab onClick={() => setTabText("Lipstick")}>Lipstick</Tab>
          <Tab onClick={() => setTabText("Nail polish")}>Nail polish</Tab>
          <Tab onClick={() => setTabText("Eye Shadow")}>Eye Shadow</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-3 gap-3 w-full">
            {products.map((product) => (
              <div
                key={product._id}
                className="card bg-lime-950 text-slate-300 p-3 shadow-xl">
                <figure>
                  <img
                    src={product.photoURL}
                    className="w-full h-60 object-cover"
                    alt={product.subCategory} />
                </figure>
                <div className="py-7">
                  <h2>product Name: {product.subCategory}</h2>
                  <h2>Price: ${product.price}</h2>
                  <h2>Rating: {product.rating}</h2>
                  <Link to={`/details/${product._id}`}><button className='p-3 rounded mt-3 bg-lime-800'>view Details</button></Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-3 w-full text-slate-300">
            {products.map((product) => (
              <div
                key={product._id}
                className="card bg-lime-950 p-3 shadow-xl">
                <figure>
                  <img
                    src={product.photoURL}
                    className="w-full h-60 object-cover"
                    alt={product.subCategory} />
                </figure>
                <div className="py-7">
                  <h2 className="">product Name: {product.subCategory}</h2>
                  <h2 className="">Price: ${product.price}</h2>
                  <h2 className="">Rating: {product.rating}</h2>
                  <Link to={`/details/${product._id}`}><button className='p-3 rounded mt-3 bg-lime-800'>view Details</button></Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-3 gap-3 w-full text-slate-300">
            {products.map((product) => (
              <div
                key={product._id}
                className="card bg-lime-950 p-3 shadow-xl">
                <figure>
                  <img
                    src={product.photoURL}
                    className="w-full h-60 object-cover"
                    alt={product.subCategory} />
                </figure>
                <div className="py-7">
                  <h2 className="">product Name: {product.subCategory}</h2>
                  <h2 className="">Price: ${product.price}</h2>
                  <h2 className="">Rating: {product.rating}</h2>
                  <Link to={`/details/${product._id}`}><button className='bg-lime-800 p-3 rounded mt-3'>view Details</button></Link>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
// const Category = () => {
//   const [tabtext, setTabText] = useState("Ear Ring");
//   const [jewelries, setJewelries] = useState([]);

//   useEffect(() => {
//     fetch(
//       `https://gemstone-jewelry-server.vercel.app/categories?subCategory=${tabtext}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setJewelries(data)
//       });
//   }, [tabtext]);


//   return (
//     <div className="w-5/6 m-auto">
//       <p className="text-5xl font-serif text-center text-white">
//         Our Product Category
//       </p>

//       <Tabs className='text-white'>
//         <TabList>
//           <Tab onClick={() => setTabText("Lipstick")}>Ear Ring</Tab>
//           <Tab onClick={() => setTabText("Nail Polish")}>Necklace</Tab>
//           <Tab onClick={() => setTabText("Eye Shadow")}>Bracelet</Tab>
//         </TabList>

//         <TabPanel>
//           <div className="grid md:grid-cols-3 gap-3 w-full">
//             {jewelries.map((jewelry) => (
//               <div
//                 key={jewelry._id}
//                 className="card bg-teal-900 p-3 w-80 shadow-xl">
//                 <figure>
//                   <img
//                     src={jewelry.photoUrl}
//                     className="w-full h-60 object-cover"
//                     alt={jewelry.jewelryName} />
//                 </figure>
//                 <div className="py-7">
//                   <h2 className="">Jewelry Name: {jewelry.jewelryName}</h2>
//                   <h2 className="">Price: ${jewelry.price}</h2>
//                   <h2 className="">Rating: {jewelry.rating}</h2>
//                   <Link to={`/details/${jewelry._id}`}><button className='shadow-white shadow-xl border-2 border-white p-3 rounded mt-3'>view Details</button></Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </TabPanel>
//         <TabPanel>
//           <div className="grid md:grid-cols-3 gap-3 w-full">
//             {jewelries.map((jewelry) => (
//               <div
//                 key={jewelry._id}
//                 className="card bg-teal-900 p-3 w-80 shadow-xl">
//                 <figure>
//                   <img
//                     src={jewelry.photoUrl}
//                     className="w-full h-60 object-cover"
//                     alt={jewelry.jewelryName} />
//                 </figure>
//                 <div className="py-7">
//                   <h2 className="">Jewelry Name: {jewelry.jewelryName}</h2>
//                   <h2 className="">Price: ${jewelry.price}</h2>
//                   <h2 className="">Rating: {jewelry.rating}</h2>
//                   <Link to={`/details/${jewelry._id}`}><button className='shadow-white shadow-xl border-2 border-white p-3 rounded mt-3'>view Details</button></Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </TabPanel>
//         <TabPanel>
//           <div className="grid md:grid-cols-3 gap-3 w-full">
//             {jewelries.map((jewelry) => (
//               <div
//                 key={jewelry._id}
//                 className="card bg-teal-900 p-3 w-80 shadow-xl">
//                 <figure>
//                   <img
//                     src={jewelry.photoUrl}
//                     className="w-full h-60 object-cover"
//                     alt={jewelry.jewelryName} />
//                 </figure>
//                 <div className="py-7">
//                   <h2 className="">Jewelry Name: {jewelry.jewelryName}</h2>
//                   <h2 className="">Price: ${jewelry.price}</h2>
//                   <h2 className="">Rating: {jewelry.rating}</h2>
//                   <Link to={`/details/${jewelry._id}`}><button className='shadow-white shadow-xl border-2 border-white p-3 rounded mt-3'>view Details</button></Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// }

export default Cart;
// **********************************************
