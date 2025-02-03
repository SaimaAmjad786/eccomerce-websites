

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
import React, { useEffect, useState } from "react";
import { Product } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import TopBar from "@/app/components/navbar";
import Header from "@/app/components/header";
import Link from "next/link";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  try {
    return await client.fetch(
      groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        name,
        _type,
        image,
        description,
        price,
      }`,
      { slug }
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

const SlugPage: React.FC<ProductPageProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!params.slug) return;

    let isMounted = true; // Flag to prevent setting state on an unmounted component

    async function fetchProduct() {
      setLoading(true);
      const data = await getProduct(params.slug);
      if (isMounted && data) {
        setProduct(data);
      } else {
        setProduct(null); // Set to null if no data is found
      }
      setLoading(false);
    }

    fetchProduct();

    return () => {
      isMounted = false; // Cleanup flag on unmount
    };
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <TopBar />
      <Header />
      <div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  width={300}
                  height={300}
                />
              )}

              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Latest Product
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.name}
                </h1>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product.price}
                  </span>
                  <Link href={"/carts"} >
                  <button
                    className="flex  ml-10 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg
                    mt-3 bg-gradient-to-r from-blue-500 to-pink-500  font-semibold 
                  shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SlugPage;







