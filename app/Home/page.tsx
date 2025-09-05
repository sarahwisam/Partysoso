import CTA from "Components/CTA";
import Feature from "Components/Features";
import Features from "Components/Features";
import Footer from "Components/Footer";
import Hero from "Components/Hero";
import HowItWork from "Components/HowItWork";
import Navbar from "Components/Navbar";

export default function Home() {
  return (

    <main className="w-full min-h-screen bg-[#002147] overflow-x-hidden ">


<Navbar/>
<Hero/>
<Features/>
<HowItWork/>
<CTA/>
<Footer/>
    </main>

  )};