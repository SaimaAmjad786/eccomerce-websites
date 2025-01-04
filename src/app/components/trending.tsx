
// import React from "react";
// import Image from "next/image";

// const products = [
//   {
//     id: 1,
//     name: "Cantilever chair",
//     price: "$26.00",
//     oldPrice: "$42.00",
//     img: "/pink.png",
//   },
//   {
//     id: 2,
//     name: "Cantilever chair",
//     price: "$26.00",
//     oldPrice: "$42.00",
//     img: "/reddish.png",
//   },
//   {
//     id: 3,
//     name: "Cantilever chair",
//     price: "$42.00",
//     oldPrice: "$90.00",
//     img: "/white.png",
//   },
//   {
//     id: 4,
//     name: "Cantilever chair",
//     price: "$42.00",
//     oldPrice: "$80.00",
//     img: "/brown.png",
//   },
// ];

// function Trending() {
//   return (
//     <section className="text-gray-600 body-font py-12">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="flex flex-col text-center w-full mb-12">
//           <h1 className="text-3xl font-bold text-gray-900">
//             Trending Products
//           </h1>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-100"
//             >
//               {/* Product Image */}
//               <Image
//                 src={product.img}
//                 alt={product.name}
//                 className="rounded-lg w-full h-60 object-cover mb-4"
//                 width={500}
//                 height={100}
//               />
//               {/* Product Name */}
//               <h2 className="text-black font-medium text-lg mb-2 ml-12">
//                 {product.name}
//               </h2>
//               {/* Pricing */}
//               <div className="text-[#151875] text-sm flex justify-center gap-2 ">
//                 <span>{product.price}</span>
//                 <span className="line-through text-black">
//                   {product.oldPrice}
//                 </span>
//               </div>
              
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Trending;





// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";

// const products = [
//   {
//     id: 1,
//     name: "Cantilever chair",
//     price: "$26.00",
//     oldPrice: "$42.00",
//     img: "/pink.png",
//   },
//   {
//     id: 2,
//     name: "Cantilever chair",
//     price: "$26.00",
//     oldPrice: "$42.00",
//     img: "/reddish.png",
//   },
//   {
//     id: 3,
//     name: "Cantilever chair",
//     price: "$42.00",
//     oldPrice: "$90.00",
//     img: "/white.png",
//   },
//   {
//     id: 4,
//     name: "Cantilever chair",
//     price: "$42.00",
//     oldPrice: "$80.00",
//     img: "/brown.png",
//   },
// ];

// interface TrendingProduct {
//   cartHeading: string;
//   cartImg: string;
//   cartPrice: string;
// }

// const Trending = () => {
//   const [trendingProducts, setTrendingProducts] = useState<TrendingProduct[]>([]);

//   useEffect(() => {
//     async function fetchTrendingProducts() {
//       const res = await client.fetch(
//         `*[_type == 'trendProduct'][0].sections[0].cart[]{'cartHeading':cartHeading, 'cartImg':cartImg.asset->url, 'cartPrice':cartPrice}`
//       );
//       setTrendingProducts(res);
//     }

//     fetchTrendingProducts();
//   }, []);

//   return (
//     <section className="text-gray-600 body-font py-12">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="flex flex-col text-center w-full mb-12">
//           <h1 className="text-3xl font-bold text-gray-900">Trending Products</h1>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {trendingProducts.map((product, index) => (
//             <div
//               key={index}
//               className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-100"
//             >
//               {/* Product Image */}
//               <Image
//                 src={product.cartImg}
//                 alt={product.cartHeading}
//                 className="rounded-lg w-full h-60 object-cover mb-4"
//                 width={500}
//                 height={100}
//               />
//               {/* Product Name */}
//               <h2 className="text-black font-medium text-lg mb-2">
//                 {product.cartHeading}
//               </h2>
//               {/* Pricing */}
//               <div className="text-[#151875] text-sm flex justify-center gap-2">
//                 <span>{product.cartPrice}</span>
//                 <span className="line-through text-black">
//                   {products.oldPrice}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Trending;






import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

const products = [
  {
    id: 1,
    name: "Cantilever chair",
    price: "$26.00",
    oldPrice: "$42.00",
    img: "/pink.png",
  },
  {
    id: 2,
    name: "Cantilever chair",
    price: "$26.00",
    oldPrice: "$42.00",
    img: "/reddish.png",
  },
  {
    id: 3,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$90.00",
    img: "/white.png",
  },
  {
    id: 4,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$80.00",
    img: "/brown.png",
  },
];

async function Trending() {
  interface trendProduct{
    cartHeading:string;
    cartImg:string;
    cartprice:number;
  }

  const res = await client.fetch(
      `*[_type == 'trendProduct'][0].sections[0].cart[]{'cartHeading':cartHeading, 'cartImg':cartImg.asset->url, 'cartPrice':cartPrice}`
  )
const [cartHeading,cartImg,cartPrice] = await res;

  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Trending Products
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {res.map(( item:trendProduct , index:number) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-100"
            >
              {/* Product Image */}
              <Image
                src={item.cartImg}
                alt={item.cartHeading}
                className="rounded-lg w-full h-60 object-cover mb-4"
                width={500}
                height={100}
              />
              {/* Product Name */}
              <h2 className="text-black font-medium text-lg mb-2 ml-12">
                {item.cartHeading}
              </h2>
              {/* Pricing */}
              <div className="text-[#151875] text-sm flex justify-center gap-2 ">
                <span>{item.cartprice}</span>
                <span className="line-through text-black">
                  {item.cartprice}
                </span>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trending;