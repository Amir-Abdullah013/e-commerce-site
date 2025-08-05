"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const headerLinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/items",
      title: "Items",
    },
    {
      href: "/categories",
      title: "Categories",
    },
  ];

  const pathname = usePathname();

  return (
    <div className="flex w-full bg-amber-300 flex-col items-center justify-center">
      <div className="flex items-center w-full px-5 py-2  justify-between max-w-6xl">
        <Link href="/">
          <Image src="/images/pushcart.png" height={50} width={50} alt="Logo" />
        </Link>
        <div className="flex items-center gap-5">
          {headerLinks.map((item, index) => {
            const isSelected = item.href === pathname;
            return (
              <Link
                className={`text-gray-700 ${isSelected ? "underline" : ""}`}
                href={item.href}
                key={item.title + index}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="w-25 flex justify-evenly items-center">
          <p className="text-gray-300">|</p>
          <div className="rounded-full border-1 border-gray-300 flex justify-center items-center size-7 ">
            <Link href="/">
          <Image src="/images/grocery-store.png" height={20} width={20} alt="Logo" />
        </Link>
          </div>
          <Link href="/">
          <Image className="rounded-full border-1 border-green-200" src="/images/Profile-Picture.png" height={20} width={20} alt="Logo" />
        </Link>
          </div>
        </div>
      </div>
    
  );
};

export default Header;
