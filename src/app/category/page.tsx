'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Product } from '../../../types/products';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { allProducts } from '@/sanity/lib/querries';
import { addToCart } from '../action/action';
import Swal from 'sweetalert2';

function Category() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct: Product[] = await client.fetch(allProducts);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };
    fetchProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-right',
      icon: 'success',
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Top Categories</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {product.slice(10,16).map((product) => (
            <div
              key={product._id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* Product Image & Name */}
                <Link href={`/category/${product.slug.current}`} className="block w-full ">
                  {product.image ? (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      className="rounded-xl w-full  h-80 object-cover  mb-4"
                      width={300}
                      height={200}
                    />
                  ) : (
                    <Image
                      src="/placeholder.jpg" // Fallback image
                      alt="Placeholder"
                      className="rounded-full w-full  h-80 object-cover bg-gray-100 mb-4"
                      width={300}
                      height={200}
                    />
                  )}
                  <h2 className="text-[#FB2E86] font-medium text-lg mb-2">{product.name}</h2>
               </Link>

                {/* Price & Discount */}
                <div className="text-[#151875] text-sm flex justify-center gap-2">
                  <span>${product.price}</span>
                  {product.discountPercentage && (
                    <span className="line-through text-[#FB2E86]">
                      ${((product.price * (1 - product.discountPercentage / 100))).toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  className="mt-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg 
                  shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                  onClick={(e) => handleAddToCart(e, product)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;





