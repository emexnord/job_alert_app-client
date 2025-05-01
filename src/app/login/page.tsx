"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaRegEyeSlash } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push(callbackUrl);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="flex w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg my-4 md:my-8">
        {/* Left side - gradient background with logo and tagline */}
        <div className="hidden md:flex md:w-1/2 flex-col justify-between bg-gradient-to-r from-orange-100 to-amber-100 p-8 lg:p-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div>
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={120}
                    height={50}
                    className="h-full"
                  />
                </Link>
              </div>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mt-8">
              Instant job alerts.
              <br /> Apply first - get hired faster.
            </h1>
          </div>

          <div className="mt-auto">
            <blockquote className="text-sm">
              "I am happily surprised because all of the 3 hires are really high
              performers in my company, at Google Research in Ghana. And to me
              it just shows the potential and I think they will excel wherever
              they go."
            </blockquote>
            <p className="font-semibold mt-2">Abdoulaye Diack — Google Ghana</p>
          </div>
        </div>

        {/* Right side - login form */}
        <div className="w-full md:w-1/2 bg-white p-6 lg:p-12 flex flex-col items-center justify-center">
          {/* Mobile logo */}
          <div className="flex md:hidden justify-center mb-8">
            <div>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={120}
                  height={50}
                  className="h-full"
                />
              </Link>
            </div>
          </div>

          <div className="max-w-md mx-auto w-full">
            <h2 className="text-2xl font-bold text-center md:text-center">
              Log in or create a free account
            </h2>
            <p className="text-gray-600 mt-1 mb-8 text-center md:text-left md:hidden">
              Instant job alerts. Apply first, get hired faster.
            </p>

            <form className="py-6">
              <div className="mb-6">
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative mb-2">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEyeSlash size={20} />
                  ) : (
                    <LuEye size={20} />
                  )}
                </button>
              </div>
              <div className="flex justify-end mb-6">
                <Link href="#" className="text-sm text-black font-medium">
                  Forgot Password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors md:mb-0 mb-4"
                disabled={isLoading}
                onClick={handleSubmit}
              >
                Continue
              </Button>

              <div className="relative flex items-center justify-center my-2">
                <div className="border-t border-gray-600 w-full"></div>
                <span className="bg-white px-3  text-semibold text-sm">OR</span>
                <div className="border-t  border-gray-600 w-full"></div>
              </div>

              <Button
                type="button"
                variant={"outline"}
                className="w-full p-2 my-3 border border-gray-300 rounded-md flex items-center justify-left gap-2 hover:bg-gray-50 transition-colors"
                disabled={isLoading}
              >
                <FaGoogle className="" />
                Continue with Google Account
              </Button>

              <Button
                type="button"
                variant={"outline"}
                className="w-full p-2 my-3 border border-gray-300 rounded-md flex items-center justify-left gap-2 hover:bg-gray-50 transition-colors"
                disabled={isLoading}
              >
                <SlSocialLinkedin className="" />
                Continue with Linkedin Account
              </Button>
            </form>

            <p className="text-gray-500 text-sm text-center mt-6">
              By continuing you are registering and/or authenticating with blink
              and thereby accepting our{" "}
              <Link href="#" className="text-gray-600 underline">
                terms of service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-gray-600 underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
