"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi"; 
import { FaCar } from "react-icons/fa";
import { images } from '..';

export default function Navbar({ className }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`${className} text-white p-4`}>
      <div className='flex justify-between items-center'>
        
        {/* Logo */}
        <div>
          <Image src={images.logo} height={200} width={200} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex text-lg capitalize gap-8 text-white font-bold'>
          <Link href={'/'}> <li>home</li> </Link>
          <Link href={'/about'}> <li>about</li> </Link>
          <Link href={'/contact'}> <li>contact</li> </Link>
        </ul>

        {/* Icons and Contact Button */}
        <div className='flex items-center gap-4'>
          {/* Shopping Cart Icon */}
          <div className='w-10 h-10 cursor-pointer rounded-full border bg-white text-black flex items-center justify-center'>
            <FiShoppingCart />
          </div>

          {/* Contact Us Button (Hidden on Small Screens) */}
          <button className='hidden md:flex bg-blue-500 text-white py-2 px-4 rounded-3xl items-center gap-2'>
            <FaCar />
            <span>Contact Us</span>
          </button>

          {/* Mobile Menu Toggle */}
          <div className='md:hidden cursor-pointer text-white text-2xl' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='flex flex-col items-center mt-4 md:hidden bg-gray-900 p-4 rounded-lg'>
          <Link href={'/'} onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-lg">Home</Link>
          <Link href={'/about'} onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-lg">About</Link>
          <Link href={'/contact'} onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-lg">Contact</Link>
          <button className='bg-blue-500 text-white py-2 px-4 rounded-3xl mt-4 flex items-center gap-2' onClick={() => setIsMobileMenuOpen(false)}>
            <FaCar />
            <span>Contact Us</span>
          </button>
        </div>
      )}
    </div>
  );
}
