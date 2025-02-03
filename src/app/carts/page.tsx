
"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../action/action";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import TopBar from "../components/navbar";
import Header from "../components/header";
import { useRouter } from "next/navigation";

function CartsPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff5f5f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems()); // Update the cart after removal
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems()); // Update the cart after quantity change
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.stockLevel + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) handleQuantityChange(id, product.stockLevel - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
  };

  const router = useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed.", "success");
        router.push("/checkout");
        setCartItems([]); // Empty the cart after checkout
      }
    });
  };

  return (
    <>
      <TopBar />
      <Header />

      <div className="container mx-auto p-6 max-w-7xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-4 w-full md:w-2/3">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="px-3">{item.stockLevel}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 mt-4 md:mt-0 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 md:mb-0">Total: ${calculateTotal().toFixed(2)}</h2>
              <button
                onClick={handleProceed}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CartsPage;
