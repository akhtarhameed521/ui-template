import React from 'react';
import Image from "next/image";
import { images } from "..";
import { FaCheck } from "react-icons/fa6";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { IoSpeedometerOutline } from "react-icons/io5";

export default function Cards() {
  return (
    <div className="bg-white border border-slate-100 p-5 rounded-md shadow shadow-slate-100 w-full max-w-xl mx-auto">
    <h2 className="text-muted text-lg font-medium truncate">Ford Mustang</h2>
    <h5 className="text-muted text-lg font-medium truncate">Sports</h5>
    <Image src={images.car1} height={500} width={350} className="w-full object-cover rounded-md" />
    
    {/* fueling section  */}
    <div className="flex flex-wrap gap-5 mt-5 items-center text-slate-600">
      <div className="flex items-center gap-3 text-sm">
        <BsFillFuelPumpDieselFill />
        <h4 className="whitespace-nowrap">Diesel</h4>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <GiSteeringWheel />
        <h4 className="whitespace-nowrap">Manual</h4>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <IoIosPeople />
        <h4 className="whitespace-nowrap">4 People</h4>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <IoSpeedometerOutline />
        <h4 className="whitespace-nowrap">1270 km</h4>
      </div>
    </div>
    
    {/* divider and footer section */}
    <hr className="w-full h-[1px] bg-slate-50 mt-5" />
    <div className="flex flex-col lg:flex-row  w-full justify-between mt-5 items-center">
      <h2 className="text-2xl font-bold">$175.60</h2>
      <button className="w-40 h-12 rounded-3xl bg-purple-500 text-white hover:bg-purple-600">View More</button>
    </div>
  </div>
  
  );
}
