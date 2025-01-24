
import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

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

export default async function OffersSection() {
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
            {products.length > 0 ? (
              products.map((product) => (
                <li key={product._id} className="flex items-center space-x-4">
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{product.name}</p>
                    <p className="text-pink-500">${product.price}</p>
                  </div>
                </li>
              ))
            ) : (
              <>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
