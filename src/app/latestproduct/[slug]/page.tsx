

"use client";
import Header from "@/app/components/header";
import TopBar from "@/app/components/navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Toastity from "@/app/components/addtocarttoastify";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: any;
  size?: string[];
  color?: string[];
  discount?: number;
}

interface SlugPageProps {
  params: { slug: string };
}

// Fetch product data from Sanity
async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`
      *[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        description,
        price,
        image,
        size,
        color,
        discount
      }
    `,
    { slug }
  );
}

const SlugPage = async ({ params }: SlugPageProps) => {
  const { slug } = params;
  const product = await getProduct(slug);

  return (
    <>
      <TopBar />
      <Header />
      <ProductDetails product={product} />
    </>
  );
};

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
  const [cartItem, setCartItem] = useState({
    id: product._id,
    title: product.name,
    image: product.image,
    slug: product._id,
    price: product.price,
    description: product.description,
    qty: 1,
    discount: product.discount || 0,
    size: product.size?.[0] || "", // Default to first size
    color: product.color?.[0] || "", // Default to first color
  });

  const discountedPrice =
    cartItem.discount > 0
      ? (cartItem.price - (cartItem.price * cartItem.discount) / 100) * cartItem.qty
      : cartItem.price * cartItem.qty;

  return (
    <div className="mt-24 flex flex-col lg:flex-row justify-around">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Product Image */}
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={500}
                height={500}
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              />
            )}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-md mb-5 title-font text-black font-bold tracking-widest">
                Latest Products
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <p className="leading-relaxed">{product.description}</p>

              {/* Color Selection */}
              {product.color && product.color.length > 0 && (
                <div className="mt-6">
                  <p className="text-gray-400">Select Color</p>
                  <div className="flex space-x-3">
                    {product.color.map((color, i) => (
                      <button
                        key={i}
                        onClick={() => setCartItem({ ...cartItem, color })}
                        className={`w-10 h-10 rounded-full border-2 ${
                          cartItem.color === color ? "border-black" : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.size && product.size.length > 0 && (
                <div className="mt-6">
                  <p className="text-gray-400">Select Size</p>
                  <div className="flex space-x-3">
                    {product.size.map((size, i) => (
                      <button
                        key={i}
                        onClick={() => setCartItem({ ...cartItem, size })}
                        className={`w-20 h-10 rounded-lg ${
                          cartItem.size === size ? "bg-gray-800 text-white" : "bg-gray-500 text-white"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Price and Quantity */}
              <div className="flex space-x-3 mt-6">
                <p className="font-bold text-lg">${discountedPrice.toFixed(2)}</p>
                {cartItem.discount > 0 && (
                  <p className="font-bold text-gray-400 line-through text-lg">
                    ${(cartItem.price * cartItem.qty).toFixed(2)}
                  </p>
                )}
              </div>

              {/* Quantity Increment/Decrement */}
              <div className="flex justify-start items-center pt-10 mb-8 space-x-4">
                <button
                  onClick={() =>
                    setCartItem({ ...cartItem, qty: Math.max(cartItem.qty - 1, 1) })
                  }
                  className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded"
                >
                  <FaMinus />
                </button>
                <span className="text-lg">{cartItem.qty}</span>
                <button
                  onClick={() => setCartItem({ ...cartItem, qty: cartItem.qty + 1 })}
                  className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Add to Cart */}
              <Toastity cartItem={cartItem} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlugPage;






