"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function SOSO() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const id = Number(searchParams.get("id"));

  const halls = [
    { id: 1, name: "Royal Wedding Hall", price: "$1000/day", capacity: "200 guests", image: "/s34.jpg", features: ["Stage", "Lighting", "Catering", "Parking"] },
    { id: 2, name: "Grand Conference Hall", price: "$1500/day", capacity: "300 guests", image: "/s36.jpg", features: ["Projector", "Sound System", "Wi-Fi", "Buffet"] },
  ];

  const packages = [
    { id: 1, name: "Luxury Wedding Package", price: "$5000", image: "/s35.jpg", features: ["Full Decor", "Premium Catering", "Live Music", "Photography"] },
    { id: 2, name: "Corporate Conference Package", price: "$4000", image: "/s37.jpg", features: ["AV Setup", "Lunch & Snacks", "Staff Support", "Decor"] },
  ];

  const data = type === "hall" ? halls.find((h) => h.id === id) : packages.find((p) => p.id === id);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    notes: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-bold text-red-600">
        Item not found!
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, itemType: type, itemId: id }),
      });
      setSuccess(true);
      setFormData({ fullName: "", phone: "", email: "", date: "", time: "", notes: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 max-md:h-[1100px] md:px-20 sm:px-0 lg:px-2  ">
      {/* Item Card */}
      <Card className="max-md:border max-md:border-[#002147] md:border-[#002147] lg:w-[500px] max-md:scale-75 lg:border-[2px] lg:border-[#D6DAC8] lg:shadow-lg lg:rounded-br-[200px] bg-[#002147] lg:rounded-tl-[200px]  max-md:z-10 md:z-50">
        <CardHeader>
          <CardTitle className="text-2xl text-[#D6DAC8] font-bold mx-auto max-md:whitespace-nowrap">
            {data.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <Image
            src={data.image}
            alt={data.name}
            width={400}
            height={600}
            className="rounded-t-[180px] rounded-b-[180px]  mx-auto h-[335.4px] object-cover mt-[10px] "
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

      {/* Booking Form */}
      <Card className="max-md:px-0 max-md:rounded-2xl lg:rounded-tl-[200px] bg-[#D6DAC8] lg:-ml-[400px] border border-[#D6DAC8]  max-md:h-[700px] max-md:scale-75">
        <CardHeader>
          <CardTitle className="text-2xl text-[#002147] font-bold lg:ml-[560px] max-md:-ml-[3px]">Booking Form</CardTitle>
        </CardHeader>
        <CardContent className="max-md:ml-[270px] md:-ml-[50px] lg:ml-[325px] -mt-[70px]"><form className="space-y-4 mt-[100px] ml-[50px] max-md:-ml-[275px]" onSubmit={handleSubmit}>
            <Input name="fullName" placeholder="Full Name" className="border-[#002147] lg:w-[500px]" value={formData.fullName} onChange={handleChange} />
            <Input name="phone" placeholder="Phone Number" className="border-[#002147] lg:w-[500px]" value={formData.phone} onChange={handleChange} />
            <Input name="email" placeholder="Email" type="email" className="border-[#002147] lg:w-[500px]" value={formData.email} onChange={handleChange} />
            <Input name="date" placeholder="Date" type="date" className="border-[#002147] lg:w-[500px]" value={formData.date} onChange={handleChange} />
            <Input name="time" placeholder="Time" type="time" className="border-[#002147] lg:w-[500px]" value={formData.time} onChange={handleChange} />
            <Textarea name="notes" placeholder="Additional Notes" className="border-[#002147] lg:w-[500px]" value={formData.notes} onChange={handleChange} />
            <Button type="submit" className="bg-[#002147] text-[#D6DAC8] hover:bg-[#3B4C6B] w-full lg:w-[500px] mt-[16px]">
              {loading ? "Booking..." : "Confirm Booking"}
            </Button>
            {success && <p className="text-green-600 font-bold mt-2">Booking successful!</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}