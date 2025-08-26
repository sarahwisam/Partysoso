
"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Footer() {
  return (
    <footer className="bg-[#002147] text-[#f5f0e6] px-[132px] py-20 max-md:-mt-[230px] mx-auto">
    
      <div className="max-md:scale-75 max-md:w-[430px] max-md:h-[750px] max-md:-ml-[162px] border border-[#D6DAC8] bg-[#D6DAC8] rounded-xl md:rounded-tl-[200px] md:rounded-br-[200px] md:rounded-tr-[20px] md:rounded-bl-[20px]">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 md:py-16">
        <div className="max-md:w-[200px] grid grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-8 items-start">
         
          <div className="space-y-4 max-md:w-[250px]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#002147] flex items-center justify-center">
                <span className="font-semibold text-[#D6DAC8]">V</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#002147]">VenueLux</h3>
                <p className="text-sm text-[#002147]/90">
                  Premium halls for every occasion
                </p>
              </div>
            </div>

            <p className="text-sm text-[#002147]/80 max-w-md leading-relaxed">
              VenueLux connects you with carefully curated venues — weddings,
              corporate events, celebrations. Seamless booking, verified hosts,
              and 24/7 support.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="p-2 text-[#002147] rounded-md hover:bg-[#002147]/20 transition rounded-t-[20px]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-[#002147] rounded-md hover:bg-[#002147]/20 transition rounded-t-[20px]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-[#002147] rounded-md hover:bg-[#002147]/20  transition rounded-t-[20px]">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:gap-8 max-md:ml-[170px]">
            <div className="min-w-[140px]">
              <h4 className="text-sm font-bold text-[#002147] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-[#dbe7ee]/90">
                <li><a className="text-[#002147] hover:underline transition" href="#">Home</a></li>
                <li><a className="text-[#002147] hover:underline transition" href="#">Halls</a></li>
                <li><a className="text-[#002147] hover:underline transition" href="#">Packages</a></li>
                <li><a className="text-[#002147] hover:underline transition" href="#">Booking</a></li>
              </ul>
            </div>

            <div className="min-w-[160px] mt-6 md:mt-0">
              <h4 className="text-sm font-bold text-[#002147] mb-4">
                Support
              </h4>
              <ul className="space-y-3 text-sm text-[#dbe7ee]/90">
                <li><a className="text-[#002147] hover:underline transition" href="#">Help Center</a></li>
                <li><a className="text-[#002147] hover:underline transition" href="#">Contact Us</a></li>
                <li><a className="text-[#002147] hover:underline transition" href="#">Terms & Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="bg-[#002147] border border-[#d4af37] rounded-xl p-6 max-md:w-[385px] max-md:-ml-[3px]">
            <h4 className="text-lg font-semibold text-[#D6DAC8]">Subscribe to our newsletter</h4>
            <p className="text-sm text-[#D6DAC8]/80 mt-2 mb-4">
              Get venue deals, event tips and exclusive offers — straight to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Label className="sr-only">Email address</Label>
<Input
                  placeholder="Your email"
                  className="bg-[#082033] text-[#D6DAC8] placeholder:text-[#D6DAC8]"
                />
              </div>
              <div>
                <Button
                  type="button"
                  className="h-12 bg-[#D6DAC8] text-[#002147] h-[40px] w-[109px] hover:bg-[#9CAFAA]">
                
                
                  <Mail className="mr-2 w-4 h-4" /> Subscribe
                  </Button>
              </div>
              
            </form>

            <p className="text-xs text-[#D6DAC8]/70 mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

  
      <div className="border-t border-[#002147] -mt-[40px]">
        <div className="max-w-7xl mx-auto px-6 md:px-32 py-6 flex flex-col md:flex-row items-center justify-between gap-4 -ml-[50px]">
          <p className="text-sm text-[#002147]">
            © {new Date().getFullYear()} VenueLux. All rights reserved.
          </p>
          <div className="text-sm text-[#dbe7ee]/80 flex items-center gap-4">
            <a className="text-[#002147] hover:text-[#001C3A] transition hover:underline " href="#">Privacy</a>
            <span className="mx-2 text-[#294454]">|</span>
            <a className="text-[#002147] hover:text-[#001C3A] hover:underline transition" href="#">Terms</a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}