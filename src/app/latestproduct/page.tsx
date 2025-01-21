
//  import React from "react";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

// async function LatestProduct() {
//   // Define the Product interface
//   interface Product {
//     _id: string;
//     name: string;
//     description: string;
//     price: number;
//     image_url: string;
//   }

//   let products: Product[] = [];

//   // Fetch data from Sanity
//   try {
//     products = await client.fetch(`
//       *[_type == "product"][0..5]{
//         _id,
//         name,
//         description,
//         price,
//         "image_url": image.asset->url
//       }
//     `);
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//   }

//   // Return fallback UI if no products are available
//   if (products.length === 0) {
//     return (
//       <section className="text-gray-600 body-font py-12">
//         <div className="container mx-auto text-center">
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">Latest Products</h1>
//           <p className="text-gray-600 text-lg">No products available. Please try again later.</p>
//         </div>
//       </section>
//     );
//   }

//   // Render the products
//   return (
//     <section className="text-gray-600 body-font py-12">
//       <div className="container mx-auto">
//         <div className="flex flex-col text-center w-full mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Latest Products</h1>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product:any) => (
//             <div
//               key={product._id}
//               className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
//             >
//                 <Link href ={`/latestproduct/${product.slug}`}>
//               <div className="flex flex-col items-center text-center">
//                 <Image
//                   src={product.image_url}
//                   alt={product.name}
//                   className="rounded-lg w-full h-80 object-cover bg-gray-100 mb-4"
//                   width={200}
//                   height={200}
//                 />
//                 <h2 className="text-[#FB2E86] font-medium text-lg mb-2">{product.name}</h2>
//                 <p className="text-gray-600 text-sm mb-2">{product.description}</p>
//                 <div className="text-[#151875] text-sm flex justify-center gap-2">
//                   <span>${product.price}</span>
//                 </div>
//               </div>
//               </Link>
//               </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default LatestProduct;







"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allProducts } from "@/sanity/lib/querries";
import Link from "next/link";
const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

const products = [
    {
      id: 1,
      name: "Comfort Handy Craft",
      price: "$42.00",
      oldPrice: "$65.00",
      img: "/chair3.png",
    },
    {
      id: 2,
      name: "Stylish Cantilever Chair",
      price: "$58.00",
      oldPrice: "$75.00",
      img: "/chair2.png",
    },
    {
      id: 3,
      name: "Elegant Wood Frame Chair",
      price: "$62.00",
      oldPrice: "$90.00",
      img: "/chair1.png",
    },
  ]
//data fetch sanity

function LatestProduct() {
  const [product , setProduct] = useState <Product[]> ([])
  useEffect(()=> {
    async function fetchproduct() {
      const fetchpPoduct: Product[] = await client.fetch(allProducts)
      setProduct(fetchpPoduct)
    }
    fetchproduct()
  },[])



  return (
    <section className="text-gray-600 body-font py-12">

      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Latest Products</h1>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {product.slice(0,6).map((product) => (
            <div
              key={product._id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <Link href={`/latestproduct/${product.slug.current}`}>
                {
                  product.image &&
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  className="rounded-lg w-full h-80 object-cover bg-gray-100 mb-4"
                  width={300}
                  height={100}
                />
          }
          </Link>
                <h2 className="text-[#FB2E86] font-medium text-lg mb-2">{product.name}</h2>
                <div className="text-[#151875] text-sm flex justify-center gap-2">
                  <span>{product.price}</span>
                  <span className="line-through text-[#FB2E86]">{product.discountPercentage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(3).map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="rounded-lg w-full h-80 object-cover bg-gray-100 mb-4"
                />
                <h2 className="text-[#FB2E86] font-medium text-lg mb-2">{product.name}</h2>
                <div className="text-[#151875] text-sm flex justify-center gap-2">
                  <span>{product.price}</span>
                  <span className="line-through text-[#FB2E86]">{product.oldPrice}</span>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestProduct;










