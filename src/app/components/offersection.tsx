import React from "react";
import Image from "next/image";

const offers = [
  {
    title: "23% off in all products",
    linkText: "Shop Now",
    image: "/clock.png", // Replace with your actual image path
  },
  {
    title: "23% off in all products",
    linkText: "View Collection",
    image: "/desk.png", // Replace with your actual image path
  },
];

const featuredProducts = [
  { name: "Executive Seat Chair", price: "$30.00", image: "/cheer.png" },
  { name: "Executive Seat Chair", price: "$30.00", image: "/whitechair.png" },
  { name: "Executive Seat Chair", price: "$30.00", image: "/drag.png" },
];

export default function OffersSection() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Offer */}
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg p-6 text-center flex flex-col justify-center items-center"
          >
            <h3 className="text-xl font-bold text-blue-900 mb-2">{offer.title}</h3>
            <a href="#" className="text-pink-500 font-semibold hover:underline">
              {offer.linkText}
            </a>
            <div className="mt-6">
              <Image
                src={offer.image}
                alt={offer.title}
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        ))}

        {/* Featured Products */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Featured Products</h3>
          <ul className="space-y-4">
            {featuredProducts.map((product, index) => (
              <li key={index} className="flex items-center space-x-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{product.name}</p>
                  <p className="text-pink-500">{product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}