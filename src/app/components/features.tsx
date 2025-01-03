
// import React from "react";
// import Image from "next/image";

// function Features() {
//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           {/* Section Header */}
//           <div className="flex flex-col text-center w-full mb-10">
//             <h1 className="text-3xl font-bold font-sans title-font text-gray-900">
//               Features Products
//             </h1>
//           </div>

//           {/* Responsive Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
//             {/* Box 1 */}
//             <div className="p-4 mb-20 bg-gray-100">
//               <div className="h-auto flex flex-col items-center text-center">
//                 <Image
//                   alt="Cantilever Chair"
//                   className="rounded-lg w-full h-64 object-cover bg-gray-100"
//                   src="/chair3.png"
//                   width={300}
//                   height={100}
//                 />
//                 <div className="w-full mt-4 ">
//                   <h2 className="title-font font-medium text-lg text-[#FB2E86]">
//                     Cantilever Chair
//                   </h2>
//                   <h3 className="text-[#151875] mb-3 ">Code - Y523201</h3>
//                   <span className="title-font font-medium text-lg text-[#151875]">
//                     $42.00
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Box 1 */}
//             <div className="p-4 mb-20 bg-gray-100 ">
//               <div className="h-auto flex flex-col items-center text-center ">
//                 <Image
//                   alt="Cantilever Chair"
//                   className="rounded-lg w-full h-64 object-cover bg-gray-100"
//                   src="/chair2.png"
//                   width={300}
//                   height={100}
//                 />
//                 <div className="w-full mt-4 hover:bg-[#2F1AC4]  ">
//                   <h2 className="title-font font-medium text-lg text-[#151875]  hover:text-white hover:font-bold">
//                     Cantilever Chair
//                   </h2>
//                   <h3 className="text-[#151875]  mb-3 hover:text-white hover:font-bold">Code - Y523201</h3>
//                   <span className="title-font font-medium text-lg text-[#151875] hover:text-white  hover:font-bold ">
//                     $42.00
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Box 3 */}
//             <div className="p-4 bg-gray-100 mb-20">
//               <div className="h-auto flex flex-col items-center text-center">
//                 <Image
//                   alt="Cantilever Chair"
//                   className="rounded-lg w-full h-64 object-cover bg-gray-100"
//                   src="/chair1.png"
//                   width={300}
//                   height={100}
//                 />
//                 <div className="w-full mt-4">
//                   <h2 className="title-font font-medium text-lg text-[#FB2E86]">
//                     Cantilever Chair
//                   </h2>
//                   <h3 className="text-[#151875] mb-3">Code - Y523203</h3>
//                   <span className="title-font font-medium text-lg text-[#151875]">
//                     $42.00
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Box 4 */}
//             <div className="p-4 mb-20 bg-gray-100">
//               <div className="h-auto flex flex-col items-center text-center">
//                 <Image
//                   alt="Cantilever Chair"
//                   className="rounded-lg w-full h-64 object-cover bg-gray-100"
//                   src="/chair.png"
//                   width={300}
//                   height={100}
//                 />
//                 <div className="w-full mt-4">
//                   <h2 className="title-font font-medium text-lg text-[#FB2E86]">
//                     Cantilever Chair
//                   </h2>
//                   <h3 className="text-[#151875] mb-3">Code - Y523204</h3>
//                   <span className="title-font font-medium text-lg text-[#151875]">
//                     $42.00
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Features;






import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

async function Features() {
  const data = await client.fetch(`* [_type == "featuredProduct"]{
  featureProductImage1,
    headingText1,
    price1,
     featureProductImage2,
    headingText2,
    price2,
     featureProductImage3,
    headingText3,
    price3,
     featureProductImage4,
    headingText4,
    price4, 
}[0]`)
  console.log(data);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Section Header */}
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-3xl font-bold font-sans title-font text-gray-900">
              Features Products
            </h1>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {/* Box 1 */}
            <div className="p-4 mb-20 bg-gray-100">
              <div className="h-auto flex flex-col items-center text-center">
                <img src={urlFor(data.featureProductImage1).url()}
                  alt="Cantilever Chair"
                  className="rounded-lg w-full h-64 object-cover bg-gray-100"
                  width={300}
                  height={100}
                />
                <div className="w-full mt-4 ">
                  <h2 className="title-font font-medium text-lg text-[#FB2E86]">
                    {data.headingText1}
                  </h2>
                  <h3 className="text-[#151875] mb-3 ">Code - Y523201</h3>
                  <span className="title-font font-medium text-lg text-[#151875]">
                    ${data.price1}.00
                  </span>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="p-4 mb-20 bg-gray-100 ">
              <div className="h-auto flex flex-col items-center text-center ">
                <img src={urlFor(data.featureProductImage2).url()}
                  alt="Cantilever Chair"
                  className="rounded-lg w-full h-64 object-cover bg-gray-100"
                  width={300}
                  height={100}
                />
                <div className="w-full mt-4 hover:bg-[#2F1AC4]  ">
                  <h2 className="title-font font-medium text-lg text-[#151875]  hover:text-white hover:font-bold">
                    {data.headingText2}
                  </h2>
                  <h3 className="text-[#151875]  mb-3 hover:text-white hover:font-bold">Code - Y523201</h3>
                  <span className="title-font font-medium text-lg text-[#151875] hover:text-white  hover:font-bold ">
                    ${data.price2}.00
                  </span>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="p-4 bg-gray-100 mb-20">
              <div className="h-auto flex flex-col items-center text-center">
                <img src={urlFor(data.featureProductImage3).url()}
                  alt="Cantilever Chair"
                  className="rounded-lg w-full h-64 object-cover bg-gray-100"
                  width={300}
                  height={100}
                />
                <div className="w-full mt-4">
                  <h2 className="title-font font-medium text-lg text-[#FB2E86]">
                    {data.headingText3}
                  </h2>
                  <h3 className="text-[#151875] mb-3">Code - Y523203</h3>
                  <span className="title-font font-medium text-lg text-[#151875]">
                    ${data.price3}.00
                  </span>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="p-4 mb-20 bg-gray-100">
              <div className="h-auto flex flex-col items-center text-center">
                <img src={urlFor(data.featureProductImage4).url()}
                  alt="Cantilever Chair"
                  className="rounded-lg w-full h-64 object-cover bg-gray-100"
                  width={300}
                  height={100}
                />
                <div className="w-full mt-4">
                  <h2 className="title-font font-medium text-lg text-[#FB2E86]">
                    {data.headingText4}
                  </h2>
                  <h3 className="text-[#151875] mb-3">Code - Y523204</h3>
                  <span className="title-font font-medium text-lg text-[#151875]">
                    ${data.price4}.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;


