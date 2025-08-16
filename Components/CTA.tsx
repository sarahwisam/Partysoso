import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CTA() {
  return (
    <section className="py-20 bg-[#002147] ">
      <div className="max-md:scale-75 container mx-auto px-4 grid lg:grid-cols-2 gap-2 items-center max-md:-ml-[35px] max-md:-mt-[80px]">
        
        
        <div className="max-md:w-[430px] max-md:h-[400px] bg-[#D6DAC8] border border-[#d4af37] shadow-md  max-md:rounded-t-[210px]  md:rounded-l-[400px] p-8 flex flex-col justify-center h-[460px] -mt-[100px]">
          <h2 className="max-md:mt-[40px] text-4xl font-bold text-[#002147] mb-4 max-md:text-3xl">
            Book Your Perfect Venue Today
          </h2>
          <p className="text-lg text-[#002147] mb-6 max-md:text-[18px]">
            Discover premium halls for weddings, conferences, and events — all ready for your special day.
          </p>
          <Button className="max-md:w-[200px]  max-md:-ml-[5px] bg-[#002147] text-[#D6DAC8] hover:bg-[#3B4C6B] px-6 py-3 text-lg rounded-lg transition-all duration-300 w-[300px] ml-[120px]">
            Book Now
          </Button>
        </div>

        <div className="max-md:rounded-b-[210px] max-md:w-[430px] max-md:h-[400px] max-md:-mt-[5px] bg-white border border-[#D6DAC8] shadow-md overflow-hidden h-[460px] md:rounded-r-[400px] mt-[300px]">
          <Image
            src="/s9.jpg"
            alt="Luxury Event Venue"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </section>
  )
}