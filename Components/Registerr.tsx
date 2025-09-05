"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Registerr() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // check if user already exists
      const res = await fetch("http://localhost:5000/users?email=${email}");
      const existingUser = await res.json();

      if (existingUser.length > 0) {
        setError("Email already registered");
        return;
      }

      // add new user
      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      router.push("/Login");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      {/* زر الرجوع */}
      <div>
        <Link href="/Home">
          <Button
            variant="default"
            className="bg-[#002147] text-[#D6DAC8] hover:bg-[#002147] hover:text-[#9CAFAA] rotate-180 text-[40px] ml-[30px] mt-[15px]"
          >
            →
          </Button>
        </Link>
      </div>

      {/* فورم التسجيل */}
      <div className="min-h-screen flex items-center justify-center bg-[#002147] px-4 max-md:scale-75">
        <div className="bg-[#D6DAC8] p-8 rounded-t-[250px] shadow-lg w-full max-w-md text-[#002147] h-[600px]">
          <h2 className="text-2xl font-bold mb-6 text-center mt-[30px] text-[#002147]">
            Join To The World
          </h2>
          <form onSubmit={handleRegister} className="space-y-4 mt-[60px]">
            <div>
              <label className="block mb-1">Full Name</label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1">Confirm Password</label>
              <Input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#002147] hover:bg-[#3B4C6B] text-bold text-[#D6DAC8]"
            >
              Create Account
            </Button>
          </form>

          {error && (
            <p className="text-center text-sm text-red-600 mt-2">{error}</p>
          )}<p className="text-center text-sm text-white mt-4">
            Already have an account?
            <a href="/Login" className="text-[#002147] hover:underline ml-1">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}