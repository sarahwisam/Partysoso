"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useState } from "react";
import Link from "next/link";

export default function Venue() {
  const [price, setPrice] = useState([200]);
const venues = [
  {
    id:1,
    name: "Royal Palace Hall",
    location: "Baghdad, Iraq",
    capacity: "300 guests",
    price: "$500/day",
    image: "/s10.jpg",
  },
  {
    id:2,
    name: "Golden Crown Conference",
    location: "Baghdad, Iraq",
    capacity: "200 guests",
    price: "$400/day",
    image: "/s11.jpg",
  },
  {id:3,
    name: "Sunset Garden Venue",
    location: "Baghdad, Iraq",
    capacity: "150 guests",
    price: "$350/day",
    image: "/s12.jpg",
  },
  {
    id:4,
    name: "Emerald Event Hall",
    location: "Baghdad, Iraq",
    capacity: "250 guests",
    price: "$450/day",
    image: "/s13.jpg",
  },
  {
    id:5,
    name: "Diamond Conference Center",
    location: "Baghdad, Iraq",
    capacity: "400 guests",
    price: "$600/day",
    image: "/s14.jpg",
  },
  { id:6,
    name: "Pearl Wedding Hall",
    location: "Baghdad, Iraq",
    capacity: "350 guests",
    price: "$550/day",
    image: "/s15.jpg",
  },
  {id:7,
    name: "Majestic Banquet",
    location: "Baghdad, Iraq",
    capacity: "180 guests",
    price: "$370/day",
    image: "/s16.jpg",
  },
  {id:8,
    name: "Elite Party Venue",
    location: "Baghdad, Iraq",
    capacity: "220 guests",
    price: "$420/day",
    image: "/s17.jpg",
  },
  {id:9,
    name: "Grand Horizon Hall",
    location: "Baghdad, Iraq",
    capacity: "500 guests",
    price: "$700/day",
    image: "/s18.jpg",
  },
];


  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
       <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#D6DAC8] max-md:text-2xl">Our Premium Halls</h1>
        <p className="text-lg text-[#D6DAC8] max-w-2xl mx-auto max-md:text-[18px]">
          Choose from our carefully designed Halls to make your event unforgettable.
        </p>
      </section>
   
      <div className="max-md:mt-[200px] bg-[#D6DAC8] border border-[#D6DAC8] rounded-t-[200px] p-6 grid grid-cols-1 md:grid-cols-6 gap-4 items-end mb-8 max-md:scale-75 max-md:h-[400px]">
        <Input placeholder="Search venues..." className="md:col-span-2 bg-[#002147] text-[#D6DAC8] w-[333px] ml-[55px]  max-md:w-[180px]" />

        <Select>
          <SelectTrigger className="bg-[#002147] text-[#D6DAC8]">
            <SelectValue placeholder="Hall Type" />
          </SelectTrigger>
          <SelectContent className="bg-[#D6DAC8]">
            <SelectItem value="wedding">Wedding</SelectItem>
            <SelectItem value="conference">Conference</SelectItem>
            <SelectItem value="party">Party</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="bg-[#002147] text-[#D6DAC8] ">
            <SelectValue placeholder="Capacity" />
          </SelectTrigger>
          <SelectContent className="bg-[#D6DAC8] ">
            <SelectItem value="small">UP To 100</SelectItem>
            <SelectItem value="medium">100-300</SelectItem>
            <SelectItem value="large">300+</SelectItem>
          </SelectContent>
        </Select>

        <div>
          <label className="block text-sm font-medium text-[#002147] mb-1">Price Range</label>
          <Slider
            value={price}
            onValueChange={setPrice}
            max={1000}//#d4af37
            step={50}
            className="[&>span]:bg-[#9CAFAA] "
          />
          <p className="text-sm text-[#002147] mt-1">${price[0]}</p>
        </div>

        <Button className="bg-[#002147] text-[#D6DAC8] hover:bg-[#3B4C6B] w-[130.4px] ">Apply Filters</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-md:-mt-[900px]">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="max-md:scale-75 bg-[#D6DAC8] rounded-xl border border-[#D6DAC8] shadow-md overflow-hidden relative max-md:-mt-[120px]"
          >
      
            <span className="absolute top-4 left-4 bg-[#002147] text-[#D6DAC8] text-sm font-bold px-3 py-1 rounded-md shadow-md">
              {venue.price}
            </span>

          
            <Image
              src={venue.image}
              alt={venue.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover rounded-t-xl "
            />

       
            <div className="p-5 text-[#002147]">
              <h3 className="text-lg font-bold">{venue.name}</h3>
              <p className="text-sm opacity-80">{venue.location}</p>
              <p className="text-sm mb-4">{venue.capacity}</p>
              <Link href="/Details">
              <Button className="bg-[#002147] text-[#D6DAC8] hover:bg-[#3B4C6B]">View Details</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-10 text-[#D6DAC8]">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="hover:bg-[#D6DAC8] max-md:-mt-[200px]"/>
              </PaginationItem>
            <PaginationItem>
              <PaginationLink href="# "className="hover:text-[#D6DAC8] hover:bg-[#D6DAC8]/20 transition rounded-t-[20px]" >1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="hover:text-[#D6DAC8] hover:bg-[#D6DAC8]/20 transition rounded-t-[20px]">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#"className="hover:text-[#D6DAC8] hover:bg-[#D6DAC8]/20 transition rounded-t-[20px]">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="hover:bg-[#D6DAC8]"/>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      

    </div>
  );
}