"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  // Handle "Back" button click
  const handleBack = () => {
    router.back("/signup/idproof");
  };

  // Handle "Near me" click using browser geolocation
  

  // Handle "Enter a different address" click
  const handleDifferentAddress = () => {
    router.push("/signup/selectmap");
  };

  return (
    <div className="min-h-screen flex flex-col justify-around items-center p-4 relative">
      {/* Back Button */}
            <button onClick={handleBack} className="flex justify-center items-center gap-3 absolute top-20 left-5 cursor-pointer">
              <Image src="/images/BackIcon.png" alt="Logo" width={9} height={100} />
              <p className="">Back</p>
            </button>

      {/* Image */}
      <Image
        src="/images/LocationImage.png"
        alt="Location"
        width={250}
        height={250}
        className="w-40 sm:w-60 md:w-72 h-auto"
      />

      {/* Text Title */}
      <div className="flex flex-col justify-center items-center gap-2 max-w-xs text-center px-4">
        <p className="text-lg sm:text-xl font-semibold">
          Where do you want to explore and shop?
        </p>
        <p className="text-sm sm:text-base text-[#00000080]">
          To provide you with the best experience, let us know your preferred
          location for buying or selling.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col justify-center items-center gap-3 w-full max-w-xs">
        {/* Nearme Button */}
        <button
         
          className="bg-[#25A5B4] hover:bg-[#1d8f99] w-full h-11 rounded-lg flex justify-center items-center gap-3"
        >
          <Image
            src="/images/LocationIcon.png"
            alt="Location Icon"
            width={20}
            height={20}
          />
          <p className="text-white">Near me</p>
        </button>

        {/* Different Address Button */}
        <button
          onClick={handleDifferentAddress}
          className="w-full h-11 border-2 border-[#25A5B4] text-[#25A5B4] rounded-lg"
        >
          Enter a different address
        </button>
      </div>
    </div>
  );
};

export default Page;
