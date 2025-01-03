
import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="bg-white py-16 px-8 flex flex-col items-center text-center space-y-8">
      {/* Background Image */}
      <div className="relative w-full h-80 overflow-hidden rounded-lg">
        <img
          src="/back.jpg" // Replace with your actual image path
          alt="background of a newsletter subscription section"
          className="object-cover w-full h-full"
        />
        {/* Heading and Button */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white space-y-4 bg-black bg-opacity-50">
          <h2 className="text-3xl font-semibold leading-tight">
            Get Latest Updates By Subscribing to Our Newsletter
          </h2>
          <button className="px-8 py-3 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-600">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
