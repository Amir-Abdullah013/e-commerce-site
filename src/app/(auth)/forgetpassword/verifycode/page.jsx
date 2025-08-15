"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const VerifyCode = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const router = useRouter();

  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleNext = () => {
    const enteredCode = code.join("");
    if (enteredCode.length === 4) {
      router.push("/forgetpassword/forgetpassword3");
    } else {
      alert("Please enter a 4-digit code");
    }
  };

  return (
    <div className="flex flex-col flex-1 min-h-screen justify-evenly items-center gap-8 px-4">
      {/* Back Button */}
      <button className="flex justify-center items-center gap-3 absolute top-20 left-5 cursor-pointer">
        <Image src="/images/BackIcon.png" alt="Logo" width={9} height={100} />
        <p className="">Back</p>
      </button>
      {/* Title */}
      <div className="flex flex-col gap-3 text-center justify-center items- max-w-sm ">
        <p className="font-semibold text-lg sm:text-xl mt-8">
          Verification Required
        </p>
        <p className="text-sm text-gray-500 text-center">
          We’ve sent a password reset link to alexjhons@mumtlkaty.com
        </p>
      </div>

      {/* 6-digit Code Input */}
      <div className="flex flex-col justify-center gap-3">
        <p className="font-medium text-left">Enter OTP</p>
        <div className="flex justify-center gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength={1}
              className="w-12 h-12 text-center rounded-lg bg-[#F5F5FB] text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#25A5B4]"
            />
          ))}
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

export default VerifyCode;
