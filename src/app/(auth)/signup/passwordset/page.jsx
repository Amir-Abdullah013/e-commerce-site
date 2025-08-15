"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PasswordSet = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const stages = ["Personal Details", "ID Proof", "Password"];

  const handleNext = () => {
    const newErrors = {};

    // Check password
    if (!formData.password) newErrors.password = "Password is required";

    // Check confirm password
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";

    // Check if passwords match
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Update errors state
    setErrors(newErrors);

    // Only navigate if there are no errors
    if (Object.keys(newErrors).length === 0) {
      console.log("Form data:", formData);
      router.push("/signup/createaccount4"); // Navigate to next page
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full min-h-screen bg-white overflow-hidden px-4">
      {/* Back Button */}
      <button className="flex justify-center items-center gap-3 absolute top-20 left-5 cursor-pointer">
        <Image src="/images/BackIcon.png" alt="Logo" width={9} height={100} />
        <p className="">Back</p>
      </button>

      {/* Heading */}
      <p className="font-bold text-xl sm:text-2xl text-center mt-4">
        Create Your Account
      </p>

      {/* Stage Checker */}
      <div className="flex flex-col gap-6 w-full max-w-md">
        <div className="flex justify-between gap-4">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-2 w-1/3"
            >
              <p
                className={`text-xs sm:text-sm text-center ${
                  stage === "Password" ? "text-[#25A5B4]" : "text-[#CCCCCC]"
                }`}
              >
                {stage}
              </p>
              <div
                className={`h-1 w-full rounded-full ${
                  stage === "Password" ? "bg-[#25A5B4]" : "bg-[#CCCCCC]"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <p className="text-lg sm:text-xl font-semibold text-left">
          Secure Your Account
        </p>
      </div>

      {/* Password Form */}
      <div className="flex flex-col justify-center items-center gap-4 w-full max-w-md">
        {/* Password */}
        <div className="flex flex-col gap-1 w-full">
          <label className="text-sm sm:text-base font-medium">Password</label>
          <div className="relative w-full">
            <input
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              className="bg-[url('/images/password.png')] bg-[12px_center] bg-no-repeat bg-[length:19px_19px] bg-[#F8F7FB] pl-10 pr-10 h-10 w-full text-sm rounded-lg"
            />
            <img
              src={
                showPassword
                  ? "/images/eye-slashShow.png"
                  : "/images/eye-slash.png"
              }
              alt="Toggle visibility"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer opacity-70 hover:opacity-100"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col gap-1 w-full">
          <label className="text-sm sm:text-base font-medium">
            Confirm Password
          </label>
          <div className="relative w-full">
            <input
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              placeholder="Re-enter your password"
              type={showPassword ? "text" : "password"}
              className="bg-[url('/images/password.png')] bg-[12px_center] bg-no-repeat bg-[length:19px_19px] bg-[#F8F7FB] pl-10 pr-10 h-10 w-full text-sm rounded-lg"
            />
            <img
              src={
                showPassword
                  ? "/images/eye-slashShow.png"
                  : "/images/eye-slash.png"
              }
              alt="Toggle visibility"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer opacity-70 hover:opacity-100"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      {/* Next Button */}
       {/* Next Button */}
      <div className="flex flex-col gap-5 justify-center items-center">
            <button
              onClick={handleNext}
              className="flex justify-center items-center gap-2 w-full max-w-md mt-4"
            >
              <div className="flex justify-center items-center gap-2 bg-[#25A5B4] hover:bg-[#1d8f99] transition rounded-full py-3 w-full">
                <span className="text-white font-semibold">Next</span>
                <Image
                  src="/images/nextIconOnBoarding.png"
                  alt="Next Icon"
                  width={8}
                  height={16}
                />
              </div>
            </button>
            <div className="flex justify-center items-center gap-1">
              <p className="text-xs">Didn't recieve the code?</p>
              <a href="" className="text-sm  text-[#25A5B4]"> Resend Code</a>
            </div>
            </div>
    </div>
  );
};

export default PasswordSet;
