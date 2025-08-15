import React, { useState } from "react";
import Image from "next/image";
import FavouriteHeartIcon from "../../icons/FavouriteHeartIcon";
const recommendedItems = [
  {
    id: 1,
    image: "/images/RecommendProduct1.png",
    price: "$500.00",
    time: "1hr ago",
    title: "IPhone 6s, 10/10 condition..",
    location: "College Road, Islamabad",
  },
  {
    id: 2,
    image: "/images/RecommendProduct2.png",
    price: "$800.00",
    time: "1hr ago",
    title: "IPhone XR, 10/10 condition..",
    location: "College Road, Islamabad",
  },
  {
    id: 3,
    image: "/images/RecommendProduct3.png",
    price: "$800.00",
    time: "1hr ago",
    title: "IPhone XR, 10/10 condition..",
    location: "College Road, Islamabad",
  },
  {
    id: 4,
    image: "/images/RecommendProduct4.png",
    price: "$800.00",
    time: "1hr ago",
    title: "IPhone XR, 10/10 condition..",
    location: "College Road, Islamabad",
  },
];
const JustForYou = ({ searchTerm }) => {
  const [likedItems, setLikedItems] = useState([]);

  // Toggle like/unlike
  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const filteredItems = recommendedItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-[97%] mx-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center px-2">
        <p className="text-base sm:text-lg font-semibold">Categories</p>
        <p className="text-sm text-[#25A5B4] cursor-pointer">See All</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const isLiked = likedItems.includes(item.id);
            return (
              <div key={item.id} className="relative flex flex-col justify-start items-start gap-2 shadow-md rounded-xl overflow-hidden bg-white">
                {/* Product Image */}
                <div className="relative w-full h-[180px]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-black/20 to-transparent"></div>
                  <button
                    onClick={() => toggleLike(item.id)}
                    className="absolute right-2.5 top-2.5 flex justify-center items-center rounded-md p-2 bg-black/10 hover:bg-black/20 transition"
                  >
                    <FavouriteHeartIcon fillColor={isLiked ? "red" : "white"} />
                  </button>
                </div>
                <div className="px-3 py-2 w-full">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold">{item.price}</p>
                    <p className="text-[10px] text-[#0000004D]">{item.time}</p>
                  </div>
                  <p className="text-sm mt-1 line-clamp-1">{item.title}</p>
                  <p className="text-xs text-[#0000004D] mt-1">{item.location}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 col-span-full">No items found</p>
        )}
      </div>
    </div>
  );
};

export default JustForYou;
