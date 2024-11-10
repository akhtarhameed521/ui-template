"use client";
import Image from "next/image";
import { images } from "..";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};

// Define car images for the slider
const carImages = [
  images.car1,
  images.car2,
  images.car3,
  images.car4,
  images.car5,
  images.car6,
];

export default function ImageSlider() {
  return (
    <motion.div className="overflow-hidden relative w-full">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Increase duration since we have a longer image strip now
        }}
        style={{ display: 'flex', width: `${carImages.length * 200 * 2}px` }} // Adjust width based on total image count
      >
        {[...carImages, ...carImages].map((image, index) => (
          <Image
            key={index}
            src={image}
            width={200} // Adjust width to fit more images smoothly
            height={150}
            alt={`Car ${index + 1}`}
            className="rounded-lg shadow-lg mr-4"
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
