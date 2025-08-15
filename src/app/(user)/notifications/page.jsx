"use client"

import React, { useState } from "react";
import SubTopBar from "@/app/components/UserComponents/SubTopBar";
import Image from "next/image";

const notificationsData = [
  {
    id: 1,
    text: "Outbid Alert: You’ve been outbid on Sony Earphone 2022",
    time: "Just now",
    icon: "/images/Notifications-HeadphoneIcon.png",
  },
  {
    id: 2,
    text: "Auction Ending Soon: Auction for Nike Special Shoes ends in 10 minutes!",
    time: "9:20 am",
    icon: "/images/Notifications-ShoesIcon.png",
  },
  {
    id: 3,
    text: "Purchase Confirmations: Your payment for AirPods Max has been confirmed",
    time: "Yesterday",
    icon: "/images/Notifications-Headphone2Icon.png",
  },
  {
    id: 4,
    text: "Message: New message from Stark Hales.",
    time: "26 June. 2024",
    icon: "/images/Notifications-personIcon.png",
  },
];

const filterOptions = ["All", "Bids", "Messages", "Purchases"];

const Notifications = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="h-full w-full flex gap-5 flex-col justify-center items-center">
      {/* Top Bar */}
      <SubTopBar title="Notifications" />

      {/* Filters */}
      <div className="flex justify-center items-center gap-4 border-b-1 border-[#F0F1F4] py-3">
        {filterOptions.map((filter) => (
          <div
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`border border-[#CCCCCC] px-3 rounded-md cursor-pointer transition-colors duration-200
              ${
                activeFilter === filter
                  ? "bg-[#25A5B4] text-white border-[#25A5B4]"
                  : "text-[#4D4D4D]"
              }
            `}
          >
            {filter}
          </div>
        ))}
      </div>

      {/* Notifications List */}
      <div className="flex flex-col justify-center items-center gap-2">
        {notificationsData.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-[#F8F7FB] rounded-lg w-90 p-3"
          >
            <div className="flex items-center gap-3">
              <Image
                src={item.icon}
                alt="Notification Icon"
                width={35}
                height={35}
                className="mb-6"
              />
              <div className="flex flex-col justify-center items-start gap-2">
                <p className="w-57">{item.text}</p>
                <p className="text-xs text-[#999999]">{item.time}</p>
              </div>
            </div>
            {/* 3 Dots Icon */}
            <Image
              src="/images/3dotsicon.png"
              alt="Options"
              width={25}
              height={25}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
