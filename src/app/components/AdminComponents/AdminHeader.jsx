"use client";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const AdminHeader = ({ search, setSearch }) => {
  return (
    <div className="w-full h-16 bg-white flex justify-between items-center shadow px-5 rounded-md mt-2">
      <div className="flex items-center gap-4">
        <button className="md:hidden">
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        </button>

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[url('/images/search-interface-symbol.png')]  bg-no-repeat bg-[length:16px_16px] bg-[12px_center] bg-gray-100 w-64 pl-10 py-2 rounded-lg text-gray-700 text-sm outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Notification icon */}
        <img
          className="hidden md:block"
          src="/images/notification-bell.png"
          height={20}
          width={20}
          alt="Notification"
        />

        {/* Profile */}
        <img
          className="rounded-full border border-green-200 size-7"
          src="/images/profile-image.png"
          height={28}
          width={28}
          alt="Profile"
        />
        <p className="font-semibold hidden md:block">Mr Alex Jhons</p>
      </div>
    </div>
  );
};

export default AdminHeader;
