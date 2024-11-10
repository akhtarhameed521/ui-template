import React from "react";
import Image from "next/image";
import { images } from "../../index";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-800">
        <div className=" " >
            <Navbar className={'bg-blue-700 p-2 px-5 '} />
        </div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20 flex items-center justify-center mt-10 ">
        <Image src={images.car} alt="Showroom Car" layout="fill" className="object-cover opacity-50" />
        <div className="relative z-10 text-center px-5">
          <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="mt-3 text-lg md:text-xl">
            Discover the luxury and style of our premium car showroom
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">Our Story</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed text-gray-700">
              Established in 2005, our showroom has been dedicated to offering a selection of the finest
              cars from across the globe. Our mission is to provide an exceptional car-buying experience
              with a focus on luxury, quality, and customer satisfaction.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              From classic muscle cars to the latest in high-performance vehicles, we offer a diverse
              range of options to meet every taste and preference.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <Image src={images.car2} alt="Luxury Car 2" className="rounded-lg shadow-lg" width={500} height={300} />
            <Image src={images.car3} alt="Luxury Car 3" className="rounded-lg shadow-lg" width={500} height={300} />
            <Image src={images.car4} alt="Luxury Car 4" className="rounded-lg shadow-lg" width={500} height={300} />
            <Image src={images.car5} alt="Luxury Car 5" className="rounded-lg shadow-lg" width={500} height={300} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exclusive Showroom Tours</h3>
              <p className="text-gray-600">Get a guided tour of our luxurious showroom and explore our wide range of vehicles.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personalized Financing Options</h3>
              <p className="text-gray-600">We offer a variety of financing options tailored to meet your unique needs.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Luxury Car Rentals</h3>
              <p className="text-gray-600">Experience the thrill of driving a luxury car with our rental services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">Our Fleet</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Image src={images.car2} alt="Car 2" className="rounded-lg shadow-md" width={500} height={300} />
          <Image src={images.car3} alt="Car 3" className="rounded-lg shadow-md" width={500} height={300} />
          <Image src={images.car4} alt="Car 4" className="rounded-lg shadow-md" width={500} height={300} />
          <Image src={images.car5} alt="Car 5" className="rounded-lg shadow-md" width={500} height={300} />
          <Image src={images.car6} alt="Car 6" className="rounded-lg shadow-md" width={500} height={300} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-500 text-white py-16 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Drive Your Dream Car?</h2>
          <p className="mb-8 text-lg">
            Visit our showroom today to explore our wide range of premium vehicles and exceptional
            customer service.
          </p>
          <button className="bg-white text-purple-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </section>
      <div className="mt-10" >
        <Footer/>
      </div>
    </div>
  );
}
