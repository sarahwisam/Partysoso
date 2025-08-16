// components/HallDetails.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge"; 
import { MapPin, Users, Star, Calendar, CreditCard } from "lucide-react";
import Link from "next/link";


const hall = {
  id: "royal-palace",
  name: "Royal Palace Hall",
  location: "Baghdad, Iraq",
  rating: 4.8,
  reviews: 124,
  capacity: "Up to 300 guests",
  price: "$500 / day",
  mainImage: "/s19.jpg",
  gallery: [
    "/s24.jpg",
    "/s20.jpg",
    "/s21.jpg",
    "/s22.jpg",
    "/s23.jpg",
  ],
  description:
    "Royal Palace Hall is an elegant venue designed for unforgettable weddings, grand conferences, and high-end events. With luxurious chandeliers, polished floors, and bespoke catering options, we provide a premium experience tailored to your needs. Our experienced events team handles everything from setup to final touches.",
  amenities: [
    "In-house catering",
    "Stage & AV setup",
    "Decor & lighting",
    "Parking",
    "Dedicated events manager",
  ],
  addons: [
    { id: "photo", title: "Photography", price: "$350", desc: "Professional coverage" },
    { id: "decorate", title: "Premium Decoration", price: "$450", desc: "Custom theme & florals" },
    { id: "catering", title: "Full Catering", price: "$25/person", desc: "3-course & drinks" },
  ],
  testimonials: [
    {
      name: "Layla H.",
      text: "The venue looked magical — the team handled everything and our guests were amazed.",
      avatar: "/venues/test1.jpg",
    },
    {
      name: "Omar K.",
      text: "Great location and outstanding service. Highly recommended for conferences.",
      avatar: "/venues/test2.jpg",
    },
  ],
};

export default function Vdetail() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  function openImage(src: string) {
    setActiveImage(src);
    setLightboxOpen(true);
  }

  return (
    <main className="min-h-screen bg-[#002147] text-[#0d1b2a]">
      
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start py-10 w-[1280px]">
            
            <div className="lg:col-span-2 space-y-6">
              <div className="relative rounded-tl-[28px] rounded-tr-[28px] overflow-hidden shadow-lg">
                <Image
                  src={hall.mainImage}
                  alt={hall.name}
                  width={1400}
                  height={700}
                  className="w-full h-[420px] object-cover"
                />
              
                <div className="absolute top-4 left-4 bg-[#D6DAC8] text-[#002147] font-semibold px-4 py-2 rounded-md shadow">
                  {hall.price}
                </div>
              </div>

          
              <div className="grid grid-cols-3 gap-3">
                {hall.gallery.map((src) => (
                  <button
                    key={src}
                    onClick={() => openImage(src)}
                    className="group overflow-hidden rounded-lg border border-[#d4af37] shadow-sm"
                    aria-label="Open image"
                  >
                    <div className="relative w-full h-28 md:h-36">
                      <Image src={src} alt={hall.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

        
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="rounded-xl border border-[#d4af37] bg-[#D6DAC8] shadow-md">
                  <CardContent className="p-6">
                    <h1 className="text-2xl font-bold text-[#002147]">{hall.name}</h1>
                    <div className="flex items-center gap-3 mt-2">
                      <MapPin className="w-4 h-4 text-[#4a5568]" />
                      <span className="text-sm text-[#4a5568]">{hall.location}</span>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm text-[#0d1b2a]">
                        <Star className="w-4 h-4 text-[#d4af37]" />
                        <span className="font-medium">{hall.rating}</span>
                        <span className="text-[#64748b]">({hall.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#0d1b2a]">
                        <Users className="w-4 h-4 text-[#0d1b2a]" />
                        <span className="text-[#64748b]">{hall.capacity}</span>
                      </div>
                    </div>

                    
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-[#4a5568]">Date</p>
                        <p className="text-sm text-[#0d1b2a]"><Calendar className="inline w-4 h-4 mr-1" /> Select</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-[#4a5568]">Guests</p>
                        <p className="text-sm text-[#0d1b2a]">Up to 300</p>
                      </div>

                      <Button className="w-full bg-[#002147] text-[#D6DAC8] hover:bg-[#001C3A] py-3 mt-2">
                        Book Now
                      </Button>

                      <Button variant="outline" className="w-full mt-2 text-[#0d1b2a] border-[#D6DAC8]">
                        Contact Manager
                      </Button>
                    </div>
                  </CardContent>
                </Card>

        
                <div className="mt-4 p-4 rounded-xl border border-[#d4af37] bg-[#002147] shadow-sm">
                  <h4 className="text-sm font-semibold text-[#D6DAC8] mb-2">What's included</h4>
                  <ul className="text-sm text-[#D6DAC8] space-y-1">
                    <li>• Basic seating & tables</li>
                    <li>• Standard lighting</li>
                    <li>• Cleaning crew</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

  
      <section className="max-w-7xl mx-auto px-6 md:px-1 py-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-[1280px]">
        
          <div className="lg:col-span-2 space-y-6">
            <Card className="rounded-xl border border-[#d4af37] bg-[#D6DAC8] shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#002147]">About this venue</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{hall.description}</p>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-[#002147]">Amenities</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {hall.amenities.map((a) => (<div key={a} className="flex items-center gap-2 bg-[#002147] p-3 rounded-lg border border-[#d4af37]">
                        <svg className="w-5 h-5 text-[#D6DAC8]" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-sm text-[#D6DAC8]">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

          
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#D6DAC8]">Add-ons</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {hall.addons.map((ad) => (
                  <Card key={ad.id} className="rounded-xl border border-[#d4af37] bg-[#D6DAC8]">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-md font-semibold text-[#002147]">{ad.title}</h4>
                          <p className="text-sm text-[#002147] mt-1">{ad.desc}</p>
                        </div>
                        <div className="text-[#002147] font-semibold">{ad.price}</div>
                      </div>
                      <div className="mt-4">
                        <Button className="w-full bg-[#002147] border border-[#D6DAC8] text-[#D6DAC8]">Add</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#D6DAC8]">What clients say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hall.testimonials.map((t, i) => (
                  <Card key={i} className="rounded-xl p-4 border border-[#d4af37] bg-[#002147]">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 relative rounded-full overflow-hidden">
                        <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#D6DAC8]">{t.name}</div>
                        <p className="text-sm text-[#D6DAC8] mt-1">{t.text}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          
          <aside>
            <div className="rounded-xl border border-[#d4af37] p-4 bg-[#002147] shadow-sm">
              <h4 className="text-md font-semibold mb-3 text-[#D6DAC8]">Location</h4>
              <div className="w-full h-56 bg-[#e6eef4] rounded-md flex items-center justify-center text-[#D6DAC8]">
                
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 w-6 h-6 text-[#002147]" />
                  <div className="text-sm text-[#002147]">Map placeholder</div>
                  <div className="text-xs text-[#64748b] mt-2">{hall.location}</div>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="text-sm font-semibold text-[#D6DAC8]">Venue details</h5>
                <ul className="text-sm text-[#D6DAC8] mt-2 space-y-1">
                  <li>Address: 123 Royal St., Baghdad</li>
                  <li>Parking: Available</li>
                  <li>Capacity: {hall.capacity}</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

    
    
<section className="bg-[#001f3f] text-[#D6DAC8] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 w-[1270px] ml-[115px]">
        <div>
          <h2 className="text-3xl font-bold ">Ready to book {hall.name}?</h2>
          <p className="mt-2 max-w-lg">
            
        Choose your date and confirm your reservation in minutes.
          </p>
        </div>
        <Link href="/Booking?type=package&id=1">
        <Button className="bg-[#D6DAC8] text-[#002147] hover:bg-[#B38B6D]">Book Now</Button>
        </Link>
      </section>

      
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent shadow-none">
          {activeImage && (
            <div className="relative w-full h-[80vh]">
              <Image src={activeImage} alt="Gallery" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}