import React from "react";
import Image from "next/image";
import SliderIcon from "../icons/SliderIcon";

const UserAdBar = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-[#FAFAFA] p-6 rounded-xl shadow-sm gap-8">
      {/* Left Section */}
      <div className="flex flex-col justify-between items-start gap-5 w-full md:w-1/2">
        <p className="text-[#484848] text-2xl md:text-3xl font-semibold leading-tight">
          iPhone 6s, 10/10 condition..
        </p>

        <p className="text-[#484848] text-sm md:text-xs w-75">
          Lorem ipsum door sit amThis device is pre-owned and fully functional, with minor signs of use
          (if any). Available in multiple storage options and colors ...
        </p>

        <button className="w-full sm:w-40 h-14 bg-[#3F175F] flex justify-center items-center gap-2 rounded-2xl mt-2">
          <Image
            src="/images/HammerIcon.png"
            height={22}
            width={22}
            alt="Bid Icon"
          />
          <p className="text-white text-sm font-medium">Place your Bid</p>
          <Image
            src="/images/NextIconInAdBar.png"
            height={7}
            width={7}
            alt="Next Icon"
          />
        </button>

        {/* Timer */}
        <div className="flex flex-col items-start gap-2">
          <p className="font-semibold text-sm">Auction Ending in</p>
          <div className="flex gap-4 items-end">
            {[
              { label: "Hr", value: "04" },
              { label: "Mins", value: "21" },
              { label: "Sec", value: "04" },
            ].map((time, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 flex justify-center items-center bg-[#25A5B433] rounded-xl">
                  <p className="text-[#25A5B4] font-semibold">{time.value}</p>
                </div>
                <p className="text-sm text-[#484848]">{time.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 flex flex-col sm:flex-row justify-center md:ditems-start gap-6 ">
        {/* Main Product Image + Slider Icons */}
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/images/ProductImage.png"
            height={300}
            width={300}
            alt="Product Image"
            className="w-full max-w-[250px] h-auto object-contain"
          />
          <div className="flex justify-center items-center gap-2">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <SliderIcon key={i} />
              ))}
          </div>
        </div>

        {/* Images */}
        <div className="flex sm:flex-col flex-row justify-center items-center gap-4 mt-1">
          {[...Array(4)].map((_, i) => (
            <Image
              key={i}
              src="/images/ProductImage.png"
              height={49}
              width={49}
              alt={`Thumbnail ${i}`}
              className="rounded-md object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserAdBar;
