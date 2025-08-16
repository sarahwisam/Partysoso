import { Button } from "@/components/ui/button";
import Link from "next/link";
import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <header className="bg-[#] h-[60px] px-6 md:px-16 flex items-center justify-between">
      
 
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#D6DAC8] flex items-center justify-center md:-ml-[330px] -ml-[170px] max-md:-ml-[50px]">
                <span className="font-semibold text-[#002147]">V</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#D6DAC8]">VenueLux</h3>
                
              </div>
            </div>
       
     <Dropdown/>
     
      <nav className="hidden md:flex gap-8 text-[#F5F5DC] text-base font-medium -ml-[250px]">
        <Link href="/Home" className="hover:text-[#9CAFAA] transition-colors">Home</Link>
        <Link href="/Filters" className="hover:text-[#9CAFAA] transition-colors">Halls</Link>
        <Link href="/Packages" className="hover:text-[#9CAFAA] transition-colors">Packages</Link>
        <Link href="/Booking?type=package&id=1" className="hover:text-[#9CAFAA] transition-colors">Booking</Link>
        <Link href="/Login" className="hover:text-[#9CAFAA] transition-colors">Login</Link>
        
        
      </nav>

    
      <Link href="/Register">
      <Button
        variant="outline"
        className="bg-[#D6DAC8] text-[#002147] hover:bg-[#9CAFAA] transition-colors hidden md:block"
      >
        Sign Up
      </Button>
      </Link>
    </header>
  );
}