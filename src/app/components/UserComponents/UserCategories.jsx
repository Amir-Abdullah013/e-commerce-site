import React from "react";
import Link from "next/link";
import Image from "next/image";

// Categories data
const categories = [
  { name: "Mobile", icon: "/images/MobileIcon.png", bg: "#D7FFEE" },
  { name: "Property", icon: "/images/ProperyIcon.png", bg: "#EAFFD5" },
  { name: "Electronics", icon: "/images/ElectronicsIcon.png", bg: "#FFE9D3" },
  { name: "Furniture", icon: "/images/FurnitureIcon.png", bg: "#FEE2EC" },
  { name: "Jewellery", icon: "/images/JewelleryIcon.png", bg: "#E6EBFE" },
  { name: "Car Renting", icon: "/images/CarRentingIcon.png", bg: "#D7FFEE" },
  { name: "No Liability", icon: "/images/NoLiabilityIcon.png", bg: "#FFE9D3" },
  { name: "Offline", icon: "/images/OfflineIcon.png", bg: "#FEE2EC" },
];

const UserCategories = () => {
  return (
    <div className="w-[95%] mx-auto flex flex-col gap-6">
      {/* Heading */}
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">Categories</p>
        <Link href="/" className="text-sm text-[#25A5B4]">
          See All
        </Link>
      </div>


      <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide md:flex-wrap md:justify-between">
        {/* Move Previous Icon */}
        <Link href="/" className="shrink-0 hidden md:flex">
          <Image
            src="/images/MovePreviousIcon.png"
            height={20}
            width={20}
            alt="Previous"
          />
        </Link>

        {/* Category Items */}
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 min-w-[80px] shrink-0"
          >
            <div
              className="flex justify-center items-center w-14 h-14 rounded-full"
              style={{ backgroundColor: category.bg }}
            >
              <Link href="/">
                <Image
                  src={category.icon}
                  height={30}
                  width={30}
                  alt={`${category.name} Icon`}
                />
              </Link>
            </div>
            <p className="text-xs text-center">{category.name}</p>
          </div>
        ))}

        {/* Move Next Icon */}
        <Link href="/" className="hidden md:block">
          <Image
            src="/images/MoveNextIcon.png"
            height={20}
            width={20}
            alt="Next"
          />
        </Link>
      </div>
    </div>
  );
};

export default UserCategories;
