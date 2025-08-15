"use client";
import React, { useState } from "react";
import Image from "next/image";
import RightDesign from "../components/auth/rightdesign";
import LeftDesign from "../components/auth/leftdesign";

const Page = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelect = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">
      <LeftDesign />

      {/* Middle Content */}
      <div className="flex flex-1 min-h-screen justify-center items-center">
    <div className="flex flex-col gap-10 items-center max-w-md w-full px-4 text-center">
          {/* Title */}
          <div className="flex flex-col gap-2 text-center">
            <p className="font-semibold text-lg sm:text-xl">
              Are you here to buy or sell?
            </p>
            <p className="text-sm text-gray-500">
              Choose your role to get the most tailored experience.
            </p>
          </div>

          {/* Buyer & Seller Cards */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {/* Buyer Card */}
            <div
              onClick={() => handleSelect("buyer")}
              className={`w-36 sm:w-40 h-52 sm:h-60 bg-white shadow-md flex flex-col justify-around items-center rounded-2xl relative cursor-pointer transition border-2 ${
                selectedRole === "buyer"
                  ? "border-[#25A5B4]"
                  : "border-transparent"
              }`}
            >
              <Image
                src="/images/BuyerIconBg.png"
                alt="Buyer Background"
                width={150}
                height={150}
                className="absolute top-3"
              />
              <Image
                src="/images/BuyerIcon.png"
                alt="Buyer Icon"
                width={100}
                height={100}
                className="absolute top-3"
              />
              <Image
                src="/images/BuyerIconTag.png"
                alt="Buyer Tag"
                width={30}
                height={30}
                className="absolute left-8 top-10"
              />
              <p className="text-base sm:text-lg absolute bottom-3 md:bottom-7">Buyer</p>
              {selectedRole === "buyer" && (
                <span className="absolute top-2 left-2 bg-[#25A5B4] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  ✓
                </span>
              )}
            </div>

            {/* Seller Card */}
            <div
              onClick={() => handleSelect("seller")}
              className={`w-36 sm:w-40 h-52 sm:h-60 bg-white shadow-md flex flex-col justify-evenly items-center rounded-2xl relative cursor-pointer transition border-2 ${
                selectedRole === "seller"
                  ? "border-[#25A5B4]"
                  : "border-transparent"
              }`}
            >
              <Image
                src="/images/SellerIcon.png"
                alt="Seller Icon"
                width={140}
                height={140}
              />
              <p className="text-base sm:text-lg ">Seller</p>
              {selectedRole === "seller" && (
                <span className="absolute top-2 left-2 bg-[#25A5B4] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  ✓
                </span>
              )}
            </div>
          </div>

          {/* Continue Button */}
          <button
            disabled={!selectedRole}
            className={`w-56 sm:w-60 flex justify-center items-center px-6 py-3 rounded-full transition ${
              selectedRole
                ? "bg-[#25A5B4] hover:bg-[#1E8D99] cursor-pointer"
                : "bg-[#999999] cursor-not-allowed"
            }`}
          >
            <div className="flex gap-2 justify-center items-center">
              <p className="text-white text-sm sm:text-base">
                {selectedRole
                  ? `Continue as ${
                      selectedRole.charAt(0).toUpperCase() +
                      selectedRole.slice(1)
                    }`
                  : "Continue"}
              </p>
              <Image
                src="/images/nextIconOnBoarding.png"
                alt="Next Icon"
                width={9}
                height={16}
              />
            </div>
          </button>
        </div>
      </div>
<div className="lg:absolute lg:top-0 lg:right-0">
      <RightDesign />
      </div>
    </div>
  );
};

export default Page;
