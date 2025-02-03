
"use client";
import React, { useEffect, useState } from "react";
import TopBar from "../components/navbar";
import Header from "../components/header";
import { Product } from "../../../types/products";
import { getCartItems } from "../action/action";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

function Checkout() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValid, setFormValid] = useState(false);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipcode: false,
    city: false,
  });

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items);
    };
    fetchCartItems();

    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(parseFloat(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
  const total = subTotal - discount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });

    // Validate after input change
    const isValid = validateForm({ ...formValues, [e.target.id]: e.target.value });
    setFormValid(isValid);
  };

  const validateForm = (values = formValues) => {
    const errors = {
      firstName: !values.firstName,
      lastName: !values.lastName,
      email: !values.email,
      phone: !values.phone,
      address: !values.address,
      zipcode: !values.zipcode,
      city: !values.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      try {
        // Simulate order placement
        localStorage.removeItem("appliedDiscount"); // Remove applied discount from localStorage
        localStorage.removeItem("cartItems"); // Optionally clear the cart items from localStorage

        // If you're working with a backend, you could make an API request here.
        // Example: await api.placeOrder(orderDetails);

        // After placing the order, show a success message and clear the form
        alert("Order placed successfully!");
        
        // Optionally, reset the form after successful submission
        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          zipcode: "",
          city: "",
        });
        setFormErrors({
          firstName: false,
          lastName: false,
          email: false,
          phone: false,
          address: false,
          zipcode: false,
          city: false,
        });
        setCartItems([]); // Clear cart items from the state
      } catch (error) {
        console.error("Error placing order:", error);
        alert("Something went wrong. Please try again later.");
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <>
      <TopBar />
      <Header />
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 pb-4">
            <Link href="/carts" className="text-black hover:text-red-500 transition text-sm">
              Carts
            </Link>
            <span> / Checkout</span>
          </nav>

          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Order Summary */}
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item._id} className="flex items-center gap-4 border-b py-2">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="object-cover rounded"
                      />
                    )}
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p>Quantity: {item.stockLevel}</p>
                      <p className="font-semibold">${(item.price * item.stockLevel).toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No items in cart</p>
              )}

              <div className="text-right pt-4">
                <p className="text-sm">
                  Subtotal: <span className="font-medium">${subTotal.toFixed(2)}</span>
                </p>
                <p className="text-sm">
                  Discount: <span className="font-medium">${discount.toFixed(2)}</span>
                </p>
                <p className="text-lg font-bold">
                  Total: <span>${total.toFixed(2)}</span>
                </p>
              </div>
            </div>

            {/* Billing Form */}
            <div className="border rounded-lg p-6 bg-white shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { id: "firstName", label: "First Name", type: "text" },
                  { id: "lastName", label: "Last Name", type: "text" },
                  { id: "address", label: "Address", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "phone", label: "Phone", type: "tel" },
                  { id: "zipcode", label: "Zip Code", type: "text" },
                  { id: "city", label: "City", type: "text" },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block text-sm font-medium">{field.label}</label>
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={`Enter your ${field.label}`}
                      value={formValues[field.id as keyof typeof formValues]}
                      onChange={handleInputChange}
                      className={`border rounded-md p-2 w-full ${
                        formErrors[field.id as keyof typeof formErrors] ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {formErrors[field.id as keyof typeof formErrors] && (
                      <p className="text-red-500 text-xs mt-1">{field.label} is required</p>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={!formValid}
                className={`w-full mt-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg 
                    shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out ${
                      formValid ? "bg-pink-500 hover:bg-pink-600" : "bg-gray-400 cursor-not-allowed"
                    }`}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
