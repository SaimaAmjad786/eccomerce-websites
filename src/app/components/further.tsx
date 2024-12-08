
// import Image from "next/image";

// const productDataLeft = [
//   {
//     id: 1,
//     title: "23% off in all products",
//     buttonText: "Shop Now",
//     image: "/clock.png",
//     width: 150, // Smaller width
//     height: 150, // Smaller height
//   },
//   {
//     id: 2,
//     title: "23% off in all products",
//     buttonText: "View Collection",
//     image: "/desk.png",
//     width: 150, // Smaller width
//     height: 150, // Smaller height
//   },
// ];

// const productDataRight = [
//   {
//     id: 3,
//     title: "Executive Seat Chair",
//     price: "$3000",
//     image: "/roundchair.png",
//     width: 150, // Smaller width
//     height: 200, // Smaller height
//   },
//   {
//     id: 4,
//     title: "Executive Seat Chair",
//     price: "$1500",
//     image: "/whitechair.png",
//     width: 150, // Smaller width
//     height: 200, // Smaller height
//   },
//   {
//     id: 5,
//     title: "Executive Seat Chair",
//     price: "$1000",
//     image: "/drag.png",
//     width: 150, // Smaller width
//     height: 200, // Smaller height
//   },
// ];

// export default function Further() {
//   return (
//     <div className="py-8 ">
//       <div className=" container mx-auto px-4">
//         {/* Responsive Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left Side: 2 Images */}
//           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
//             {productDataLeft.map((product) => (
//               <div
//                 key={product.id}
//                 //  className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
//               >
//                 <h2 className="text-xl font-bold mb-2">{product.title}</h2>
//                 {product.buttonText && (
//                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 w-full">
//                     {product.buttonText}
//                   </button>
//                 )}
//                 <div className="flex justify-center mb-4">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     width={product.width}
//                     height={product.height}
//                     className="rounded-lg object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Side: 3 Images */}
//           <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
//             {productDataRight.map((product) => (
//               <div
//                 key={product.id}
//                 className="p-4 bg-red-500 rounded-lg w-[250px] h-[250px] shadow hover:shadow-lg transition-shadow"
//               >
//                 <h2 className="text-xl font-bold mb-2">{product.title}</h2>
//                 {product.price && (
//                   <p className="text-gray-600 mb-2">Price: {product.price}</p>
//                 )}
//                 <div className="flex justify-center mb-4">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     width={product.width}
//                     height={product.height}
//                     className="rounded-lg object-cover"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }















