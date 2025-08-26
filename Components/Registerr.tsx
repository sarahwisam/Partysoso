'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function Registerr() {
  return (
<div>
     <div >
    
              <Link href="/Home">
        <Button variant="default" className="bg-[#002147] text-[#D6DAC8] hover:bg-[#002147] hover:text-[#9CAFAA] rotate-180 text-[40px] ml-[30px] mt-[15px]">  →   </Button>
              </Link>
              </div>

    <div className="min-h-screen flex items-center justify-center bg-[#002147] px-4 max-md:scale-75">
      <div className="bg-[#D6DAC8] p-8 rounded-t-[250px] shadow-lg w-full max-w-md text-[#002147] h-[600px]">
        <h2 className="text-2xl font-bold mb-6 text-center mt-[30px] text-[#002147]">Join To The World</h2>

        <form className="space-y-4 mt-[60px]">
          <div>
            <label className="block mb-1">Full Name</label>
            <Input type="text" placeholder="Enter your full name" />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <Input type="email" placeholder="Enter your email" />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <Input type="password" placeholder="Create a password" />
          </div>

          <div>
            <label className="block mb-1">Confirm Password</label>
            <Input type="password" placeholder="Confirm your password" />
          </div>

          <Button className="w-full bg-[#002147] hover:bg-[#3B4C6B] text-bold text-[#D6DAC8]">Create Account</Button>
        </form>

        <p className="text-center text-sm text-white mt-4">
          Already have an account?
          <a href="/Login" className="text-[#002147] hover:underline ml-1">Login</a>
        </p>
      </div>
    </div>
    </div>
  )
}