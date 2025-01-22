
"use client";
import { useState } from "react";
import Link from "next/link";
import TopBar from "../components/navbar";
import Header from "../components/header";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    try {
      // Simulated API call for signup
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up. Please try again.");
      }

      const data = await response.json();
      setSuccess("Account created successfully! Please log in.");
      setError("");

      // Clear form fields
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div>
      <TopBar />
      <Header />

      <div className="bg-gray-50 min-h-screen">
        <header className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-blue-900">Sign Up</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Sign Up</span>
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 flex flex-col items-center">
          <div className="bg-white shadow-md rounded-lg p-8 mt-12 max-w-md w-full">
            <section role="form" aria-labelledby="signup-title">
              <h2 id="signup-title" className="text-xl font-semibold text-center text-gray-800">
                Create an Account
              </h2>
              <p className="text-center text-gray-600 text-sm mb-6">
                Please sign up by filling in your details below.
              </p>

              {/* Error Message */}
              {error && <p className="text-center text-red-500 text-sm mb-4">{error}</p>}

              {/* Success Message */}
              {success && <p className="text-center text-green-500 text-sm mb-4">{success}</p>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-pink-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-pink-600"
                >
                  Sign Up
                </button>
              </form>
            </section>

            <p className="text-center text-gray-600 text-sm mt-6">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-pink-500 cursor-pointer">Log in</span>
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignUp;
