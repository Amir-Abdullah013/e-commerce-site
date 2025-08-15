"use client";

import React, { useState } from "react";
import Link from "next/link";

const AuthLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      setEmail("");
      setPassword("");
      return;
    }
    console.log("Email", email);
    console.log("Password", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-full max-w-md bg-white flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="w-full mb-6 text-left">
          <h1 className="text-3xl font-semibold text-[#0C0D34] mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Login to explore exciting auctions and unique fields.
          </p>
        </div>

        {/* Form */}
        <div className="w-full flex flex-col gap-5">
          {/* Email */}
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

{/* Password */}
<div className="flex flex-col gap-1">
  <label className="text-sm sm:text-base font-medium">Password</label>
  
  <div className="relative w-full">
    <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter your password"
      type={showPassword ? "text" : "password"}
      className="bg-[url('/images/password.png')] bg-[12px_center] bg-no-repeat bg-[length:19px_19px] bg-[#F8F7FB] pl-10 pr-10 h-10 w-full text-sm rounded-lg"
    />
    
    {/* Eye Toggle Icon */}
    <img
      src={showPassword ? "/images/eye-slashShow.png" : "/images/eye-slash.png"}
      alt="Toggle visibility"
      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer opacity-70 hover:opacity-100"
      onClick={() => setShowPassword(!showPassword)}
    />
  </div>
</div>

          {/* Keep me logged in */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm">
            <label className="flex items-center gap-2 cursor-text">
              <input type="checkbox" className="form-checkbox text-[#25A5B4] size-4 cursor-pointer" />
              Keep me logged in
            </label>
            <Link href="#" className="text-[#25A5B4] mt-2 sm:mt-0">
              Forgot password?
            </Link>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full mt-6 flex flex-col items-center gap-3">
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-full bg-[#25A5B4] text-white font-medium cursor-pointer text-base sm:text-lg"
          >
            Login to your Account
          </button>

          {/* Create Account */}
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

export default AuthLoginPage;
