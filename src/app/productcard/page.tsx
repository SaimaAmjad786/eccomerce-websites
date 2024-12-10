
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import TopBar from "../components/navbar";
import Header from "../components/header";

const ProductCard = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderTabContent = () => {
    switch (activeTab) {
      case "additionalInfo":
        return (
          
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">More Details</h2>
            <ul className="list-disc ml-6 mt-2">
              <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
              <li>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</li>
            </ul>
          </div>
        );
      case "reviews":
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">Customer Reviews</h2>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      case "video":
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">Product Video</h2>
            <p className="text-gray-600 mt-2">Coming soon...</p>
          </div>
        );
      default:
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800">Description</h2>
            <p className="text-gray-600 mt-2">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar/>
      <Header/>
      <div className="container mx-auto px-4 py-6">
        <header className="bg-gray-100 py-6 mb-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-pink-500">Product Details</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Product Details</span>
            </p>
          </div>
        </header>

        <div className="flex flex-wrap justify-center items-center px-4 sm:px-8">
          <div className="flex flex-col w-full md:w-1/3 space-y-4 mb-6 md:mb-0">
            <Image src="/us.jpg" alt="Image 1" width={150} height={150} className="rounded-md mx-auto" />
            <Image src="/lam.jpg" alt="Image 2" width={150} height={150} className="rounded-md mx-auto" />
            <Image src="/nail.jpg" alt="Image 3" width={150} height={150} className="rounded-md mx-auto" />

          </div>

          <div className="flex justify-center items-center w-full md:w-1/3 p-4">
            <Image src="/purse.jpg" alt="Main Image" width={400} height={200} className="rounded-md mx-auto" />
          </div>

          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Playwood Arm Chair</h2>
            <div className="flex items-center text-yellow-500 mt-2">
              <span className="text-md">★★★★★</span>
              <span className="text-gray-500 text-xs ml-1">(22)</span>
            </div>
            <p className="text-gray-600 mt-2">
              A stylish and comfortable armchair for modern interiors.
            </p>
            <p className="font-bold text-gray-800 mt-2">
              $32.00 <span className="text-pink-600 line-through">$40.00</span>
            </p>
            <button className="flex items-center text-white bg-pink-500 hover:bg-pink-600 py-2 px-4 rounded mt-4">
              <span className="text-sm">Add to Cart</span>
              <FaHeart size={17} className="ml-3" />
            </button>

            <div className="mt-6">
              <h2 className="text-lg font-bold text-gray-800">Share</h2>
              <span className="inline-flex mt-2">
                <Link href="#" className="text-black">
                  <FaGithub className="text-3xl mx-2" />
                </Link>
                <Link href="#" className="text-black">
                  <IoLogoVercel className="text-3xl mx-2" />
                </Link>
                <Link href="#" className="text-black">
                  <FaLinkedin className="text-3xl mx-2" />
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <ul className="flex space-x-4">
            {["description", "additionalInfo", "reviews", "video"].map((tab) => (
              <li key={tab}>
                <button
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === tab ? "text-black font-bold border-b-2 border-pink-600" : "text-black font-bold"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

const Trending = () => {
  const products = [
    { id: 1, name: "Men's Fashion Wear", price: "$43.00", img: "/boy1.jpg" },
    { id: 2, name: "Women’s Fashion", price: "$67.00", img: "/girl1.jpg" },
    { id: 3, name: "Wall Clock", price: "$51.00", img: "/girl2.jpg" },
    { id: 4, name: "Top Wall Digital Clock", price: "$51.00",  img: "/girl3.jpg" },
  ];

  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Related Products</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <Image
                src={product.img}
                alt={product.name}
                className="rounded-lg w-full h-60 object-cover mb-4"
                width={500}
                height={100}
              />
              <h2 className="text-black font-medium text-lg mb-2 text-center">{product.name}</h2>
              <div className="flex items-center text-yellow-500 mt-2">
              <span className="text-md">★★★★★</span>
              </div>
              <div className="text-black text-sm flex justify-center gap-2">
                <span>{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Page() {
  return (
    <>
      <ProductCard />
      <Trending />
    </>
  );
}
