
"use client";
import React, { useState } from 'react'
import TopBar from '../components/navbar';
import Header from '../components/header';
import { FaStar } from "react-icons/fa";
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from "next/image";

let stars = [<FaStar key={0}/> , <FaStar key={1} /> ,<FaStar key={2} /> , <FaStar key={3} /> , <FaStar key={4} /> , <FaStar key={5} /> , <FaStar key={6} /> , <FaStar key={7} />] 

function Products() {
 const products = useSelector((state:any)=> state.product)

  return (
    <>
    <TopBar/>
        <Header/>
        {/* Header */}
        <header className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">ShopLeftSideBar</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Shop Left Slider</span>
            </p>
          </div>
        </header>

    <section className="text-gray-600 body-font py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Trending Products
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 flex-col md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item:any , i:any) => (
            <div
              key={item.i}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-100"
            >
              {/* linking */}
              <Link href={`/products/${item.slug}`}>
              {/* Product Image */}
              <Image src={item.image[0]}
                alt={item.name}
                className="rounded-lg w-full h-60 object-cover mb-4"
                width={200}
                height={100}
              />
              </Link>
              {/* Product Name */}
              <h2 className="text-black font-bold text-lg mb-2 ml-12">
                {item.title}
              </h2>
              {/* Stars */}
              <p className=" flex justify-start items-center text-yellow-400 font-bold text-lg mb-2 ml-12">
                {stars}
              </p>
              {/* Pricing */}
              <div className="text-black font-bold text-sm flex justify-center gap-2 ">
                <span>${item.price}</span>
                <span className="line-through text-black">
                  {item.discount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Products;







// "use client";
// import React, { useState } from 'react'
// import TopBar from '../components/navbar';
// import Header from '../components/header';
// import { FaStar } from "react-icons/fa";
// import Link from 'next/link';
// import { useSelector } from 'react-redux';
// import Image from "next/image";
// import { client } from '@/sanity/lib/client';

// let stars = [<FaStar key={0} />, <FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />, <FaStar key={5} />, <FaStar key={6} />, <FaStar key={7} />]

// async function Products() {
//   const products = useSelector((state: any) => state.product)
//   const querry = `* [_type =="product"]{
// _id,
//   name,
//   "image_url":image.asset->url,
//   description,
//   price,
//     discountPercentage,
//     isFeaturedProduct,
//     category,
// }`

//   const product = await client.fetch(querry)
//   console.log(product)


//   return (
//     <>
//       <TopBar />
//       <Header />
//       {/* Header */}
//       <header className="bg-gray-100 py-6">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl font-bold text-blue-900">ShopLeftSideBar</h1>
//           <p className="text-sm text-gray-500">
//             Home / Pages / <span className="text-pink-500">Shop Left Slider</span>
//           </p>
//         </div>
//       </header>

//       <section className="text-gray-600 body-font py-12">
//         <div className="container mx-auto px-4">
//           {/* Section Header */}
//           <div className="flex flex-col text-center w-full mb-12">
//             <h1 className="text-3xl font-bold text-gray-900">
//               Trending Products
//             </h1>
//           </div>

//           {/* Products Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 flex-col md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {products.map((product:any) => (
//               <div
//                 key={product.i}
//                 className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-100"
//               >
//                 {/* linking */}
//                 <Link href={`/products/${product.slug}`}>
//                   {/* Product Image */}
//                   <Image src={product.image[0]}
//                     alt={product.name}
//                     className="rounded-lg w-full h-60 object-cover mb-4"
//                     width={200}
//                     height={100}
//                   />
//                 </Link>
//                 {/* Product Name */}
//                 <h2 className="text-black font-bold text-lg mb-2 ml-12">
//                   {product.title}
//                 </h2>
//                 {/* Stars */}
//                 <p className=" flex justify-start items-center text-yellow-400 font-bold text-lg mb-2 ml-12">
//                   {stars}
//                 </p>
//                 {/* Pricing */}
//                 <div className="text-black font-bold text-sm flex justify-center gap-2 ">
//                   <span>${product.price}</span>
//                   <span className="line-through text-black">
//                     {product.discount}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Products;





