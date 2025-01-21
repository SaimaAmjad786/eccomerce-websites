import React from 'react';
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

function Discountitem() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 flex-col-reverse md:flex-row items-center">

          {/* Content Section */}
          <div className="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start items-center text-center mb-16 md:mb-0">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-5 font-bold text-gray-900">
              20% Discount On All Products
              <br className="hidden lg:inline-block" />
              <p className="text-base mt-3 font-bold text-pink-600">Eams Sofa Compact</p>
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
            </p>

            {/* Feature List */}
            <div className="flex flex-col items-center">
              <p className="mt-5 mb-4 leading-relaxed flex items-center">
                <FaCheck className="text-gray-600 mr-2" />
                Material exposed like metals
              </p>
              <p className="mt-5 mb-4 leading-relaxed flex items-center">
                <FaCheck className="text-gray-600 mr-2" />
                Reinforced with strong materials
              </p>
            </div>

            {/* Shop Button */}
            <div className="flex justify-center mt-6">
              <button className="inline-flex text-white bg-[#FB2E86] border-0 py-2 px-6 focus:outline-none hover:bg-[#FB2E91] rounded text-lg">
                Shop Now
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 flex justify-center items-center relative">
            <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full shadow-xl mt-5 mx-auto">
              <Image
                src={"/circlesofa.png"}
                alt="Furniture Chair"
                width={800}
                height={500}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Discountitem;





// import React from 'react';
// import Image from "next/image";
// import { FaCheck } from "react-icons/fa";
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';

// async function Discountitem() {
//   const data = await client.fetch(`* [_type == "discountitem"]{
//   discountheading,
//     discountparagraph1,
//     discountparagraph2,
//     discountparagraph3,
//     discountbuttonText,
//     discountitemImage,
// }[0]`)
//   console.log(data)

//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//         <div className="container mx-auto flex px-5 py-24 flex-col-reverse md:flex-row items-center">

//           {/* Content Section */}
//           <div className="lg:flex-grow md:w-1/2 md:pr-16 flex flex-col md:items-start items-center text-center mb-16 md:mb-0">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 mt-5 font-bold text-gray-900">
//               {data.discountheading}
//               <br className="hidden lg:inline-block" />
//               <p className="text-base mt-3 font-bold text-pink-600">Eams Sofa Compact</p>
//             </h1>
//             <p className="mb-8 leading-relaxed">
//               {data.discountparagraph1}
//             </p>

//             {/* Feature List */}
//             <div className="flex flex-col items-center">
//               <p className="mt-5 mb-4 leading-relaxed flex items-center">
//                 <FaCheck className="text-gray-600 mr-2" />
//                 {data.discountparagraph2}
//               </p>
//               <p className="mt-5 mb-4 leading-relaxed flex items-center">
//                 <FaCheck className="text-gray-600 mr-2" />
//                 {data.discountparagraph3}
//               </p>
//             </div>

//             {/* Shop Button */}
//             <div className="flex justify-center mt-6">
//               <button className="inline-flex text-white bg-[#FB2E86] border-0 py-2 px-6 focus:outline-none hover:bg-[#FB2E91] rounded text-lg">
//                 {data.discountbuttonText}
//               </button>
//             </div>
//           </div>

//           {/* Image Section */}
//           <div className="md:w-1/3 flex justify-center items-center relative">
//             <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full shadow-xl mt-5 mx-auto">
//               <img
//                 src={urlFor(data.discountitemImage).url()}
//                 alt="Furniture Chair"
//                 width={800}
//                 height={500}
//                 className="object-contain w-full h-auto"
//               />
//             </div>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// }

// export default Discountitem;




