'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Loginn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#002147] px-4 max-md:scale-75">
      <div className="bg-[#D6DAC8] p-8 rounded-t-[250px] shadow-lg w-full max-w-md text-[#002147] h-[500px]">
        <h2 className="text-2xl font-bold mb-6 text-center mt-[100px] text-[#002147]">Welcome back</h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <Input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <Input type="password" placeholder="Enter your password" />
          </div>

          <Button className="w-full bg-[#002147] hover:bg-[#3B4C6B] text-[#D6DAC8]">Login</Button>
        </form>

        <p className="text-center text-sm text-white mt-4">
          Don’t have an account?
          <a href="/Register" className="text-[#002147] hover:underline ml-1">Register</a>
        </p>
      </div>
    </div>
  )
}