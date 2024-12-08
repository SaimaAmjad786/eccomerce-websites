
import React from "react";
import TopBar from "../components/navbar";
import Header from "../components/header";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Cantilever chair",
    price: "$26.00",
    oldPrice: "$42.00",
    img: "/ground.png",
  },
  {
    id: 2,
    name: "Cantilever chair",
    price: "$26.00",
    oldPrice: "$42.00",
    img: "/ponky.png",
  },
  {
    id: 3,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$90.00",
    img: "/grade.png",
  },
  {
    id: 4,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$80.00",
    img: "/school.png",
  },
  {
    id: 5,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$80.00",
    img: "/hand.png",
  },
  {
    id: 6,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$80.00",
    img: "/wall.png",
  },
  {
    id: 7,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$80.00",
    img: "/head.png",
  },
  {
    id: 8,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$80.00",
    img: "/ponky.png",
  },
  {
    id: 9,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$80.00",
    img: "/band.png",
  },
  {
    id: 10,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$80.00",
    img: "/camera.png",
  },
  {
    id: 11,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$80.00",
    img: "/purple.png",
  },
  {
    id: 12,
    name: "Cantilever chair",
    price: "$42.00",
    oldPrice: "$80.00",
    img: "/school.png",
  },

];

function Product() {
  return (
    <>
    <TopBar/>
        <Header/>
        {/* Header */}
        <header className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">ShopLeftSideBar</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Shop Left Slider</span>
            </p>
          </div>
        </header>
    
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
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-100"
            >
              {/* Product Image */}
              <Image
                src={product.img}
                alt={product.name}
                className="rounded-lg w-full h-60 object-cover mb-4"
                width={500}
                height={300}
              />
              {/* Product Name */}
              <h2 className="text-black font-medium text-lg mb-2 ml-12">
                {product.name}
              </h2>
              {/* Pricing */}
              <div className="text-[#151875] text-sm flex justify-center gap-2 ">
                <span>{product.price}</span>
                <span className="line-through text-black">
                  {product.oldPrice}
                </span>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Product;

