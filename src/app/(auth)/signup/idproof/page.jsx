"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const IdProof = () => {
  const [formData, setFormData] = useState({
    nationalId: "",
  });

  const router = useRouter();
  const [errors, setErrors] = useState({});

  const stages = ["Personal Details", "ID Proof", "Password"];

  // Handle input changes with proper formatting
  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value.replace(/\D/g, ""); // remove non-digits

    // Format as 33203-1234567-7
    if (formattedValue.length > 5) {
      formattedValue =
        formattedValue.slice(0, 5) + "-" + formattedValue.slice(5);
    }
    if (formattedValue.length > 13) {
      formattedValue =
        formattedValue.slice(0, 13) + "-" + formattedValue.slice(13, 14);
    }
    if (formattedValue.length > 15)
      formattedValue = formattedValue.slice(0, 15);

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  // Validation for ID proof stage
  const validate = () => {
    const newErrors = {};
    if (!formData.nationalId) {
      newErrors.nationalId = "National ID is required";
    } else if (!/^\d{5}-\d{7}-\d{1}$/.test(formData.nationalId)) {
      newErrors.nationalId = "National ID must be in 33203-1234567-7 format";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      console.log("Form data:", formData);
      router.push("/signup/passwordset"); // navigate to next page
      
    }
  };
  const handleBack = () => {
    if (validate()) {
      router.back("/signup/personaldetails"); // navigate to next page
    }
  };

  return (
    <div className="flex flex-col items-center justify-evenly w-full min-h-screen bg-white overflow-hidden px-4">
      {/* Back Button */}
      <button onClick={handleBack} className="flex justify-center items-center gap-3 absolute top-20 left-5 cursor-pointer">
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
                  stage === "ID Proof" ? "text-[#25A5B4]" : "text-[#CCCCCC]"
                }`}
              >
                {stage}
              </p>
              <div
                className={`h-1 w-full rounded-full ${
                  stage === "ID Proof" ? "bg-[#25A5B4]" : "bg-[#CCCCCC]"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <p className="text-lg sm:text-xl font-semibold text-left flex">
          Verification Details
        </p>
      </div>

      {/* ID Proof Form */}
      <div className="flex flex-col justify-center items-center gap-4 w-full max-w-md">
        <div className="flex flex-col gap-2 w-full relative">
          <p className="font-semibold">National ID</p>
          <input
            name="nationalId"
            value={formData.nationalId}
            onChange={handleChange}
            placeholder="33203-1234567-7"
            type="text"
            className="pl-10 h-10 rounded-md w-full bg-[#F8F7FB] text-[#858699] bg-[url('/images/ProfileIcon.png')] bg-[12px_center] bg-no-repeat bg-[length:19px_19px] focus:outline-none focus:ring-2 focus:ring-[#25A5B4]"
          />
          {errors.nationalId && (
            <p className="text-red-500 text-xs">{errors.nationalId}</p>
          )}
        </div>
      </div>

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

export default IdProof;
