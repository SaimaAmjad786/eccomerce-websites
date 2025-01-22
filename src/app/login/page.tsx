// import Link from 'next/link';
// import TopBar from '../components/navbar';
// import Header from '../components/header';

// function Login() {
//   return (
//     <div>
//       <TopBar />
//       <Header />
//       <div className="bg-gray-50 min-h-screen">
//         {/* Header */}
//         <header className="bg-gray-100 py-6">
//           <div className="container mx-auto px-4">
//             <h1 className="text-2xl font-bold text-blue-900">Login</h1>
//             <p className="text-sm text-gray-500">
//               Home / Pages / <span className="text-pink-500">Login</span>
//             </p>
//           </div>
//         </header>

//         {/* Main Section */}
//         <main className="container mx-auto px-4 flex flex-col items-center">
//           <div className="bg-white shadow-md rounded-lg p-8 mt-12 max-w-md w-full">
//             <section role="form" aria-labelledby="login-title">
//               <h2 id="login-title" className="text-xl font-semibold text-center text-gray-800">
//                 Login
//               </h2>
//               <p className="text-center text-gray-600 text-sm mb-6">
//                 Please login using account details below.
//               </p>

//               {/* Form */}
//               <form className="space-y-4">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Email Address"
//                   className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
//                 />
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   placeholder="Password"
//                   className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
//                 />
                  
//                 <button
//                   type="submit"
//                   className="bg-pink-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-pink-600"
//                 >
//                   Sign In
//                 </button>
//               </form>
//             </section>
//             <p className="text-center text-gray-600 text-sm mt-6">
//               Don&apos;t have an account?{' '}
//               <Link href="/signup">
//                 <span className="text-pink-500 cursor-pointer">Sign up</span>
//               </Link>
//             </p>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Login;




"use client";
import { useState } from "react";
import Link from "next/link";
import TopBar from "../components/navbar";
import Header from "../components/header";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    try {
      // Simulated API call for login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password. Please try again.");
      }

      const data = await response.json();
      setSuccess("Login successful! Redirecting...");
      setError("");

      // Handle successful login (e.g., store token, redirect, etc.)
      console.log("User logged in:", data);

      // Redirect user (simulated for now)
      setTimeout(() => {
        window.location.href = "/dashboard"; // Replace with your dashboard URL
      }, 2000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
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
            <h1 className="text-2xl font-bold text-blue-900">Login</h1>
            <p className="text-sm text-gray-500">
              Home / Pages / <span className="text-pink-500">Login</span>
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 flex flex-col items-center">
          <div className="bg-white shadow-md rounded-lg p-8 mt-12 max-w-md w-full">
            <section role="form" aria-labelledby="login-title">
              <h2 id="login-title" className="text-xl font-semibold text-center text-gray-800">
                Login
              </h2>
              <p className="text-center text-gray-600 text-sm mb-6">
                Please login using your account details below.
              </p>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

              {/* Success Message */}
              {success && <p className="text-green-500 text-sm mb-4 text-center">{success}</p>}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <button
                  type="submit"
                  className="bg-pink-500 text-white w-full py-3 rounded-lg font-semibold hover:bg-pink-600"
                >
                  Sign In
                </button>
              </form>
            </section>

            <p className="text-center text-gray-600 text-sm mt-6">
              Don&apos;t have an account?{" "}
              <Link href="/signup">
                <span className="text-pink-500 cursor-pointer">Sign up</span>
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Login;


