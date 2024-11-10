import React from "react";
import Image from "next/image";
import { images } from "../../index";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactUsPage() {
  return (
    <div className="bg-gray-100 text-gray-800">
        <div className=" " >
            <Navbar className={'bg-blue-700 p-2 px-5 '} />
        </div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20 flex items-center justify-center mt-5 ">
        
        <Image src={images.car} alt="Contact Car" layout="fill" className="object-cover opacity-50" />
        <div className="relative z-10 text-center px-5">
          <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mt-3 text-lg md:text-xl">
            We’re here to help you with any questions you have about our showroom
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="max-w-6xl mx-auto py-16 px-5">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-600">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-600">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Showroom Info */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Showroom Location</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Visit our showroom to explore a range of luxury cars and experience our exceptional customer service.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zM12 9.5A2.5 2.5 0 1114.5 7 2.5 2.5 0 0112 9.5z" />
                </svg>
                <span>123 Luxury Drive, Car City, CA 90000</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4a8 8 0 018 8c0 1.61-.63 3.22-1.71 4.29L12 22l-6.29-5.71A8 8 0 014 12a8 8 0 018-8zm0 6a2 2 0 110 4 2 2 0 010-4z" />
                </svg>
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <svg className="h-6 w-6 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 6.75v10.5C2 18.44 2.56 19 3.25 19H20.75c.69 0 1.25-.56 1.25-1.25V6.75C22 6.06 21.44 5.5 20.75 5.5H3.25C2.56 5.5 2 6.06 2 6.75zm3.5 0h13v10.5h-13V6.75zm3.94 3.06a.75.75 0 10-1.06 1.06L10.94 15a.75.75 0 001.06 0L16.63 10.9a.75.75 0 10-1.06-1.06l-4.19 4.18-2.94-2.94z" />
                </svg>
                <span>info@carshowroom.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">Find Us on the Map</h2>
          <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden">
            {/* Placeholder for Google Map iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509457!2d144.95373631558945!3d-37.8172098797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f6a9b1%3A0x5045675218cdd3!2sVictoria%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1619650171670!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-500 text-white py-16 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Looking for Your Dream Car?</h2>
          <p className="mb-8 text-lg">
            Our team is here to assist you in finding the perfect car to match your lifestyle.
          </p>
          <button className="bg-white text-purple-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>
        <div className="mt-10" >
            <Footer/>
        </div>
    </div>
  );
}
