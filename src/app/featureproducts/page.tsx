
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Fixed import for Link from Next.js

function Featureproducts() {
  // Sample product data
  const featureproducts = [
    {
      id: 1,
      name: "Cantilever Chair",
      code: "Y523201",
      price: "$42.00",
      image: "/chair3.png",
      slug: "cantilever-chair-1",
    },
    {
      id: 2,
      name: "Cantilever Chair",
      code: "Y523202",
      price: "$42.00",
      image: "/chair2.png",
      slug: "cantilever-chair-2",
    },
    {
      id: 3,
      name: "Cantilever Chair",
      code: "Y523203",
      price: "$42.00",
      image: "/chair1.png",
      slug: "cantilever-chair-3",
    },
    {
      id: 4,
      name: "Cantilever Chair",
      code: "Y523204",
      price: "$42.00",
      image: "/chair.png",
      slug: "cantilever-chair-4",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-3xl font-bold font-sans title-font text-gray-900">
            Featured Products
          </h1>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureproducts.map((item) => (
            <div key={item.id} className="p-4 bg-gray-100">
              <div className="h-auto flex flex-col items-center text-center">
                {/* Product Link */}
                <Link href={`/featureproducts/${item.slug}`}>
                  <Image
                    alt={item.name}
                    className="rounded-lg w-full h-64 object-cover bg-gray-100"
                    src={item.image}
                    width={500}
                    height={500}
                  />
                </Link>
                <div className="w-full mt-4">
                  <h2 className="title-font font-medium text-lg text-[#FB2E86]">
                    {item.name}
                  </h2>
                  <h3 className="text-[#151875] mb-3">{item.code}</h3>
                  <span className="title-font font-medium text-lg text-[#151875]">
                    {item.price}
                  </span>
                  <Link href={`/featureproducts/${item.slug}`}>
                  <button className="flex ml-auto mr-16 mt-5 text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Add to Cart
                </button>
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featureproducts;







