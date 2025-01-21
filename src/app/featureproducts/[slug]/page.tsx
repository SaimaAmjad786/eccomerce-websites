// "use client";

// import Header from "@/app/components/header";
// import TopBar from "@/app/components/navbar";
// import Image from "next/image";
// import React from "react";

// interface IProduct {
//   id: number;
//   name: string;
//   price: number;
//   image?: string[] | string;
//   code: string | number;
//   slug: string;
// }

// const featureProducts: IProduct[] = [
//   {
//     id: 1,
//     name: "Cantilever Chair",
//     price: 42.0,
//     image: ["/chair3.png"],
//     code: "Y523201",
//     slug: "cantilever-chair-1",
//   },
//   {
//     id: 2,
//     name: "Cantilever Chair",
//     price: 42.0,
//     image: ["/chair2.png"],
//     code: "Y523202",
//     slug: "cantilever-chair-2",
//   },
//   {
//     id: 3,
//     name: "Cantilever Chair",
//     price: 44.0,
//     image: ["/chair1.png"],
//     code: "Y523203",
//     slug: "cantilever-chair-3",
//   },
//   {
//     id: 4,
//     name: "Cantilever Chair",
//     price: 42.0,
//     image: ["/chair.png"],
//     code: "Y523204",
//     slug: "cantilever-chair-4",
//   },
// ];

// function SlugPage({ params }: { params: { slug: string } }) {
//   const items:any = featureProducts.find((item:any) => item.slug === params.slug);
  
//   return (
//     <>
//     <TopBar/>
//     <Header/>
//     <div className="mt-24 flex flex-col lg:flex-row justify-around">
//       <section className="text-gray-600 body-font overflow-hidden">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="lg:w-4/5 mx-auto flex flex-wrap">
//             <Image
//               src={items.image[0]} // Ensure this is a valid string
//               alt={items.name}
//               width={500}
//               height={500}
//               className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//             />
//             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//               <h2 className="text-sm title-font text-gray-500 tracking-widest">
//                 Featured Products
//               </h2>
//               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//                 {items.name}
//               </h1>
//               <div className="flex mb-4">
//                 {/* Render star ratings */}
//                 {[...Array(5)].map((_, index) => (
//                   <svg
//                     key={index}
//                     fill={index < 4 ? "currentColor" : "none"}
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="leading-relaxed">
//                 Fam locavore kickstarter distillery. Mixtape chillwave turmeric
//                 sriracha taximy chia microdosing tilde DIY.
//               </p>
//               <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//                 <div className="flex">
//                   <span className="mr-3">Color</span>
//                   <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
//                   <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
//                   <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
//                 </div>
//                 <div className="flex ml-6 items-center">
//                   <span className="mr-3">Size</span>
//                   <div className="relative">
//                     <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
//                       <option>SM</option>
//                       <option>M</option>
//                       <option>L</option>
//                       <option>XL</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex">
//                 <span className="title-font font-medium text-2xl text-gray-900">
//                   ${items.price.toFixed(2)}
//                 </span>
//                 <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//     </>
//   );
// }

// export default SlugPage;




// "use client";
// import Toastity from "@/app/components/addtocarttoastify";
// import Header from "@/app/components/header";
// import TopBar from "@/app/components/navbar";
// import Image from "next/image";
// import React, { useState } from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";

// // Update the type of product to include color and size
// interface IProduct {
//   id: number;
//   name: string;
//   price: number;
//   image: string[] | string; // image can be a string or an array
//   code: string | number;
//   slug: string;
//   color?: string[];  // Optional color property
//   size?: string[];   // Optional size property
// }

// // Example feature products with color and size properties
// const featureProducts: IProduct[] = [
//   {
//     id: 1,
//     name: "Cantilever Chair",
//     price: 42.00,
//     image: ["/chair3.png"],
//     code: "Y523201",
//     slug: "cantilever-chair-1",
//     color: ["red", "green", "blue"], // Example colors
//     size: ["S", "M", "L"], // Example sizes
//   },
//   {
//     id: 2,
//     name: "Cantilever Chair",
//     price: 42.00,
//     image: ["/chair2.png"],
//     code: "Y523202",
//     slug: "cantilever-chair-2",
//     color: ["red", "yellow", "blue"], // Example colors
//     size: ["S", "M", "L"], // Example sizes
//   },
//   {
//     id: 3,
//     name: "Cantilever Chair",
//     price: 44.00,
//     image: ["/chair1.png"],
//     code: "Y523203",
//     slug: "cantilever-chair-3",
//     color: ["red", "#black","green"], // Example colors
//     size: ["M", "L"], // Example sizes
//   },
//   {
//     id: 4,
//     name: "Cantilever Chair",
//     price: 42.00,
//     image: ["/chair.png"],
//     code: "Y523204",
//     slug: "cantilever-chair-4",
//     color: ["black", "red","yellow"], // Example colors
//     size: ["M", "L"], // Example sizes
//   },
// ];

// function SlugPage({ params }: { params: { slug: string } }) {
//   // Find the item based on the slug
//   const items = featureProducts.find((item) => item.slug === params.slug);

//   // If item is not found, show an error message
//   if (!items) {
//     return <div>Product not found</div>;
//   }

//   // Default image in case of missing image data
//   const defaultImage = "/default-image.png"; 

//   // State to store the cart item
//   const [cartItem, setCartItem] = useState({
//     id: items.id,
//     title: items.name,
//     image: items.image[0] || defaultImage, // Use first image or default
//     slug: items.slug,
//     price: items.price,
//     size: items.size ? items.size[0] : "", // Default size if available
//     color: items.color ? items.color[0] : "", // Default color if available
//     description: "Sample description", // Sample description
//     qty: 1, // Default quantity
//     discount: 0, // No discount
//   });

//   // Handle increment and decrement of quantity
//   const incrementQty = () => {
//     setCartItem((prevState) => ({
//       ...prevState,
//       qty: prevState.qty + 1,
//     }));
//   };

//   const decrementQty = () => {
//     setCartItem((prevState) => ({
//       ...prevState,
//       qty: prevState.qty > 1 ? prevState.qty - 1 : 1,
//     }));
//   };

//   return (
//     <>
//       <TopBar />
//       <Header />
//       <div className="mt-24 flex flex-col lg:flex-row justify-around">
//         <section className="text-gray-600 body-font overflow-hidden">
//           <div className="container px-5 py-24 mx-auto">
//             <div className="lg:w-4/5 mx-auto flex flex-wrap">
//               {/* Ensure image is available and fallback to default */}
//               <Image
//                 src={Array.isArray(items.image) ? items.image[0] : items.image || defaultImage}
//                 alt={items.name}
//                 width={500}
//                 height={500}
//                 className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//               />
//               <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                 <h2 className="text-sm title-font text-gray-500 tracking-widest">
//                   Featured Products
//                 </h2>
//                 <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//                   {items.name}
//                 </h1>
//                 <div className="flex mb-4">
//                   {/* Render star ratings */}
//                   {[...Array(5)].map((_, index) => (
//                     <svg
//                       key={index}
//                       fill={index < 4 ? "currentColor" : "none"}
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       className="w-4 h-4 text-indigo-500"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="leading-relaxed">
//                   Fam locavore kickstarter distillery. Mixtape chillwave turmeric
//                   sriracha taximy chia microdosing tilde DIY.
//                 </p>
//                 <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//                   <p className="text-black font-bold ">Select Colors</p>
//                   <div className="space-x-3">
//                     {items.color?.map((item, i) => (
//                       <button
//                         key={i}
//                         onClick={() => setCartItem({ ...cartItem, color: item })}
//                         className="w-[37px] active:outline h-[37px] rounded-full"
//                         style={{ backgroundColor: item }}
//                       ></button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Select Size */}
//                 <p className="text-black font-bold">Select Size</p>
//                 <div className="space-x-3">
//                   {items.size?.map((item, i) => (
//                     <button
//                       key={i}
//                       onClick={() => setCartItem({ ...cartItem, size: item })}
//                       className="w-[70px] active:outline h-[37px] rounded-[16px] bg-black text-white font-bold"
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>

//                 {/* Price */}
//                 <div className="flex space-x-3 mt-5">
//                   <p className="font-bold">${cartItem.price * cartItem.qty}.00</p>
//                   <p className="font-bold text-blackline-through">
//                     {cartItem.discount > 0 &&
//                       (cartItem.price - (cartItem.price * cartItem.discount) / 100) *
//                         cartItem.qty}
//                   </p>
//                 </div>

//                 {/* Quantity Buttons */}
//                 <div className="flex justify-start items-center pt-10">
//                   <button onClick={decrementQty} className="w-10">
//                     <FaMinus />
//                   </button>
//                   <span className="w-4">{cartItem.qty}</span>
//                   <button onClick={incrementQty} className="w-10">
//                     <FaPlus />
//                   </button>
//                 </div>

//                 {/* Add to Cart Button */}
//                 <Toastity cartItem={cartItem} />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default SlugPage;




"use client";
import Toastity from "@/app/components/addtocarttoastify";
import Header from "@/app/components/header";
import TopBar from "@/app/components/navbar";
import Image from "next/image";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

// Define the type of product to include color and size
interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string[] | string; // image can be a string or an array
  code: string | number;
  slug: string;
  color?: string[];  // Optional color property
  size?: string[];   // Optional size property
}

// Example feature products with color and size properties
const featureProducts: IProduct[] = [
  {
    id: 1,
    name: "Cantilever Chair",
    price: 42.00,
    image: ["/chair3.png"],
    code: "Y523201",
    slug: "cantilever-chair-1",
    color: ["red", "green", "blue"],
    size: ["S", "M", "L"],
  },
  {
    id: 2,
    name: "Cantilever Chair",
    price: 42.00,
    image: ["/chair2.png"],
    code: "Y523202",
    slug: "cantilever-chair-2",
    color: ["red", "yellow", "blue"],
    size: ["S", "M", "L"],
  },
  {
    id: 3,
    name: "Cantilever Chair",
    price: 44.00,
    image: ["/chair1.png"],
    code: "Y523203",
    slug: "cantilever-chair-3",
    color: ["red", "#black", "green"],
    size: ["M", "L"],
  },
  {
    id: 4,
    name: "Cantilever Chair",
    price: 42.00,
    image: ["/chair.png"],
    code: "Y523204",
    slug: "cantilever-chair-4",
    color: ["black", "red", "yellow"],
    size: ["M", "L"],
  },
];

function SlugPage({ params }: { params: { slug: string } }) {
  // Find the item based on the slug
  const items = featureProducts.find((item) => item.slug === params.slug);

  // If item is not found, show an error message
  if (!items) {
    return <div>Product not found</div>;
  }

  // Default image in case of missing image data
  const defaultImage = "/default-image.png"; 

  // State to store the cart item
  const [cartItem, setCartItem] = useState({
    id: items.id,
    title: items.name,
    image: Array.isArray(items.image) ? items.image[0] : items.image || defaultImage, // Use first image or default
    slug: items.slug,
    price: items.price,
    size: items.size ? items.size[0] : "", // Default size if available
    color: items.color ? items.color[0] : "", // Default color if available
    description: "Sample description", // Sample description
    qty: 1, // Default quantity
    discount: 0, // No discount
  });

  // Handle increment and decrement of quantity
  const incrementQty = () => {
    setCartItem((prevState) => ({
      ...prevState,
      qty: prevState.qty + 1,
    }));
  };

  const decrementQty = () => {
    setCartItem((prevState) => ({
      ...prevState,
      qty: prevState.qty > 1 ? prevState.qty - 1 : 1,
    }));
  };

  return (
    <>
      <TopBar />
      <Header />
      <div className="mt-24 flex flex-col lg:flex-row justify-around">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              {/* Ensure image is available and fallback to default */}
              <Image
                src={Array.isArray(items.image) ? items.image[0] : items.image || defaultImage}
                alt={items.name}
                width={500}
                height={500}
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Featured Products
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {items.name}
                </h1>
                <div className="flex mb-4">
                  {/* Render star ratings */}
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      fill={index < 4 ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="leading-relaxed">
                  Fam locavore kickstarter distillery. Mixtape chillwave turmeric
                  sriracha taximy chia microdosing tilde DIY.
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <p className="text-black font-bold">Select Colors</p>
                  <div className="space-x-3">
                    {items.color?.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => setCartItem({ ...cartItem, color: item })}
                        className="w-[37px] active:outline h-[37px] rounded-full"
                        style={{ backgroundColor: item }}
                      ></button>
                    ))}
                  </div>
                </div>

                {/* Select Size */}
                <p className="text-black font-bold">Select Size</p>
                <div className="space-x-3">
                  {items.size?.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setCartItem({ ...cartItem, size: item })}
                      className="w-[70px] active:outline h-[37px] rounded-[16px] bg-black text-white font-bold"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Price */}
                <div className="flex space-x-3 mt-5">
                  <p className="font-bold">${cartItem.price * cartItem.qty}.00</p>
                  <p className="font-bold text-blackline-through">
                    {cartItem.discount > 0 &&
                      (cartItem.price - (cartItem.price * cartItem.discount) / 100) *
                        cartItem.qty}
                  </p>
                </div>

                {/* Quantity Buttons */}
                <div className="flex justify-start items-center pt-10">
                  <button onClick={decrementQty} className="w-10">
                    <FaMinus />
                  </button>
                  <span className="w-4">{cartItem.qty}</span>
                  <button onClick={incrementQty} className="w-10">
                    <FaPlus />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <Toastity cartItem={cartItem} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SlugPage;
