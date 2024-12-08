
import React from "react";
import Image from "next/image";
const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"];
const products = [
  {
    id: 1,
    name: "Comfort Handy Craft",
    price: "$42.00",
    oldPrice: "$65.00",
    img: "/chair3.png",
  },
  {
    id: 2,
    name: "Stylish Cantilever Chair",
    price: "$58.00",
    oldPrice: "$75.00",
    img: "/chair2.png",
  },
  {
    id: 3,
    name: "Elegant Wood Frame Chair",
    price: "$62.00",
    oldPrice: "$90.00",
    img: "/chair1.png",
  },
  {
    id: 4,
    name: "Classic Dining Chair",
    price: "$50.00",
    oldPrice: "$80.00",
    img: "/chair4.png",
  },
  {
    id: 5,
    name: "Premium Lounge Chair",
    price: "$75.00",
    oldPrice: "$120.00",
    img: "/chair5.png",
  },
  {
    id: 6,
    name: "Modern Office Chair",
    price: "$55.00",
    oldPrice: "$85.00",
    img: "/chair6.png",
  },
];

function LatestProduct() {
  return (
    <section className="text-gray-600 body-font py-12">
      

      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Latest Products</h1>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={product.img}
                  alt={product.name}
                  className="rounded-lg w-full h-80 object-cover bg-gray-100 mb-4"
                  width={500}
                  height={100}
                />
                <h2 className="text-[#FB2E86] font-medium text-lg mb-2">{product.name}</h2>
                <div className="text-[#151875] text-sm flex justify-center gap-2">
                  <span>{product.price}</span>
                  <span className="line-through text-[#FB2E86]">{product.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(3).map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="rounded-lg w-full h-80 object-cover bg-gray-100 mb-4"
                />
                <h2 className="text-[#FB2E86] font-medium text-lg mb-2">{product.name}</h2>
                <div className="text-[#151875] text-sm flex justify-center gap-2">
                  <span>{product.price}</span>
                  <span className="line-through text-[#FB2E86]">{product.oldPrice}</span>
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




