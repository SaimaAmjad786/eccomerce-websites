"use client";
import { useState } from "react";
import TopBar from "../components/navbar";
import Header from "../components/header";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Ut diam consequat", price: 32.0, quantity: 1 },
    { id: 2, name: "Vel faucibus posuere", price: 32.0, quantity: 1 },
    { id: 3, name: "Ac vitae vestibulum", price: 32.0, quantity: 1 },
    { id: 4, name: "Elit massa diam", price: 32.0, quantity: 1 },
    { id: 5, name: "Proin pharetra elementum", price: 32.0, quantity: 1 },
  ]);

  const [shipping, setShipping] = useState(0);
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");

  // Update quantity of a product
  const updateQuantity = (id: number, newQuantity: number) => {
    setWishlist((prevWishlist) =>
      prevWishlist.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  // Remove product from wishlist
  const removeItem = (id: number) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  // Calculate total price for a product (rounded to 2 decimal places)
  const calculateTotal = (price: number, quantity: number): number =>
    Number((price * quantity).toFixed(2));

  // Calculate cart subtotal (rounded to 2 decimal places)
  const subtotal = wishlist
    .reduce((acc, item) => acc + calculateTotal(item.price, item.quantity), 0)
    .toFixed(2);

  // Calculate cart total (subtotal + shipping)
  const total = (parseFloat(subtotal) + shipping).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Top Navigation */}
      <div className="sticky top-0 z-50">
        <TopBar />
      </div>

      {/* Header */}
      <Header />

      {/* Wishlist Title */}
      <header className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-blue-900">Shopping Cart</h1>
          <p className="text-sm text-gray-500">
            Home / Pages / <span className="text-pink-500">Shopping Cart</span>
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Wishlist Table */}
          <div className="bg-white shadow rounded-lg p-6 md:col-span-2">
            <h2 className="text-xl font-semibold">Products</h2>
            
            {wishlist.length > 0 ? (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-200 py-4"
                >
                  {/* Product Name and Price */}
                  <div className="w-full sm:w-1/2">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-500">Price: ${item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="w-full sm:w-1/4 flex items-center justify-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-lg px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      className="w-12 text-center border rounded"
                    />
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-lg px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>

                  {/* Total Price */}
                  <div className="w-full sm:w-1/4 text-right">
                    <p className="font-semibold">
                      Total: ${calculateTotal(item.price, item.quantity)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 ml-4"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">Your wishlist is empty.</p>
            )}
          </div>

          {/* Cart Totals and Calculate Shipping */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-bold flex justify-center mb-4">Cart Totals</h2>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold">${subtotal}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Shipping:</span>
              <span className="font-semibold">${shipping}</span>
            </div>
            <div className="flex justify-between py-2 border-t mt-2">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-bold">${total}</span>
            </div>

            {/* Calculate Shipping Form */}
            <div className="mt-6 border-t pt-4">
              <h3 className="text-xl font-bold flex justify-center mb-4">Calculate Shipping</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const newShipping = Math.floor(Math.random() * 20) + 5; // Mock shipping calculation
                  setShipping(newShipping);
                }}
              >
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Country</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Enter country"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Enter postal code"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 font-bold text-white py-2 rounded hover:bg-pink-600"
                >
                  Calculate Shipping
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
