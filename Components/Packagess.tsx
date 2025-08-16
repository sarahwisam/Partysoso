"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function Packagess() {
   
    const [category, setCategory] = useState("all");

const packages = [
  {
    id: 1,
    name: "Luxury Package 1",
    price: "$500",
    features: ["Decor", "Catering", "Lighting", "Sound System"],
    image: "/s25.jpg",
    category: "wedding",
  },
  {
    id: 2,
    name: "Luxury Package 2",
    price: "$600",
    features: ["Decor", "Catering", "Lighting", "Sound System"],
    image: "/s26.jpg",
    category: "conference",
  },
  {
    id: 3,
    name: "Luxury Package 3",
    price: "$700",
    features: ["Decor", "Catering", "Lighting", "Sound System"],
    image: "/s27.jpg",
    category: "wedding",
  },
  {
    id: 4,
    name: "Luxury Package 4",
    price: "$800",
    features: ["Decor", "Catering", "Lighting", "Sound System"],
    image: "/s28.jpg",
    category: "conference",
  },
  {
    id: 5,
    name: "Luxury Package 5",
    price: "$900",
    features: ["Decor", "Catering", "Lighting", "Sound System"],
    image: "/s29.jpg",
    category: "wedding",
  },
  {
    id: 6,
    name: "Luxury Package 6",
    price: "$1000",
    features: ["Decor", "Catering", "Lighting", "Sound System"],
    image: "/s30.jpg",
    category: "conference",
  },
  {
    id: 7,
    name: "Luxury Package 7",
    price: "$1100",
    features: ["Decor", "Catering", "Lighting", "Sound System"],
    image: "/s31.jpg",
    category: "wedding",
  },
  {
    id: 8,
    name: "Luxury Package 8",
    price: "$1200",
    features: ["Decor", "Catering", "Lighting", "Sound System"],
    image: "/s32.jpg",
    category: "conference",
  },
  {
    id: 9,
    name: "Luxury Package 9",
    price: "$1300",
    features: ["Decor", "Catering", "Lighting", "Sound System"],
    image: "/s33.jpg",
    category: "wedding",
  },
];

const filteredPackages =
  category === "all"
    ? packages
    : packages.filter((pkg) => pkg.category === category);
  return (
    <div className="bg-[#002147] text-[#D6DAC8] max-auto px-6 md:px-20 py-20 space-y-20 w-[1416px] ml-[50px]">
      
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#D6DAC8] max-md:text-2xl max-md:-ml-[1150px]">Our Premium Packages</h1>
        <p className="text-lg text-[#D6DAC8] max-w-2xl mx-auto max-md:text-[18px] max-md:-ml-[230px]">
          Choose from our carefully <br className="block lg:hidden"/>designed packages to make <br className="block lg:hidden"/>your event unforgettable.
        </p>
      </section>

    
      <section>
        <Tabs defaultValue="all" className="w-full" onValueChange={setCategory}>
          <TabsList className="grid grid-cols-1 md:grid-cols-3 bg-[#D6DAC8] rounded-t-[700px] p-1 h-[105px] max-md:scale-75 max-md:-ml-[104px] max-md:w-[430px]">
            <TabsTrigger value="all" className="max-md:w-[150px] max-md:ml-[136px] w-[350px] ml-[100px] text-beige data-[state=active]:bg-[#002147] text-[#002147] data-[state=active]:text-[#D6DAC8]">
              All
            </TabsTrigger>
            <TabsTrigger value="wedding" className="max-md:w-[150px] max-md:ml-[136px] w-[350px] ml-[50px] text-beige data-[state=active]:bg-[#002147] text-[#002147] data-[state=active]:text-[#D6DAC8]">
              Weddings
            </TabsTrigger>
            <TabsTrigger value="conference" className="max-md:w-[150px] max-md:ml-[136px] w-[350px]  text-beige data-[state=active]:bg-[#002147] text-[#002147] data-[state=active]:text-[#D6DAC8]">
              Conferences
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </section>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {filteredPackages.map((pkg) => (
          <Card
            key={pkg.id}
            className="bg-[#D6DAC8] border border-[#D6DAC8] shadow-lg rounded-t-xl overflow-hidden max-md:scale-75 max-md:w-[352px] max-md:-ml-[65px] max-md:h-[470px] max-md:-mt-[130px] max-md:gap-6"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-[#002147]">{pkg.name}</CardTitle>
              <p className="text-gold font-bold">{pkg.price}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-[#002147] max-md:h-[100px]">
                {pkg.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <Link href="Details">
              <Button
                className="mt-4 w-full bg-[#002147] text-[#D6DAC8] hover:bg-[#3B4C6B]"
              >
                View Details
              </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>

      
      <div className="hidden lg:block">
      <section className=" bg-[#001f3f] text-[#D6DAC8] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 ">
        <div>
          <h2 className="text-3xl font-bold ">Limited Time Offer!</h2>
          <p className="mt-2 max-w-lg">
            Book now and get 15% off your dream event package. Offer valid until the end of this
            month.
          </p>
        </div>
        <Link href="/Booking?type=package&id=1">
        <Button className="bg-[#D6DAC8] text-[#002147] hover:bg-[#9CAFAA]">Book Now</Button>
        </Link>
      </section>
</div>
    
      <section className="max-md:-ml-[1150px] max-md:scale-75 ">
        <h2 className="text-2xl font-bold text-center mb-6 max-md:-ml-[5px] max-md:-mt-[100px]">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto max-md:w-[370px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is included in the packages?</AccordionTrigger>
            <AccordionContent>
              Each package includes venue decoration, catering, lighting, and a sound system.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I customize my package?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer full customization to fit your preferences and event theme.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}