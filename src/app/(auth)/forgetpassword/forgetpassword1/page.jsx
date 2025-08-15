"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ForgetPassword1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validateInput = () => {
    if (!inputValue.trim()) {
      setError("Email or phone is required");
      return false;
    }

    // Basic email/phone validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,15}$/; // allows 10–15 digits

    if (!emailRegex.test(inputValue) && !phoneRegex.test(inputValue)) {
      setError("Enter a valid email or phone number");
      return false;
    }

    setError("");
    return true;
  };

  const handleNext = () => {
    if (validateInput()) {
      router.push("/forgetpassword/forgetpassword2"); // Navigate to OTP page
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-evenly items-center px-4 py-8 bg-white">
      {/* Back Button */}
      <button className="flex justify-center items-center gap-3 absolute top-20 left-5 cursor-pointer">
        <Image src="/images/BackIcon.png" alt="Logo" width={9} height={100} />
        <p className="">Back</p>
      </button>
      {/* Title */}
      <div className="w-full max-w-md flex flex-col gap-2 text-center sm:text-left">
        <p className="font-semibold text-lg sm:text-xl">Forgot Password?</p>
        <p className="text-sm text-gray-500">
          Don’t worry! Enter your registered email address or phone number, and
          we’ll help you reset your password.
        </p>
      </div>

      {/* Input Field */}
      <div className="w-full max-w-md flex flex-col gap-2">
        <label className="text-sm font-medium">Email or Phone</label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter email or phone"
          type="text"
          className="w-full h-11 bg-[#F8F7FB] rounded-lg pl-4 focus:outline-none focus:ring-2 focus:ring-[#25A5B4]"
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="w-full max-w-md flex justify-center"
      >
        <div className="flex justify-center items-center gap-2 bg-[#25A5B4] hover:bg-[#1d8f99] transition rounded-full py-3 px-10 w-full sm:w-auto">
          <span className="text-white font-medium">Send Reset Link</span>
          <Image
            src="/images/nextIconOnBoarding.png"
            alt="Next Icon"
            width={8}
            height={16}
          />
        </div>
      </button>
    </div>
  );
};

export default ForgetPassword1;
