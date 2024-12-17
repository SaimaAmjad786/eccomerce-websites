import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsHeadset } from "react-icons/bs";
import { FaCheckToSlot } from "react-icons/fa6";

function Services() {
  return (
    <>
      {/* Section Header */}
      <div className="flex flex-col text-center w-full mb-8">
        <h1 className="text-3xl font-bold font-sans title-font text-gray-900">
          What Shopex Offers!
        </h1>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-full sm:w-[90%] lg:w-[70%] flex flex-col lg:flex-row justify-evenly gap-y-6 lg:gap-x-6">

          {/* Box 1: Delivery */}
          <div className="w-full sm:w-[260px] h-[180px] lg:w-[240px] flex flex-col justify-center items-center gap-y-4 bg-gray-100 rounded-xl p-4 shadow-md">
            <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center text-white">
              <CiDeliveryTruck className="text-3xl" />
            </div>
            <div className="font-bold text-center">
              <h1 className="text-lg mb-3">Fast Delivery</h1>
              <p className="text-sm text-gray-400">
                Get your products delivered within 3-5 working days.
              </p>
            </div>
          </div>

          {/* Box 2: Customer Support */}
          <div className="w-full sm:w-[260px] h-[180px] lg:w-[240px] flex flex-col justify-center items-center gap-y-4 bg-gray-100 rounded-xl p-4 shadow-md">
            <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center text-white">
              <BsHeadset className="text-3xl" />
            </div>
            <div className="font-bold text-center">
              <h1 className="text-lg mb-3">24/7 Support</h1>
              <p className="text-sm text-gray-400">
                Our support team is available around the clock to help you.
              </p>
            </div>
          </div>

          {/* Box 3: Guarantee */}
          <div className="w-full sm:w-[260px] h-[180px] lg:w-[240px] flex flex-col justify-center items-center gap-y-4 bg-gray-100 rounded-xl p-4 shadow-md">
            <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center text-white">
              <FaCheckToSlot className="text-3xl" />
            </div>
            <div className="font-bold text-center">
              <h1 className="text-lg mb-3">Satisfaction Guarantee</h1>
              <p className="text-sm text-gray-400">
                If you’re not happy with your purchase, return it hassle-free.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Services;