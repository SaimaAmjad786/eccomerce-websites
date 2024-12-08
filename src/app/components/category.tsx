
import React from "react";
import Image from "next/image";

function Features() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="text-3xl font-bold font-sans title-font text-gray-900 ">
                            Top Categories
                        </h1>
                    </div>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                        {/* Box 1 */}
                        <div className="p-4 mb-20 ">
                            <div className="h-auto flex flex-col items-center text-center">
                                <Image
                                    alt="Cantilever Chair"
                                    className="rounded-full  h-80 object-cover bg-gray-100"
                                    src="/greish.png"
                                    width={350}
                                    height={100}
                                />
                                <div className="w-full mt-4 ">
                                    <h2 className="title-font font-medium text-lg text-[#151875]">
                                        Mini
                                        LCW
                                        Chair
                                    </h2>
                                    <span className="title-font font-medium text-lg text-[#151875]">
                                        $56.00
                                    </span>
                                </div>
                            </div>
                        </div>



                        {/* Box-2 */}
                        <div className="p-4 mb-20 ">
                            <div className="h-auto flex flex-col items-center text-center">
                                <Image
                                    alt="Cantilever Chair"
                                    className="rounded-full  h-80 object-cover bg-gray-100 "
                                    src="/whitish.png"
                                    width={350}
                                    height={100}
                                />
                                <div className="w-full mt-4 ">
                                    <h2 className="title-font font-medium text-lg text-[#151875]">
                                        Mini
                                        LCW
                                        Chair
                                    </h2>
                                    <span className="title-font font-medium text-lg text-[#151875]">
                                        $56.00
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Box-3 */}
                        <div className="p-4 mb-20 ">
                            <div className="h-auto flex flex-col items-center text-center">
                                <Image
                                    alt="Cantilever Chair"
                                    className="rounded-full  h-80 object-cover bg-gray-100 "
                                    src="/pink.png"
                                    width={350}
                                    height={100}
                                />
                                <div className="w-full mt-4 ">
                                    <h2 className="title-font font-medium text-lg text-[#151875]">
                                        Mini
                                        LCW
                                        Chair
                                    </h2>
                                    <span className="title-font font-medium text-lg text-[#151875]">
                                        $56.00
                                    </span>
                                </div>
                            </div>
                        </div>


                       

                        {/* Box-4 */}
                        <div className="p-4 mb-20 ">
                            <div className="h-auto flex flex-col items-center text-center">
                                <Image
                                    alt="Cantilever Chair"
                                    className="rounded-full  h-80 object-cover bg-gray-100 "
                                    src="/greish.png"
                                    width={350}
                                    height={80}
                                />
                                <div className="w-full mt-4 ">
                                    <h2 className="title-font font-medium text-lg text-[#151875]">
                                        Mini
                                        LCW
                                        Chair
                                    </h2>
                                    <span className="title-font font-medium text-lg text-[#151875]">
                                        $56.00
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Features;
