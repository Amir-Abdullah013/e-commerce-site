"use client";

import React from "react";
import UserTopBar from "../components/UserComponents/UserTopBar";
import UserCategories from "../components/UserComponents/UserCategories";
import UserAdBar from "../components/UserComponents/UserAdBar";
import RecommendedForYou from "../components/UserComponents/Products Section/RecommendedForYou";
import Furniture from "../components/UserComponents/Products Section/Furniture";

const UserPage = () => {
  return (
    <div className="w-[99%] flex flex-col justify-center items-center gap-8">
      <UserTopBar />
      <UserCategories />
      <UserAdBar />
      <RecommendedForYou />
      <Furniture />
    </div>
  );
};

export default UserPage;
