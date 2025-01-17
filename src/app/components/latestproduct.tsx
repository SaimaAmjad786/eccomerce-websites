
// import React from "react";
// import Image from "next/image";
// const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
// const products = [
//   {
//     id: 1,
//     name: "Comfort Handy Craft",
//     price: "$42.00",
//     oldPrice: "$65.00",
//     img: "/chair3.png",
//   },
//   {
//     id: 2,
//     name: "Stylish Cantilever Chair",
//     price: "$58.00",
//     oldPrice: "$75.00",
//     img: "/chair2.png",
//   },
//   {
//     id: 3,
//     name: "Elegant Wood Frame Chair",
//     price: "$62.00",
//     oldPrice: "$90.00",
//     img: "/chair1.png",
//   },
//   {
//     id: 4,
//     name: "Classic Dining Chair",
//     price: "$50.00",
//     oldPrice: "$80.00",
//     img: "/chair4.png",
//   },
//   {
//     id: 5,
//     name: "Premium Lounge Chair",
//     price: "$75.00",
//     oldPrice: "$120.00",
//     img: "/chair5.png",
//   },
//   {
//     id: 6,
//     name: "Modern Office Chair",
//     price: "$55.00",
//     oldPrice: "$85.00",
//     img: "/chair6.png",
//   },
// ];

// function LatestProduct() {
//   return (
//     <section className="text-gray-600 body-font py-12">
      

//       <div className="container mx-auto">
//         {/* Section Header */}
//         <div className="flex flex-col text-center w-full mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Latest Products</h1>
//         </div>

//         {/* Top Row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//           {products.slice(0, 3).map((product) => (
//             <div
//               key={product.id}
//               className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="flex flex-col items-center text-center">
//                 <Image
//                   src={product.img}
//                   alt={product.name}
//                   className="rounded-lg w-full h-80 object-cover bg-gray-100 mb-4"
//                   width={500}
//                   height={100}
//                 />
//                 <h2 className="text-[#FB2E86] font-medium text-lg mb-2">{product.name}</h2>
//                 <div className="text-[#151875] text-sm flex justify-center gap-2">
//                   <span>{product.price}</span>
//                   <span className="line-through text-[#FB2E86]">{product.oldPrice}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.slice(3).map((product) => (
//             <div
//               key={product.id}
//               className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="flex flex-col items-center text-center">
//                 <img
//                   src={product.img}
//                   alt={product.name}
//                   className="rounded-lg w-full h-80 object-cover bg-gray-100 mb-4"
//                 />
//                 <h2 className="text-[#FB2E86] font-medium text-lg mb-2">{product.name}</h2>
//                 <div className="text-[#151875] text-sm flex justify-center gap-2">
//                   <span>{product.price}</span>
//                   <span className="line-through text-[#FB2E86]">{product.oldPrice}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default LatestProduct;






// import React from "react";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";

// async function LatestProduct() {
//   interface Product {
//     id:number,
//     name:string,
//     description:string,
//     price:number,
//     image:image_url,
//   }
//   let res: Product[] = [];
//   try {
//     res = await client.fetch(`
//       *[_type=="product"][0..4]{
//           _id,
//             name,
//             description,
//             price,
//             "image_url":image.asset->url,
//         }
//     `);
//   } catch (error) {
//     console.error("Failed to fetch latest products:", error);
//   }

//   return (
//     <section className="text-gray-600 body-font py-12">
//       <div className="container mx-auto">
//         <div className="flex flex-col text-center w-full mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Latest Products</h1>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//           {res.slice(0, 3).map((item, index) => (
//             <div
//               key={item.cardHeading || index}
//               className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="flex flex-col items-center text-center">
//                 <Image
//                   src={item.cardImg}
//                   alt={item.cardHeading}
//                   className="rounded-lg w-full h-80 object-cover bg-gray-100 mb-4"
//                   width={500}
//                   height={100}
//                 />
//                 <h2 className="text-[#FB2E86] font-medium text-lg mb-2">
//                   {item.cardHeading}
//                 </h2>
//                 <div className="text-[#151875] text-sm flex justify-center gap-2">
//                   <span>${item.cardPrice?.toFixed(2) || "N/A"}</span>
//                   {item.cardoldPrice && (
//                     <span className="line-through text-[#FB2E86]">
//                       ${item.cardoldPrice.toFixed(2)}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {res.slice(3).map((item, index) => (
//             <div
//               key={item.cardHeading || index}
//               className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="flex flex-col items-center text-center">
//                 <Image
//                   src={item.cardImg}
//                   alt={item.cardHeading}
//                   className="rounded-lg w-full h-80 object-cover bg-gray-100 mb-4"
//                   width={500}
//                   height={100}
//                 />
//                 <h2 className="text-[#FB2E86] font-medium text-lg mb-2">
//                   {item.cardHeading}
//                 </h2>
//                 <div className="text-[#151875] text-sm flex justify-center gap-2">
//                   <span>${item.cardPrice?.toFixed(2) || "N/A"}</span>
//                   {item.cardoldPrice && (
//                     <span className="line-through text-[#FB2E86]">
//                       ${item.cardoldPrice.toFixed(2)}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default LatestProduct;



import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

async function LatestProduct() {
  // Define the Product interface
  interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
  }

  let products: Product[] = [];

  // Fetch data from Sanity
  try {
    products = await client.fetch(`
      *[_type == "product"][0..5]{
        _id,
        name,
        description,
        price,
        "image_url": image.asset->url
      }
    `);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  // Return fallback UI if no products are available
  if (products.length === 0) {
    return (
      <section className="text-gray-600 body-font py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Latest Products</h1>
          <p className="text-gray-600 text-lg">No products available. Please try again later.</p>
        </div>
      </section>
    );
  }

  // Render the products
  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Latest Products</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  className="rounded-lg w-full h-80 object-cover bg-gray-100 mb-4"
                  width={200}
                  height={200}
                />
                <h2 className="text-[#FB2E86] font-medium text-lg mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="text-[#151875] text-sm flex justify-center gap-2">
                  <span>${product.price}</span>
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
