"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useState, useEffect } from "react";
import Link from "next/link";

interface VenueType {
  id: number;
  name: string;
  location: string;
  capacity: string;
  price: number;
  image: string;
  type: string; // wedding, conference, party
}

export default function Venues() {
  const [venues, setVenues] = useState<VenueType[]>([]);
  const [filteredVenues, setFilteredVenues] = useState<VenueType[]>([]);
  const [price, setPrice] = useState([0, 1000]);
  const [hallType, setHallType] = useState("");
  const [capacityFilter, setCapacityFilter] = useState("");

  // Fetch data from JSON Server
  useEffect(() => {
    fetch("http://localhost:5000/venues") // رابط JSON Server
      .then((res) => res.json())
      .then((data) => setVenues(data));
  }, []);

  // Apply filters dynamically
  useEffect(() => {
    let temp = [...venues];

    // Filter by type
    if (hallType) {
      temp = temp.filter((v) => v.type === hallType);
    }

    // Filter by capacity
    if (capacityFilter) {
      temp = temp.filter((v) => {
        const cap = parseInt(v.capacity.replace(/\D/g, ""));
        if (capacityFilter === "small") return cap <= 100;
        if (capacityFilter === "medium") return cap > 100 && cap <= 300;
        if (capacityFilter === "large") return cap > 300;
        return true;
      });
    }

    // Filter by price
    temp = temp.filter((v) => v.price >= price[0] && v.price <= price[1]);

    setFilteredVenues(temp);
  }, [venues, hallType, capacityFilter, price]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-20">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#D6DAC8] max-md:text-2xl">
          Our Premium Halls
        </h1>
        <p className="text-lg text-[#D6DAC8] max-w-2xl mx-auto max-md:text-[18px]">
          Choose from our carefully designed Halls to make your event unforgettable.
        </p>
      </section>

      {/* Filters */}
      <div className="max-md:mt-[200px] bg-[#D6DAC8] border border-[#D6DAC8] rounded-t-[200px] p-6 grid grid-cols-1 md:grid-cols-6 gap-4 items-end mb-8 max-md:scale-75 max-md:h-[400px]">
        <Input
          placeholder="Search venues..."
          className="md:col-span-2 bg-[#002147] text-[#D6DAC8] w-[333px] ml-[55px] max-md:w-[180px]"
          onChange={(e) =>
            setFilteredVenues(
              venues.filter((v) =>
                v.name.toLowerCase().includes(e.target.value.toLowerCase())
              )
            )
          }
        />

        <Select onValueChange={(val) => setHallType(val)}>
          <SelectTrigger className="bg-[#002147] text-[#D6DAC8]">
            <SelectValue placeholder="Hall Type" />
          </SelectTrigger>
          <SelectContent className="bg-[#D6DAC8]">
            <SelectItem value="wedding">Wedding</SelectItem>
            <SelectItem value="conference">Conference</SelectItem>
            <SelectItem value="party">Party</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(val) => setCapacityFilter(val)}>
          <SelectTrigger className="bg-[#002147] text-[#D6DAC8]">
            <SelectValue placeholder="Capacity" />
          </SelectTrigger>
          <SelectContent className="bg-[#D6DAC8]">
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
            max={1000}
            step={50}
            className="[&>span]:bg-[#9CAFAA]"
          />
          <p className="text-sm text-[#002147] mt-1">${price[0]} - ${price[1]}</p>
        </div>

        <Button
          className="bg-[#002147] text-[#D6DAC8] hover:bg-[#3B4C6B] w-[130.4px]"
          onClick={() => setFilteredVenues(filteredVenues)}
        >
          Apply Filters
        </Button>
      </div>

      {/* Venue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-md:-mt-[900px]">
        {filteredVenues.map((venue) => (
          <div
            key={venue.id}
            className="max-md:scale-75 bg-[#D6DAC8] rounded-xl border border-[#D6DAC8] shadow-md overflow-hidden relative max-md:-mt-[120px]"
          >
            <span className="absolute top-4 left-4 bg-[#002147] text-[#D6DAC8] text-sm font-bold px-3 py-1 rounded-md shadow-md">
              ${venue.price}
            </span>
            <Image
              src={venue.image}
              alt={venue.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-5 text-[#002147]">
              <h3 className="text-lg font-bold">{venue.name}</h3>
              <p className="text-sm opacity-80">{venue.location}</p>
              <p className="text-sm mb-4">{venue.capacity} guests</p>
              <Link href="/Details">
                <Button className="bg-[#002147] text-[#D6DAC8] hover:bg-[#3B4C6B]">View Details</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
   {/* Pagination */}
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