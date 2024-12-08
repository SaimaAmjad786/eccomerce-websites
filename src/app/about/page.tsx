import React from "react";
import Image from "next/image";
import TopBar from "../components/navbar";
import Header from "../components/header";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <TopBar/>
      <Header/>
      
      {/* Header Section */}
      <header className="text-center py-8 bg-gray-100">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-sm text-gray-600 mt-2">Home /Pages/ About Us</p>
      </header>

      {/* About Section */}
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded ml-14"
        alt="hero"
        src="/boys.jpg"
        width={400}
        height={200}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start mr-14 md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Know About Our Ecomerce
        <br className="hidden lg:inline-block" />
        Business, History
      </h1>
      <p className="mb-8 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
          Contact_us
        </button>
        
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-center text-3xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Feature Card */}
            {[
              { title: "Free Delivery", icon: "🚚" },
              { title: "Win Cash Back", icon: "💸" },
              { title: "Quality Product", icon: "✔️" },
              { title: "24/7 Support", icon: "📞" },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Client Says</h2>
          <blockquote className="bg-white rounded-lg shadow-lg p-8 italic">
            <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
            </p>
            <footer className="mt-4 text-gray-600">- Saba Qamar</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;