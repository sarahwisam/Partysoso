
"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block lg:hidden ">
      
      <button
        onClick={() => setIsOpen(true)}
        className="text-[#D6DAC8] p-2 text-2xl ml-[100px]"
      >
        <FiMenu />
      </button>

  
      {isOpen && (
        <div className="fixed inset-0 bg-[#D6DAC8] z-50 flex flex-col ">
      
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="text-[#002147] text-3xl">
              <FiX />
            </button>
          </div>

        
          <div className="flex flex-col gap-6 px-6 text-lg ">
           
           <Link href="/Home" className="hover:text-bold transition-colors">Home</Link>
        <Link href="/Filters" className="hover:text-[#9CAFAA] transition-colors">Halls</Link>
        <Link href="/Packages" className="hover:text-[#9CAFAA] transition-colors">Packages</Link>
        <Link href="/Login" className="hover:text-[#9CAFAA] transition-colors">Login</Link>
        
          </div>

         
          <div className="absolute right-8 top-1/3">
         
            <svg width="50" height="200" viewBox="0 0 50 200" fill="#002147">
              <circle cx="25" cy="20" r="15" />
              <circle cx="25" cy="60" r="15" />
              <circle cx="25" cy="100" r="15" />
              <circle cx="25" cy="140" r="15" />
              <circle cx="25" cy="180" r="15" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}