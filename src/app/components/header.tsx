"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { IoSearch } from "react-icons/io5";

function Header() {
  const [open, setOpen] = useState(false); // Mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown menu toggle
  const dropdownRef = useRef<HTMLLIElement | null>(null); // Ref for dropdown menu

  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          {/* Logo */}
          <div>
            <h2 className="title-font font-extrabold text-blue-950 tracking-widest text-xl">
              Hekto
            </h2>
          </div>

          {/* Navbar Links */}
          <nav
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[70%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center md:gap-x-4 lg:gap-x-6 xl:gap-x-8 text-white md:text-black">
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li
                className="relative p-4 hover:underline hover:text-pink-600 underline-offset-2"
                ref={dropdownRef}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="focus:outline-none"
                >
                  Pages
                </button>
                {dropdownOpen && (
                  <div className="absolute mt-2 bg-pink-100 text-black p-4 rounded-md shadow-lg flex flex-col gap-2 z-10">
                    <Link
                      href="/shoplist"
                      className="block hover:text-pink-600"
                      onClick={closeMobileMenu}
                    >
                      Shoplist
                    </Link>
                    
                <Link href="/shopoffer"  className="block hover:text-pink-600" onClick={closeMobileMenu}>
                  Shopoffer
                </Link>
              
                    <Link
                      href="/wishlist"
                      className="block hover:text-pink-600"
                      onClick={closeMobileMenu}
                    >
                      Wishlist
                    </Link>
                    <Link
                      href="/billinginformation"
                      className="block hover:text-pink-600"
                      onClick={closeMobileMenu}
                    >
                      Billing Information
                    </Link>
                    <Link href="/productcard"  className="block hover:text-pink-600" onClick={closeMobileMenu}>
                  Products
                </Link>
                <Link href="/card"  className="block hover:text-pink-600" onClick={closeMobileMenu}>
                  Card
                </Link>
                <Link href="/faq"  className="block hover:text-pink-600" onClick={closeMobileMenu}>
                  Faq
                </Link>
                  </div>
                )}
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/products" onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/blog" onClick={closeMobileMenu}>
                  Blog
                </Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/shoplist" onClick={closeMobileMenu}>
                  Shop
                </Link>
              </li>
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/about" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              
              <li className="p-4 hover:underline hover:text-pink-600 underline-offset-2">
                <Link href="/contact" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Search Bar & Mobile Menu Toggle */}
          <div className="flex gap-x-4 items-center">
            <div className="hidden lg:flex w-full bg-gray-200 rounded-md items-center">
              <input
                className="w-full p-2 rounded-md bg-gray-200 outline-none"
                type="search"
                placeholder="Search..."
              />
              <button className="text-xl ml-2 bg-pink-600 px-3 py-2 text-white rounded-md">
                <IoSearch />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggleMobileMenu}
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;