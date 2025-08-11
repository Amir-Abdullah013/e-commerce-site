import React from "react";
import Image from "next/image";
import FavouriteHeartIcon from "../../icons/FavouriteHeartIcon";

const recommendedItems = [
  {
    id: 1,
    image: "/images/RecommendProduct1.png",
    price: "$500.00",
    time: "1hr ago",
    title: "iPhone 6s, 10/10 condition..",
    location: "College Road, Islamabad",
  },
  {
    id: 2,
    image: "/images/RecommendProduct2.png",
    price: "$800.00",
    time: "1hr ago",
    title: "iPhone XR, 10/10 condition..",
    location: "College Road, Islamabad",
  },
  {
    id: 3,
    image: "/images/RecommendProduct3.png",
    price: "$800.00",
    time: "1hr ago",
    title: "iPhone XR, 10/10 condition..",
    location: "College Road, Islamabad",
  },
  {
    id: 4,
    image: "/images/RecommendProduct4.png",
    price: "$800.00",
    time: "1hr ago",
    title: "iPhone XR, 10/10 condition..",
    location: "College Road, Islamabad",
  },
];

const RecommendedForYou = () => {
  return (
    <div className="w-[97%] mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center px-2">
        <p className="text-base sm:text-lg font-semibold">
          Recommended For You
        </p>
        <p className="text-sm text-[#25A5B4] cursor-pointer">See All</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {recommendedItems.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col justify-start items-start gap-2 shadow-md rounded-xl overflow-hidden bg-white"
          >
            {/* Product Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-[180px] object-cover"
            />
            {/* Favourite Icon */}
            <div className="bg-[#0000001A] size-11 absolute right-2.5 top-2.5  flex justify-center items-center rounded-md">
              <FavouriteHeartIcon />
            </div>

            {/* Product Info */}
            <div className="px-3 py-2 w-full">
              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold">{item.price}</p>
                <p className="text-[10px] text-[#0000004D]">{item.time}</p>
              </div>
              <p className="text-sm mt-1">{item.title}</p>
              <p className="text-xs text-[#0000004D] mt-1">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedForYou;
