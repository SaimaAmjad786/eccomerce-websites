import React from 'react'
import Image from "next/image"
import Link from "next/link"

function Blog() {
    return (
        <div>
           <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1  rounded overflow-hidden">
        <div className="w-24 h-full" />
      </div>
      {/* Section Header */}
      <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="text-3xl font-bold font-sans title-font text-gray-900 ">
                            Blog
                        </h1>
                    </div>
    </div>

    {/* Image1 */}
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/home1.jpg"
            width={370}
            height={255}
          />
        </div>
        <h2 className="text-xl font-bold title-font text-gray-900 mt-5">
        Top esssential Trends in 2021
        </h2>
        <p className="text-base leading-relaxed mt-2">
        More off this less hello samlande lied much
        over tightly circa horse taped mightly
        </p>
        <Link href={"/"} className="text-black inline-flex items-center mt-3 ">
          Read More
           <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg> 
        </Link>
      </div>


      {/* Image2 */}
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/home2.jpg"
            width={370}
            height={255}
          />
        </div>
        <h2 className="text-xl font-bold title-font text-pink-500 mt-5">
        Top essential trends in 2021
        </h2>
        <p className="text-base leading-relaxed mt-2">
        More off this less hello samlande lied much
        over tightly circa horse taped mightly
        </p>
        
        <Link href={"/"} className="text-pink-500 inline-flex items-center mt-3 ">
          Read More
           <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg> 
        </Link>

      </div>

      {/* Image3 */}
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/home3.jpg"
            width={370}
            height={255}
          />
        </div>
        <h2 className="text-xl font-bold title-font text-gray-900 mt-5">
        Top esssential Trends in 2021
        </h2>
        <p className="text-base leading-relaxed mt-2">
        More off this less hello samlande lied much
        over tightly circa horse taped mightly
        </p>
        <Link href={"/"} className="text-black inline-flex items-center mt-3 ">
          Read More
           <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg> 
        </Link>
      </div>


    </div>
  </div>
</section>

        </div>
    )
}

export default Blog