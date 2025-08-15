"use client";

import React, { useState } from "react";
import Image from "next/image";
import  {useRouter} from "next/navigation"

const PersonalDetails = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
const [errors, setErrors] = useState({});
  const stages = ["Personal Details", "ID Proof", "Password"];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone number formatting: 03XX-XXXXXXX
    if (name === "phone") {
      let cleaned = value.replace(/\D/g, ""); // Remove non-digits
      if (cleaned.length > 4) {
        cleaned = cleaned.slice(0, 4) + "-" + cleaned.slice(4, 11);
      }
      setFormData({ ...formData, [name]: cleaned.slice(0, 12) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Simple form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone || formData.phone.length !== 12)
      newErrors.phone = "Phone number must be in 03XX-XXXXXXX format";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleNext = () => {
  if (validate()) {
    console.log("Form data:", formData);
    router.push("/signup/createaccount2"); // navigate to next page
  }
};


  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full min-h-screen bg-white overflow-hidden px-4">
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
                  stage === "Personal Details" ? "text-[#25A5B4]" : "text-[#CCCCCC]"
                }`}
              >
                {stage}
              </p>
              <div
                className={`h-1 w-full rounded-full ${
                  stage === "Personal Details" ? "bg-[#25A5B4]" : "bg-[#CCCCCC]"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <p className="text-lg sm:text-xl font-semibold text-left">
          Tell us about yourself
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col justify-center items-center gap-4 w-full max-w-md">
        {/* Full Name */}
        <div className="flex flex-col gap-2 w-full relative">
          <p className="font-semibold">Full Name</p>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            type="text"
            className="pl-10 h-10 rounded-md w-full bg-[#F8F7FB] text-[#858699] bg-[url('/images/ProfileIcon.png')] bg-[12px_center] bg-no-repeat bg-[length:19px_19px] focus:outline-none focus:ring-2 focus:ring-[#25A5B4]"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 w-full relative">
          <p className="font-semibold">Email</p>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            type="email"
            className="pl-10 h-10 rounded-md w-full bg-[#F8F7FB] text-[#858699] bg-[url('/images/signin.png')] bg-[12px_center] bg-no-repeat bg-[length:19px_19px] focus:outline-none focus:ring-2 focus:ring-[#25A5B4]"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2 w-full relative">
          <p className="font-semibold">Phone</p>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0312-1234567"
            type="text"
            maxLength={12}
            className="pl-10 h-10 rounded-md w-full bg-[#F8F7FB] text-[#858699] bg-[url('/images/PhoneIcon.png')] bg-[12px_center] bg-no-repeat bg-[length:19px_19px] focus:outline-none focus:ring-2 focus:ring-[#25A5B4]"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Button */}
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
    </div>
  );
};

export default PersonalDetails;
