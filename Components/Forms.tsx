// app/booking/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Forms() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type"); 
  const id = Number(searchParams.get("id"));

  
  const halls = [
    {
      id: 1,
      name: "Royal Wedding Hall",
      price: "$1000/day",
      capacity: "200 guests",
      image: "/s34.jpg",
      features: ["Stage", "Lighting", "Catering", "Parking"],
    },
    {
      id: 2,
      name: "Grand Conference Hall",
      price: "$1500/day",
      capacity: "300 guests",
      image: "/s36.jpg",
      features: ["Projector", "Sound System", "Wi-Fi", "Buffet"],
    },
  ];

  
  const packages = [
    {
      id: 1,
      name: "Luxury Wedding Package",
      price: "$5000",
      image: "/s35.jpg",
      features: ["Full Decor", "Premium Catering", "Live Music", "Photography"],
    },
    {
      id: 2,
      name: "Corporate Conference Package",
      price: "$4000",
      image: "/s37.jpg",
      features: ["AV Setup", "Lunch & Snacks", "Staff Support", "Decor"],
    },
  ];

  
  const data =
    type === "hall"
      ? halls.find((h) => h.id === id)
      : packages.find((p) => p.id === id);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-bold text-red-600">
        Item not found!
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2  max-md:-mt-[100px] max-md:h-[1100px]">
  
    
     
     <Card className="max-md:border max-md:border-[#002147] max-md:scale-75 border-[2px] border-[#D6DAC8] md:shadow-lg md:rounded-br-[200px] bg-[#002147] md:rounded-tl-[200px] w-[500px] max-md:z-10  md:z-50 max-md:-ml-[60px] max-md:w-[400px]">
      <CardHeader>
          <CardTitle className="text-2xl text-[#D6DAC8] font-bold ml-[100px] max-md:whitespace-nowrap max-md:ml-[75px]">
            {data.name}
          </CardTitle>
        </CardHeader>
      <CardContent className="w-full">
  
          <Image
            src={data.image}
            alt={data.name}
            width={400}
            height={600}
            className="rounded-t-[180px] rounded-b-[180px]  w-[400px] h-[335.4px] object-cover mt-[10px] ml-[30px] max-md:ml-[37px]"
          />
            
    
          <div className="mt-4 text-[#D6DAC8] space-y-2">
            <p className="text-lg font-semibold">{data.price}</p>
            {"capacity" in data && (
              <p className="text-sm">Capacity: data.capacity</p>
            )}
            <ul className="list-disc list-inside text-sm space-y-1">
              {data.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </CardContent>
    
    
      </Card>

      
      <Card className=" max-md:rounded-2xl bg-[#D6DAC8] md:w-[1026px] -ml-[400px] border border-[#D6DAC8] max-md:w-[650px] max-md:h-[700px]  max-md:-ml-[155px] max-md:scale-50 max-md:-mt-[180px]">
        <CardHeader>
          <CardTitle className="text-2xl text-[#002147] font-bold ml-[560px] max-md:-ml-[3px]">
            Booking Form
          </CardTitle>
        </CardHeader>
        <CardContent className="ml-[325px] -mt-[70px]">
          <form className="space-y-4 mt-[100px] ml-[50px] max-md:-ml-[275px]">
            <Input placeholder="Full Name" className="border-[#002147] w-[500px]" />
            <Input placeholder="Phone Number" className="border-[#002147] w-[500px]" />
            <Input placeholder="Email" type="email" className="border-[#002147] w-[500px]" />
            <Input placeholder="Date" type="date" className="border-[#002147] w-[500px]" />
            <Input placeholder="Time" type="time" className="border-[#002147] w-[500px]" />



            <Textarea placeholder="Additional Notes" className="border-[#002147] w-[500px]" />
            <Link href="/Filters">
            <Button
              type="submit"
              className="bg-[#002147] text-[#D6DAC8] hover:bg-[#3B4C6B] w-full w-[500px] mt-[16px]"
            >
              Confirm Booking
            </Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}