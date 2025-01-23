"use client";
import React, { useState } from 'react';
import Header from '../components/header';
import TopBar from '../components/navbar';

function Faq() {
    const faqs = [
        {
            question: 'Eu dictumst cum at sed euismod condimentum?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
        },
        {
            question: 'Magna bibendum est fermentum eros.',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
        },
        {
            question: 'Odio muskana hak eris consekekin sceleton?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
        },
        {
            question: 'Elit id blandit sabara boi velit gua mara?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <TopBar />
            <Header />
            
                {/* Header */}
                <header className="bg-gray-100 py-6">

                    <div className="container mx-auto px-4">
                        <h1 className="text-2xl font-bold text-pink-600">Faq</h1>
                        <p className="text-sm text-gray-500">
                            Home / Pages / <span className="text-pink-600">Faq</span>
                        </p>

                    </div>
                </header>
                <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-8 text-center sm:text-left">General Information</h1>

                <div className="accordion space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4 border border-gray-300 rounded-lg">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-4 bg-gray-100 rounded-lg text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
                            >
                                <p className="p-4 text-gray-700">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Your Name*
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                Subject*
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Type Your Message*
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                        >
                            Send Mail
                        </button>
                    </form>
                </div>
                </div>
        </>
    );
}

export default Faq;




