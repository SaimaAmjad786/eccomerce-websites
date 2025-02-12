
import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

async function Trending() {
  interface TrendProduct {
    cartHeading: string;
    cartImg: string;
    cartPrice: number;
  }

  let res: TrendProduct[] = [];
  try {
    res = await client.fetch(`
      *[_type == 'trendProduct'][0].sections[0].cart[]{
        'cartHeading': cartHeading,
        'cartImg': cartImg.asset->url,
        'cartPrice': cartPrice
      }
    `);
  } catch (error) {
    console.error("Error fetching trending products:", error);
  }

  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Trending Products
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {res.map((item, index) => (
            <div
              key={item.cartHeading || index}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-100"
            >
              {/* Product Image */}
              <Image
                src={item.cartImg || '/placeholder.png'}
                alt={item.cartHeading || 'Product Image'}
                className="rounded-lg w-full h-60 object-cover mb-4"
                width={500}
                height={100}
              />
              {/* Product Name */}
              <h2 className="text-black font-medium text-lg mb-2 ml-12">
                {item.cartHeading || 'Unnamed Product'}
              </h2>
              {/* Pricing */}
              <div className="text-[#151875] text-sm flex justify-center gap-2">
                <span>${item.cartPrice?.toFixed(2) || 'N/A'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trending;
