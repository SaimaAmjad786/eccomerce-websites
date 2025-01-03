import React from "react";
import Image from "next/image";
import TopBar from "../components/navbar";
import Header from "../components/header";
import Link from "next/link";

export default function Order() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="min-h-screen py-10 relative bg-[#F6F5FF]">
        {/* Header Section */}
        <div className="flex flex-col items-center pt-10">
          <h1 className="text-[#151875] font-bold text-3xl">Order Completed</h1>
          <p className="mt-4 text-base text-black">
            Home . Pages <span className="text-[#FB2E86]">. Order Completed</span>
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col items-center mt-16 space-y-6">
          {/* Tick Image */}
          <Image
            src="/tick.png"
            alt="Order Completed Tick"
            width={120}
            height={80}
            className="rounded-full object-cover"
          />

          {/* Description */}
          <div className="text-center px-4">
            <h2 className="text-[#151875] font-bold text-2xl">
              Your Order Is Completed
            </h2>
            <p className="mt-4 text-[#8D92A7] text-sm leading-relaxed">
              Thank you for your order! Your order is being processed and will be
              completed within 3-6 hours. You will receive an email confirmation when
              your order is completed.
            </p>
          </div>

          {/* Continue Shopping Button */}
          <Link href="/shoplist">
            <button className="mt-6 px-6 py-3 bg-[#FF3EB2] text-white text-sm font-semibold rounded-lg hover:bg-[#FB2E86] transition duration-200">
              Continue Shopping
            </button>
          </Link>
        </div>

        {/* Decorative Images */}
        <div className="flex justify-around mt-16">
          <Image
            src="/clock 1.png"
            alt="Processing Time"
            width={70}
            height={70}
            className="object-cover"
          />
          <Image
            src="/group.png"
            alt="Group Icon"
            width={70}
            height={70}
            className="object-cover"
          />
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-dashed border-[#D2D1D1]"></div>
      </div>
    </>
  );
}