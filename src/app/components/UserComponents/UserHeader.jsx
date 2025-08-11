"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const headerLinks = [
    { href: "/", title: "Home" },
    { href: "/items", title: "Items" },
    { href: "/categories", title: "Categories" },
  ];

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-5 py-3 max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/pushcart.png" height={50} width={50} alt="Logo" />
        </Link>

        <nav className="hidden sm:flex gap-6 text-gray-700">
          {headerLinks.map((item, index) => {
            const isSelected = item.href === pathname;
            return (
              <Link
                key={item.title + index}
                href={item.href}
                className={`hover:underline ${
                  isSelected ? "underline font-semibold text-black" : ""
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Icons & Profile */}
        <div className="flex items-center gap-4">
          <p className="text-gray-300 hidden sm:block">|</p>

          {/* Grocery Icon */}
          <Link href="/">
            <div className="rounded-full border border-gray-300 p-1 hidden sm:block">
              <Image src="/images/grocery-store.png" height={20} width={20} alt="Cart" />
            </div>
          </Link>

          {/* Profile Icon */}
          <Link href="/">
            <Image
              className="rounded-full border border-green-200 size-7 hidden sm:block"
              src="/images/Profile-Picture.png"
              height={25}
              width={25}
              alt="Profile"
            />
          </Link>

          {/* Hamburger for Mobile */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

    
    </header>
  );
};

export default Header;
