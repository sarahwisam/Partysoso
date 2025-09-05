'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link';


export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden max-md:h-[500px]">
    
      <div className="absolute inset-0 lg:z-10 md:z-10 flex clip-left">
  
        <div className="w-full bg-[#D6DAC8] " />
        
       


</div>
<div className="absolute inset-0 z-0 flex clip-right">
      
        <div className="w-full bg-[#002147]" />
        
        
          

</div>

      <div className="relative  flex items-center justify-between h-full max-w-7xl mx-auto px-6 -mt-[50px]">
      
        <div className="max-w-xl text-[#002147] space-y-6 lg:z-10 md:z-10">
          <h1 className=" text-2xl md:text-5xl font-bold leading-tight font-playfair max-md:-mt-[100px] max-md:w-[250px]">
            Celebrate in Style, Meet with Purpose
          </h1>
         
          <p className="text-lg text-[#333] max-md:text-[16px]">Book luxurious halls for weddings, <span> <br className='block lg:hidden'/>parties,and corporate events<br className='block lg:hidden'/> – all <br className='hidden lg:block'/>in one platform.</span>
           </p>
          <Link href="/Booking?type=package&id=1">
          <Button className="bg-[#002147] text-[#D6DAC8] font-semibold hover:bg-[#3B4C6B] mt-[40px]">
           Book Now
          </Button>
       </Link>
        </div>
       
     

         <div className="hidden md:block  border border-[#D6DAC8] rounded-lg mt-[135px] overflow-hidden z-0 inset-0 ">
      
          <Image
            src="/s1.jpg"
            alt="Travel"
            width={560}
            height={500}
            className="object-contain rounded-lg"
          />
          </div>

          
         
        </div>
    

    </section>
  );
}