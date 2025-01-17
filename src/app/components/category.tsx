// import React from "react";
// import Image from "next/image";

// const categories = [
//     {
//         id: 1,
//         name: "Mini LCW Chair",
//         price: "$56.00",
//         image: "/greish.png",
//         alt: "Mini LCW Chair in grayish color",
//     },
//     {
//         id: 2,
//         name: "Mini LCW Chair",
//         price: "$56.00",
//         image: "/whitish.png",
//         alt: "Mini LCW Chair in whitish color",
//     },
//     {
//         id: 3,
//         name: "Mini LCW Chair",
//         price: "$56.00",
//         image: "/pink.png",
//         alt: "Mini LCW Chair in pink color",
//     },
//     {
//         id: 4,
//         name: "Mini LCW Chair",
//         price: "$56.00",
//         image: "/greish.png",
//         alt: "Mini LCW Chair in grayish color",
//     },
// ];

// function Category() {
//     return (
//         <section className="text-gray-600 body-font">
//             <div className="container px-5 py-16 mx-auto">
//                 {/* Section Header */}
//                 <div className="flex flex-col text-center w-full mb-10">
//                     <h1 className="text-3xl sm:text-4xl font-bold font-sans title-font text-gray-900">
//                         Top Categories
//                     </h1>
//                 </div>

//                 {/* Responsive Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {categories.map((category) => (
//                         <div
//                             key={category.id}
//                             className="p-4 flex flex-col items-center text-center"
//                         >
//                             <div className="w-full h-auto rounded-full bg-gray-100 overflow-hidden">
//                                 <Image
//                                     alt={category.alt}
//                                     className="object-cover"
//                                     src={category.image}
//                                     width={350}
//                                     height={350}
//                                 />
//                             </div>
//                             <div className="w-full mt-4">
//                                 <h2 className="title-font font-medium text-lg text-[#151875]">
//                                     {category.name}
//                                 </h2>
//                                 <span className="title-font font-medium text-lg text-[#151875]">
//                                     {category.price}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Category;




// import React from "react";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";

// const categories = [
//     {
//         id: 1,
//         name: "Mini LCW Chair",
//         price: "$56.00",
//         image: "/greish.png",
//         alt: "Mini LCW Chair in grayish color",
//     },
//     {
//         id: 2,
//         name: "Mini LCW Chair",
//         price: "$56.00",
//         image: "/whitish.png",
//         alt: "Mini LCW Chair in whitish color",
//     },
//     {
//         id: 3,
//         name: "Mini LCW Chair",
//         price: "$56.00",
//         image: "/pink.png",
//         alt: "Mini LCW Chair in pink color",
//     },
//     {
//         id: 4,
//         name: "Mini LCW Chair",
//         price: "$56.00",
//         image: "/greish.png",
//         alt: "Mini LCW Chair in grayish color",
//     },
// ];

// async function Category() {
//     interface Product {
//         _id: string;
//         name: string;
//         description: string;
//         price: number;
//         image_url: string;
//       }
    
//       let products: Product[] = [];
    
//       // Fetch data from Sanity
//       try {
//         products = await client.fetch(`
//           *[_type == "product"][0..5]{
//             _id,
//             name,
//             description,
//             price,
//             "image_url": image.asset->url
//           }
//         `);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
    
//     return (
//         <section className="text-gray-600 body-font">
//             <div className="container px-5 py-16 mx-auto">
//                 {/* Section Header */}
//                 <div className="flex flex-col text-center w-full mb-10">
//                     <h1 className="text-3xl sm:text-4xl font-bold font-sans title-font text-gray-900">
//                         Top Categories
//                     </h1>
//                 </div>

//                 {/* Responsive Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {categories.map((category) => (
//                         <div
//                             key={category.id}
//                             className="p-4 flex flex-col items-center text-center"
//                         >
//                             <div className="w-full h-auto rounded-full bg-gray-100 overflow-hidden">
//                                 <Image
//                                     alt={category.alt}
//                                     className="object-cover"
//                                     src={category.image}
//                                     width={350}
//                                     height={350}
//                                 />
//                             </div>
//                             <div className="w-full mt-4">
//                                 <h2 className="title-font font-medium text-lg text-[#151875]">
//                                     {category.name}
//                                 </h2>
//                                 <span className="title-font font-medium text-lg text-[#151875]">
//                                     {category.price}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Category;






"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

// Define a simple Product interface
interface Product {
  _id: string;
  name: string;
  price: number;
  image_url: string;
}

const Category = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch data from Sanity
  useEffect(() => {
    client
      .fetch(`
        *[_type == "product"][0..7]{
          _id,
          name,
          price,
          "image_url": image.asset->url
        }
      `)
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []); // Fetch only on mount

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Top Categories
          </h1>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="p-4 flex flex-col items-center text-center">
              <div className="w-full h-auto rounded-lg bg-gray-100 overflow-hidden">
                <Image
                  alt={product.name}
                  src={product.image_url}
                  width={350}
                  height={350}
                  className="object-cover"
                />
              </div>
              <div className="w-full mt-4">
                <h2 className="title-font font-medium text-lg text-[#151875]">
                  {product.name}
                </h2>
                <span className="title-font font-medium text-lg text-[#151875]">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
