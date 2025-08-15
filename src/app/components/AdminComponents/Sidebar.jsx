// components/Sidebar.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import DashboardIcon from "../app/components/icons/DashboardIcon";
import ItemIcon from "../app/components/icons/ItemIcon";
import Users from "../app/components/icons/Users";
import Categories from "../app/components/icons/Categories";

// Headings
const navItems = [
  { href: "/dashboard", icon: <DashboardIcon />, label: "Dashboard" },
  { href: "/users", icon: <Users />, label: "Users" },
  { href: "/items", icon: <ItemIcon />, label: "Items" },
  { href: "/categories", icon: <Categories />, label: "Categories" },
];

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col justify-between items-center w-52 h-screen bg-[#1C1C1C] mx-2 rounded-2xl py-2">
      {/* Main Icon */}
      <Link href="/">
        <Image
          className="mt-7"
          src="/images/pushcart.png"
          height={40}
          width={40}
          alt="Logo"
        />
      </Link>

      <div className="h-40 w-[80%] flex flex-col justify-evenly items-start gap-2">
        {navItems.map(({ href, icon, label }) => (
          <Link
            key={label}
            href={href}
            className="w-full flex items-center gap-2"
          >
            {icon}
            <p className="text-white">{label}</p>
          </Link>
        ))}
      </div>

      {/* Logout Button */}
      <Link
        href="/logout"
        className="w-full flex justify-center items-center gap-3 mb-7"
      >
        <Image
          src="/images/LogoutIcon.png"
          height={30}
          width={30}
          alt="Logout Icon"
        />
        <p className="text-[#DA6D75CC]">Logout</p>
      </Link>
    </div>
  );
};

export default Sidebar;
