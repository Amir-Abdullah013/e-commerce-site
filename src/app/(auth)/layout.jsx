"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AuthLayout = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Function to handle Login
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      setEmail(""), setPassword("");
      return;
    }

    console.log("Email", email);
    console.log("Password", password);
    setEmail(""), setPassword("");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-2 h-screen w-full">
      {/* Left Image */}
      <div className="hidden md:block">
        <Image
          className="object-cover w-full h-full"
          src="/images/background-auth.jpg"
          height={2000}
          width={700}
          alt="Background"
        />
      </div>

      {/* Right Side Form */}
      <div className="flex flex-col justify-center items-center h-screen bg-white px-6 py-8 sm:px-10">
        <div className="w-full max-w-md mb-6 text-left">
          {/* Welcome Back Text */}
          <h1 className="text-3xl font-semibold text-[#0C0D34] mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Login to explore exciting auctions and unique fields.
          </p>
        </div>
        {/* Email Input Field */}
        <div className="w-full max-w-md flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base font-medium">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email, username or phone"
              type="email"
              className="bg-[url('/images/signin.png')] bg-[12px_center] bg-no-repeat bg-[length:19px_19px] bg-[#F8F7FB] pl-10 h-10 w-full text-sm rounded-lg border-none"
            />
          </div>
          {/* Password Input Field */}
          <div className="flex flex-col gap-1">
            <label className="text-sm sm:text-base font-medium">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              type="password"
              className="bg-[url('/images/password.png')] bg-[12px_center] bg-no-repeat bg-[length:19px_19px] bg-[#F8F7FB] pl-10 h-10 w-full text-sm rounded-lg"
            />
          </div>
          {/* Check Box to keep logged in */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="form-checkbox text-[#25A5B4] size-4"
              />
              Keep me logged in
            </label>
            <Link href="#" className="text-[#25A5B4] mt-2 sm:mt-0">
              Forgot password?
            </Link>
          </div>
        </div>
        {/* Login Button */}
        <div className="w-full max-w-md mt-6 flex flex-col items-center gap-3">
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-full bg-[#25A5B4] text-white font-medium text-base sm:text-lg"
          >
            Login to your Account
          </button>
          {/* Create Account Text */}
          <div className="text-sm sm:text-base flex items-center gap-1">
            <p>New to Mumtlikaty?</p>
            <Link href="/register" className="text-[#25A5B4] font-semibold">
              Create Account
            </Link>
          </div>

          <p className="text-sm text-gray-400">Or</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
