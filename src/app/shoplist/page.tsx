"use client";
import Image from 'next/image';
import TopBar from '../components/navbar';
import Header from '../components/header';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Accumsan Incidunt',
    price: '$90.00',
    discountedPrice: '$80.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/products1.jpg',
  },
  {
    id: 2,
    name: 'In Nulla',
    price: '$90.00',
    discountedPrice: '$80.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/products2.jpg',
  },
  {
    id: 3,
    name: 'Vel Sem',
    price: '$90.00',
    discountedPrice: '$80.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/products3.jpg',
  },
  {
    id: 4,
    name: 'Porttitor Cum',
    price: '$90.00',
    discountedPrice: '$80.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/products4.jpg',
  },
  {
    id: 5,
    name: 'Nunc In',
    price: '$90.00',
    discountedPrice: '$80.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/products5.jpg',
  },
  {
    id: 6,
    name: 'Vitae Facilisis',
    price: '$90.00',
    discountedPrice: '$80.00',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '/products6.jpg',
  },
];

export default function ShopList() {
  const handleAddToWishlist = (id:any) => {
    alert(`Product ${id} added to wishlist.`);
    // Implement wishlist logic here
  };

  const handleAddToCart = (id:any) => {
    alert(`Product ${id} added to cart.`);
    // Implement cart logic here
  };

  return (
    <div>
      <TopBar />
      <Header />

      {/* Header */}
      <header className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-blue-900">ShopList</h1>
          <p className="text-sm text-gray-500">
            Home / Pages / <span className="text-pink-500">ShopList</span>
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-4">Shop List</h1>
        <p className="text-center text-gray-600 mb-8">
          Explore our collection of premium products at discounted prices.
        </p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.imageUrl}
                  alt={`Image of ${product.name}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                <div className="flex items-center mt-2">
                  <span className="text-xl font-semibold text-red-500">
                    {product.discountedPrice}
                  </span>
                  <span className="line-through text-gray-500 ml-2">
                    {product.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <Link href="/shopoffer">
                <div className="mt-4 flex items-center space-x-4">
                  <button
                    className="flex items-center text-gray-600 hover:text-red-500"
                    onClick={() => handleAddToWishlist(product.id)}
                  >
                    <FaHeart size={16} className="mr-1" />
                    <span className="text-sm">Add to Wishlist</span>
                  </button>
                  <button
                    className="flex items-center text-gray-600 hover:text-blue-500"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    <FaShoppingCart size={16} className="mr-1" />
                    <span className="text-sm">Add to Cart</span>
                  </button>
                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}