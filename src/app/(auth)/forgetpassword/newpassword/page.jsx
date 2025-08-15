"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NewPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleNext = () => {
    const newErrors = {};

    // Validate password
    if (!formData.password) newErrors.password = "Password is required";

    // Validate confirm password
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

    setErrors(newErrors);

    // Navigate if no errors
    if (Object.keys(newErrors).length === 0) {
      console.log("Form data:", formData);
      router.push("/signup/createaccount4");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full min-h-screen bg-white overflow-hidden px-6">
      {/* Back Button */}
      <button className="flex justify-center items-center gap-3 absolute top-20 left-5 cursor-pointer">
        <Image src="/images/BackIcon.png" alt="Logo" width={9} height={100} />
        <p className="">Back</p>
      </button>
      {/* title */}
      <div className="flex flex-col gap-6 w-full max-w-md items-start">
        {/* Title */}
        <div className="flex flex-col gap-2 w-full">
          <p className="font-semibold text-lg sm:text-xl mt-8">
            Reset Your Password
          </p>
          <p className="text-sm text-gray-500 w-full">
            Enter a new password below to reset your account access.
          </p>
        </div>

        {/* Password Form */}
        <div className="flex flex-col gap-4 w-full">
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
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="flex justify-center items-center gap-2 w-full max-w-md mt-4"
      >
        <div className="flex justify-center items-center gap-2 bg-[#25A5B4] hover:bg-[#1d8f99] transition rounded-full py-3 w-[40%]">
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

export default NewPassword;
