"use client";

import React, { useState } from "react";
import UserTopBar from "../components/UserComponents/UserTopBar";
import UserCategories from "../components/UserComponents/UserCategories";
import UserAdBar from "../components/UserComponents/UserAdBar";
import JustForYou from "../components/UserComponents/Products Section/JustForYou";
import AllProducts from "../components/UserComponents/Products Section/AllProducts";

const UserPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 px-4">
      <UserTopBar />

      {/* Search Bar */}
      <input
        placeholder="Search for anything you need..."
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-[url('/images/SearchIconUser.png')] 
                   bg-no-repeat bg-[length:16px_16px] bg-[12px_center] 
                   bg-[#F8F7FB] text-[#858699] 
                   w-full sm:w-80 md:w-[28rem] max-w-full h-10 
                   text-sm pl-9 rounded-lg 
                   focus:outline-none focus:ring-0"
      />

      <UserCategories />
      <UserAdBar />
      <JustForYou searchTerm={searchTerm} />
      <AllProducts searchTerm={searchTerm} />
    </div>
  );
};

export default UserPage;
