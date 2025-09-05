"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Loginn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // 🔹 استدعاء الـ JSON Server بشكل مباشر
      const res = await fetch("http://localhost:5000/users");
      const users = await res.json();

      // 🔹 ابحث عن المستخدم
      const user = users.find(
        (u: any) => u.email === email && u.password === password
      );

      if (!user) {
        setError("Invalid email or password");
        return;
      }

      // ✅ إذا صحيح
      router.push("/Home");
    } catch (err) {
      setError("Server error, please check JSON Server.");
    }
  };

  return (
    <div>
      <div>
        <Link href="/Home">
          <Button className="bg-[#002147] text-[#D6DAC8] rotate-180 text-[40px] ml-[30px] mt-[15px]">
            →
          </Button>
        </Link>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-[#002147] px-4 max-md:scale-75">
        <div className="bg-[#D6DAC8] p-8 rounded-t-[250px] shadow-lg w-full max-w-md text-[#002147] h-[500px]">
          <h2 className="text-2xl font-bold mb-6 text-center mt-[100px] text-[#002147]">
            Welcome back
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full bg-[#002147] text-[#D6DAC8]">
              Login
            </Button>
          </form>

          {error && (
            <p className="text-center text-sm text-red-600 mt-2">{error}</p>
          )}

          <p className="text-center text-sm text-white mt-4">
            Don’t have an account?
            <a href="/Register" className="text-[#002147] hover:underline ml-1">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}