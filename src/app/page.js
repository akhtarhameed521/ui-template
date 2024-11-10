"use client";
import Image from "next/image";
import { images } from "..";
import { FaCheck, FaQuoteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import ImageSlider from "../components/ImageSlider"

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.15 },
  },
};

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Car Enthusiast",
    testimonial: "This is the best car dealership I’ve ever been to! The variety and customer service are top-notch.",
    image: images.client4,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Luxury Car Owner",
    testimonial: "Absolutely stunning selection of cars. I found my dream car here!",
    image: images.client2,
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Happy Customer",
    testimonial: "Professional staff, excellent support, and a smooth buying experience.",
    image: images.client3,
  },
];


export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-600 to-black min-h-screen capitalize">
        {/* Navbar */}
        <div className="w-full max-w-7xl mx-auto pt-5 hidden lg:block">
          <Navbar />
        </div>

        {/* Hero Section */}
        <motion.div
          className="flex flex-col lg:flex-row h-[100vh] gap-10 lg:gap-32 justify-center items-center px-6 lg:px-0"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="text-center lg:text-left text-white">
            <h4 className="text-3xl md:text-4xl font-bold mb-3">new in stock</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">explore the next</h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">generations cars</h2>
            <p className="text-lg mb-2">Discover cutting-edge innovation and performance</p>
            <p className="text-lg mb-6">Crafted for tomorrow’s roadways</p>
            <motion.button
              className="px-6 py-3 rounded-full mt-6 bg-blue-900 hover:bg-blue-800 shadow-lg transform transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buy this car
            </motion.button>
            <div className="flex gap-3 mt-6 items-center">
              <Image src={images.client} height={50} width={50} alt="Client" className="rounded-full shadow-md" />
              <div>
                <p className="font-bold">1.5k</p>
                <p className="text-gray-300">Good reviews</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="relative hidden lg:block" variants={fadeInUp}>
            <div className="rounded-full shadow-lg overflow-hidden border-4 border-blue-800">
              <Image src={images.carShape} height={400} width={400} alt="Car Shape" />
            </div>
            <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-full h-[200px]">
              <Image src={images.car} layout="fill" objectFit="contain" alt="Car" />
            </div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div className="bg-white py-10 px-6 lg:px-0 pb-20 text-gray-800" variants={fadeInUp}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative flex justify-center">
              <motion.div
                className="absolute -bottom-10 right-5 hidden lg:block rounded-lg shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Image src={images.about1} className="rounded-lg" height={200} width={300} alt="About Image 1" />
              </motion.div>
              <Image src={images.about2} className="rounded-lg shadow-lg" height={300} width={300} alt="About Image 2" />
            </div>
            <div>
              <h2 className="text-blue-700 text-lg font-medium mb-2">About Us</h2>
              <h3 className="text-2xl font-bold mb-4">Redefining the Car Showroom Experience</h3>
              <p className="text-lg font-medium mb-4">
                At our showroom, we redefine the car-buying experience with exceptional service, cutting-edge vehicles, and customer-focused solutions tailored to your needs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {["Customer-Centric Approach", "Comprehensive Vehicle Selection", "Test Drive Convenience", "Exceptional Support"].map((text, index) => (
                  <motion.div key={index} className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                    <span className="h-6 w-6 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md">
                      <FaCheck size={12} />
                    </span>
                    <h4>{text}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

       
        

        {/* Popular Cards Section */}
        <motion.div className="bg-slate-50 py-10 px-6 lg:px-0" variants={fadeInUp}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between items-center mb-8">
              <div>
                <h3 className="text-blue-800 text-lg font-bold mb-2">our cars</h3>
                <h2 className="text-xl font-bold">let's find your dream car</h2>
              </div>
              <motion.button className="bg-blue-900 text-white px-6 py-3 rounded-full shadow-lg transform transition-transform" whileHover={{ scale: 1.05 }}>
                Discover More
              </motion.button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, index) => (
                <motion.div key={index} className="rounded-lg shadow-lg overflow-hidden" whileHover={{ scale: 1.05 }}>
                  <Cards />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Supportive Section */}
        <motion.div className="bg-white py-10 px-6 lg:px-0" variants={fadeInUp}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Variety of Cars", "Competitive Pricing", "24/7 Support"].map((title, index) => (
              <motion.div key={index} className="p-6 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow" whileHover={{ scale: 1.05 }}>
                <div className="flex gap-3 items-center mb-4">
                  <span className="bg-blue-700 h-10 w-10 text-white rounded-full flex items-center justify-center shadow-md">
                    {index + 1}
                  </span>
                  <hr className="flex-1 h-[2px] bg-blue-900" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-md">Explore our wide variety of cars, each designed to deliver exceptional performance, luxury, and innovation.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
          
            <div className="mt-10" >
              <ImageSlider/>
            </div>

        {/* testamonial section  */}
        <motion.div className="bg-gray-100 py-16 px-6 lg:px-0" variants={fadeInUp}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="p-6 rounded-lg shadow-lg bg-white flex flex-col items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
                  <p className="text-md italic mb-4">"{testimonial.testimonial}"</p>
                  <Image
                    src={testimonial.image}
                    width={60}
                    height={60}
                    alt={testimonial.name}
                    className="rounded-full mb-4"
                  />
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


        <Footer />
      </div>
    </>
  );
}
