"use client";
import React, { useState } from 'react';
import TopBar from '../components/navbar';
import Header from '../components/header';
import Link from "next/link";

const BillingInformation = () => {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Here you would typically make a POST request to your server to process the order
    // with the formData. You can use a library like axios or fetch for this.

    console.log('Order placed:', formData);
  };

  return (
   <>
    <TopBar />
    <Header />
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Billing Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">

        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        

          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Similar input fields for phone, address, city, postalCode, and country */}

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          {/* Payment method dropdown (replace with your actual implementation) */}
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="creditCard">Credit Card</option>
            <option value="creditCard">PayPal</option>
            <option value="creditCard">Cash on Delievery</option>
            {/* Add other payment options here */}
          </select>
        </div>
        <Link href="/card">
        <button
          type="submit"
          className="bg-pink-500 w-full hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        >
          Place Order
        </button>
        </Link>
      </form>
    </div>
    </>
  );
};

export default BillingInformation;