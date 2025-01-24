
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from '../../../types/products';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { allProducts } from '@/sanity/lib/querries';

function LatestProduct() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct: Product[] = await client.fetch(allProducts);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Latest Products</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {product.slice(0, 9).map((product) => (
            <div
              key={product._id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <Link href={`/latestproduct/${product.slug.current}`}>
                  {product.image ? (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      className="rounded-lg w-full h-80 object-cover bg-gray-100 mb-4"
                      width={300}
                      height={100}
                    />
                  ) : (
                    <Image
                      src="/placeholder.jpg" // Fallback image
                      alt="Placeholder"
                      className="rounded-lg w-full h-80 object-cover bg-gray-100 mb-4"
                      width={300}
                      height={100}
                    />
                  )}
                </Link>
                <h2 className="text-[#FB2E86] font-medium text-lg mb-2">
                  {product.name}
                </h2>
                <div className="text-[#151875] text-sm flex justify-center gap-2">
                  <span>${product.price}</span>
                  {product.discountPercentage && (
                    <span className="line-through text-[#FB2E86]">
                      ${(
                        product.price *
                        (1 - product.discountPercentage / 100)
                      ).toFixed(2)}
                    </span>
                  )}
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





