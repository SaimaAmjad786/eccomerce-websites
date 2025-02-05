
// 'use client';

// import { FaEnvelope, FaPhoneAlt, FaUser, FaHeart } from 'react-icons/fa';
// import { IoCartOutline } from 'react-icons/io5';
// import { IoIosSearch } from 'react-icons/io';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Link from 'next/link';

// const TopBar = () => {
//   const cart = useSelector((state: any) => state.cart || []); // Fallback if cart is undefined

//   const [languageDropdown, setLanguageDropdown] = useState(false);
//   const [currencyDropdown, setCurrencyDropdown] = useState(false);

//   return (
//     <div className="bg-violet-700 text-white py-2 text-sm flex items-center justify-center z-50 sticky top-0">
//       {/* TopBar Container */}
//       <div className="w-full max-w-[1200px] flex items-center justify-between px-4">
//         {/* Left Section */}
//         <div className="flex items-center gap-6 w-full sm:w-auto">
//           {/* Email */}
//           <a
//             href="mailto:mhhasanul@gmail.com"
//             className="flex items-center gap-2 hover:text-gray-200"
//           >
//             <FaEnvelope />
//             <span className="hidden sm:inline">mhhasanul@gmail.com</span>
//           </a>
//           {/* Phone */}
//           <a
//             href="tel:1234567890"
//             className="flex items-center gap-2 hover:text-gray-200"
//           >
//             <FaPhoneAlt />
//             <span className="hidden sm:inline">(12345)67890</span>
//           </a>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-6 w-full sm:w-auto">
//           {/* Language Selector */}
//           <div
//             className="relative cursor-pointer flex items-center gap-1"
//             onMouseEnter={() => setLanguageDropdown(true)}
//             onMouseLeave={() => setLanguageDropdown(false)}
//           >
//             <span>English</span>
//             <span className="text-xs">▼</span>
//             {languageDropdown && (
//               <div className="absolute top-8 bg-white text-black rounded shadow-md p-2">
//                 <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">English</div>
//                 <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Spanish</div>
//                 <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">French</div>
//                 <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">German</div>
//               </div>
//             )}
//           </div>

//           {/* Currency Selector */}
//           <div
//             className="relative cursor-pointer flex items-center gap-1"
//             onMouseEnter={() => setCurrencyDropdown(true)}
//             onMouseLeave={() => setCurrencyDropdown(false)}
//           >
//             <span>USD</span>
//             <span className="text-xs">▼</span>
//             {currencyDropdown && (
//               <div className="absolute top-8 bg-white text-black rounded shadow-md p-2">
//                 <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">USD</div>
//                 <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">EUR</div>
//                 <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">GBP</div>
//               </div>
//             )}
//           </div>

//           {/* Login */}
//           <Link href="/signup" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
//             <FaUser />
//             <span className="hidden sm:inline">Login</span>
//           </Link>

//           {/* Wishlist */}
//           <Link href="/wishlist" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
//             <FaHeart />
//             <span className="hidden sm:inline">Wishlist</span>
//           </Link>

//           {/* Search and Cart */}
//           <div className="flex items-center gap-4">
//             {/* Search Bar */}
//             <div className="hidden lg:flex items-center bg-[#F0F0F0] rounded-full px-3 py-2">
//               <IoIosSearch className="text-xl text-gray-500" />
//               <input
//                 type="text"
//                 placeholder="Search for products..."
//                 className="bg-transparent outline-none pl-2 text-gray-700 w-full"
//               />
//             </div>

//             {/* Cart */}
//             <Link href="/cart" className="relative flex items-center">
//               <IoCartOutline className="text-3xl" />
//               {cart.length > 0 && (
//                 <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   {cart.length}
//                 </span>
//               )}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;





'use client';

import { FaEnvelope, FaPhoneAlt, FaUser, FaHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const TopBar = () => {
  const cart = useSelector((state: any) => state.cart || []); // Fallback if cart is undefined

  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false); // To check if we're on the client side

  // Refs to detect clicks outside dropdowns
  const languageRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);

  // Close dropdowns if clicked outside
  useEffect(() => {
    setIsClient(true); // Set to true once component is mounted on client
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setLanguageDropdown(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target as Node)) {
        setCurrencyDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Only render UI elements that rely on client-side logic after the component is mounted
  if (!isClient) {
    return null; // Return nothing during SSR
  }

  return (
    <div className="bg-violet-700 text-white py-2 text-sm flex items-center justify-center z-50 sticky top-0">
      <SignedIn>
        <UserButton />
      </SignedIn>
      {/* TopBar Container */}
      <div className="w-full max-w-[1200px] flex items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex items-center gap-6 w-full sm:w-auto">
          {/* Email */}
          <a
            href="mailto:mhhasanul@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <FaEnvelope />
            <span className="hidden sm:inline">mhhasanul@gmail.com</span>
          </a>
          {/* Phone */}
          <a
            href="tel:1234567890"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <FaPhoneAlt />
            <span className="hidden sm:inline">(12345)67890</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 w-full sm:w-auto">
          {/* Language Selector */}
          <div
            ref={languageRef}
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setLanguageDropdown(true)}
            onMouseLeave={() => setLanguageDropdown(false)}
          >
            <span>English</span>
            <span className="text-xs">▼</span>
            {languageDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">English</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Spanish</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">French</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">German</div>
              </div>
            )}
          </div>

          {/* Currency Selector */}
          <div
            ref={currencyRef}
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setCurrencyDropdown(true)}
            onMouseLeave={() => setCurrencyDropdown(false)}
          >
            <span>USD</span>
            <span className="text-xs">▼</span>
            {currencyDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">USD</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">EUR</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">GBP</div>
              </div>
            )}
          </div>

          {/* Login */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
            <FaUser />
            <span className="hidden sm:inline">Login</span>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </Link>

          {/* Wishlist */}
          <Link href="/wishlist" className="flex items-center gap-2 cursor-pointer hover:text-gray-200">
            <FaHeart />
            <span className="hidden sm:inline">Wishlist</span>
          </Link>

          {/* Search and Cart */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center bg-[#F0F0F0] rounded-full px-3 py-2">
              <IoIosSearch className="text-xl text-gray-500" />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent outline-none pl-2 text-gray-700 w-full"
              />
            </div>

            {/* Cart */}
            <Link href="/cart" className="relative flex items-center">
              <IoCartOutline className="text-3xl" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
