

// import Header from "@/app/components/header";
// import TopBar from "@/app/components/navbar";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Product } from "../../../../types/products";


// // Data fetch Sanity
// interface SlugPageProps {
//   params:Promise <{slug:string}>
// }
// async function getProduct(slug:string ):Promise<Product> {
// return client.fetch(
//   groq ` *[_type == "product" && slug.current == $slug][0] {
//   _id,
//   name,
//   description,
//   price,
//   image,
//   }`, {slug}
// )
// }
// const SlugPage = async ({ params }: SlugPageProps) => {
//   const {slug} = await params;
//   const product = await getProduct(slug)



//   return (
//     <>
//       <TopBar />
//       <Header />
//       <div className="mt-24 flex flex-col lg:flex-row justify-around">
//         <section className="text-gray-600 body-font overflow-hidden">
//             <div key={product._id} className="container px-5 py-24 mx-auto">
//               <div className="lg:w-4/5 mx-auto flex flex-wrap">
//               {
//                 product.image && (
//                 <Image
//                   src={urlFor(product.image).url()} // Ensure this is a valid string
//                   alt={product.name}
//                   width={500}
//                   height={500}
//                   className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//                 />
//                 )
//           }
//                 <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                   <h2 className="text-sm title-font text-gray-500 tracking-widest">
//                     Latest Products
//                   </h2>
//                   <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//                     {product.name}
//                   </h1>
//                   <div className="flex mb-4">
//                     {/* Render star ratings */}
//                     {[...Array(5)].map((_, index) => (
//                       <svg
//                         key={index}
//                         fill={index < 4 ? "currentColor" : "none"}
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         className="w-4 h-4 text-indigo-500"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                       </svg>
//                     ))}
//                   </div>
//                   <p className="leading-relaxed">{product.description}</p>
//                   <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//                     <div className="flex">
//                       <span className="mr-3">Color</span>
//                       <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
//                       <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
//                       <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
//                     </div>
//                     <div className="flex ml-6 items-center">
//                       <span className="mr-3">Size</span>
//                       <div className="relative">
//                         <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
//                           <option>SM</option>
//                           <option>M</option>
//                           <option>L</option>
//                           <option>XL</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex">
//                     <span className="title-font font-medium text-2xl text-gray-900">
//                       ${product.price}.00
//                     </span>
//                     <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         </section>
//       </div>
//     </>
//   );
// };

// export default SlugPage;








// "use client";
// import Header from "@/app/components/header";
// import TopBar from "@/app/components/navbar";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import React, { useState } from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import Toastity from "@/app/components/addtocarttoastify";

// export interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: any;
//   size?: string[];
//   color?: string[];
//   discount?: number;
// }

// interface SlugPageProps {
//   params: { slug: string };
// }

// // Fetch product data from Sanity
// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     groq`
//       *[_type == "product" && slug.current == $slug][0] {
//         _id,
//         name,
//         description,
//         price,
//         image,
//         size,
//         color,
//         discount
//       }
//     `,
//     { slug }
//   );
// }

// const SlugPage = async ({ params }: SlugPageProps) => {
//   const { slug } = params;
//   const product = await getProduct(slug);

//   return (
//     <>
//       <TopBar />
//       <Header />
//       <ProductDetails product={product} />
//     </>
//   );
// };

// const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
//   const [cartItem, setCartItem] = useState({
//     id: product._id,
//     title: product.name,
//     image: product.image,
//     slug: product._id,
//     price: product.price,
//     description: product.description,
//     qty: 1,
//     discount: product.discount || 0,
//     size: product.size?.[0] || "", // Default to first size
//     color: product.color?.[0] || "", // Default to first color
//   });

//   const discountedPrice =
//     cartItem.discount > 0
//       ? (cartItem.price - (cartItem.price * cartItem.discount) / 100) * cartItem.qty
//       : cartItem.price * cartItem.qty;

//   return (
//     <div className="mt-24 flex flex-col lg:flex-row justify-around">
//       <section className="text-gray-600 body-font overflow-hidden">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="lg:w-4/5 mx-auto flex flex-wrap">
//             {/* Product Image */}
//             {product.image && (
//               <Image
//                 src={urlFor(product.image).url()}
//                 alt={product.name}
//                 width={500}
//                 height={500}
//                 className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//               />
//             )}
//             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//               <h2 className="text-md mb-5 title-font text-black font-bold tracking-widest">
//                 Latest Products
//               </h2>
//               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//                 {product.name}
//               </h1>
//               <p className="leading-relaxed">{product.description}</p>

//               {/* Color Selection */}
//               {product.color && product.color.length > 0 && (
//                 <div className="mt-6">
//                   <p className="text-gray-400">Select Color</p>
//                   <div className="flex space-x-3">
//                     {product.color.map((color, i) => (
//                       <button
//                         key={i}
//                         onClick={() => setCartItem({ ...cartItem, color })}
//                         className={`w-10 h-10 rounded-full border-2 ${
//                           cartItem.color === color ? "border-black" : "border-gray-300"
//                         }`}
//                         style={{ backgroundColor: color }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Size Selection */}
//               {product.size && product.size.length > 0 && (
//                 <div className="mt-6">
//                   <p className="text-gray-400">Select Size</p>
//                   <div className="flex space-x-3">
//                     {product.size.map((size, i) => (
//                       <button
//                         key={i}
//                         onClick={() => setCartItem({ ...cartItem, size })}
//                         className={`w-20 h-10 rounded-lg ${
//                           cartItem.size === size ? "bg-gray-800 text-white" : "bg-gray-500 text-white"
//                         }`}
//                       >
//                         {size}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Price and Quantity */}
//               <div className="flex space-x-3 mt-6">
//                 <p className="font-bold text-lg">${discountedPrice.toFixed(2)}</p>
//                 {cartItem.discount > 0 && (
//                   <p className="font-bold text-gray-400 line-through text-lg">
//                     ${(cartItem.price * cartItem.qty).toFixed(2)}
//                   </p>
//                 )}
//               </div>

//               {/* Quantity Increment/Decrement */}
//               <div className="flex justify-start items-center pt-10 mb-8 space-x-4">
//                 <button
//                   onClick={() =>
//                     setCartItem({ ...cartItem, qty: Math.max(cartItem.qty - 1, 1) })
//                   }
//                   className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded"
//                 >
//                   <FaMinus />
//                 </button>
//                 <span className="text-lg">{cartItem.qty}</span>
//                 <button
//                   onClick={() => setCartItem({ ...cartItem, qty: cartItem.qty + 1 })}
//                   className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded"
//                 >
//                   <FaPlus />
//                 </button>
//               </div>

//               {/* Add to Cart */}
//               <Toastity cartItem={cartItem} />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SlugPage;









"use client";
import Header from "@/app/components/header";
import TopBar from "@/app/components/navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Toastity from "@/app/components/addtocarttoastify";

// Define product interface
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: any;
  size?: string[];
  color?: string[];
  discount?: number;
}

interface SlugPageProps {
  params: { slug: string };
}

// Client-side data fetching using useEffect
const SlugPage = ({ params }: SlugPageProps) => {
  const { slug } = params;

  const [product, setProduct] = useState<Product | null>(null);
  const [cartItem, setCartItem] = useState({
    id: "",
    title: "",
    image: null,
    slug: "",
    price: 0,
    description: "",
    qty: 1,
    discount: 0,
    size: "",
    color: "",
  });

  // Fetch product data after the component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await client.fetch(
          groq`
            *[_type == "product" && slug.current == $slug][0] {
              _id,
              name,
              description,
              price,
              image,
              size,
              color,
              discount
            }
          `,
          { slug }
        );
        setProduct(fetchedProduct);
        setCartItem({
          id: fetchedProduct._id,
          title: fetchedProduct.name,
          image: fetchedProduct.image,
          slug: fetchedProduct._id,
          price: fetchedProduct.price,
          description: fetchedProduct.description,
          qty: 1,
          discount: fetchedProduct.discount || 0,
          size: fetchedProduct.size?.[0] || "",
          color: fetchedProduct.color?.[0] || "",
        });
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const discountedPrice =
    cartItem.discount > 0
      ? (cartItem.price - (cartItem.price * cartItem.discount) / 100) * cartItem.qty
      : cartItem.price * cartItem.qty;

  return (
    <>
      <TopBar />
      <Header />
      <div className="mt-24 flex flex-col lg:flex-row justify-around">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              {/* Product Image */}
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                />
              )}
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-md mb-5 title-font text-black font-bold tracking-widest">
                  Latest Products
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>
                <p className="leading-relaxed">{product.description}</p>

                {/* Color Selection */}
                {product.color && product.color.length > 0 && (
                  <div className="mt-6">
                    <p className="text-gray-400">Select Color</p>
                    <div className="flex space-x-3">
                      {product.color.map((color, i) => (
                        <button
                          key={i}
                          onClick={() => setCartItem({ ...cartItem, color })}
                          className={`w-10 h-10 rounded-full border-2 ${
                            cartItem.color === color ? "border-black" : "border-gray-300"
                          }`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selection */}
                {product.size && product.size.length > 0 && (
                  <div className="mt-6">
                    <p className="text-gray-400">Select Size</p>
                    <div className="flex space-x-3">
                      {product.size.map((size, i) => (
                        <button
                          key={i}
                          onClick={() => setCartItem({ ...cartItem, size })}
                          className={`w-20 h-10 rounded-lg ${
                            cartItem.size === size ? "bg-gray-800 text-white" : "bg-gray-500 text-white"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price and Quantity */}
                <div className="flex space-x-3 mt-6">
                  <p className="font-bold text-lg">${discountedPrice.toFixed(2)}</p>
                  {cartItem.discount > 0 && (
                    <p className="font-bold text-gray-400 line-through text-lg">
                      ${(cartItem.price * cartItem.qty).toFixed(2)}
                    </p>
                  )}
                </div>

                {/* Quantity Increment/Decrement */}
                <div className="flex justify-start items-center pt-10 mb-8 space-x-4">
                  <button
                    onClick={() =>
                      setCartItem({ ...cartItem, qty: Math.max(cartItem.qty - 1, 1) })
                    }
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-lg">{cartItem.qty}</span>
                  <button
                    onClick={() => setCartItem({ ...cartItem, qty: cartItem.qty + 1 })}
                    className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded"
                  >
                    <FaPlus />
                  </button>
                </div>

                {/* Add to Cart */}
                <Toastity cartItem={cartItem} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SlugPage;
