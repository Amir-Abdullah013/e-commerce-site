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
    { href: "/chats", title: "Chats" },
    { href: "/categories", title: "Auctions" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-5 py-3 max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/pushcart.png"
            height={50}
            width={50}
            alt="Logo"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
<nav className="hidden sm:flex gap-8 text-gray-700 font-medium">
  {headerLinks.map((item, index) => {
    const isSelected = pathname === item.href || pathname.startsWith(item.href + "/");
    return (
      <Link
        key={item.title + index}
        href={item.href}
        className={`transition-colors duration-200 ${
          isSelected
            ? "text-black font-semibold border-b-2 border-black"
            : "hover:text-blue-500"
        }`}
      >
        {item.title}
      </Link>
    );
  })}
</nav>


        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Notification Icon (Always visible) */}
          <Link href="/" className="hover:scale-105 transition-transform">
            <div className="rounded-full border border-gray-300 p-1 hover:ring-2 ring-blue-300">
              <Image
                src="/images/notification-bell.png"
                height={20}
                width={20}
                alt="Notification"
              />
            </div>
          </Link>

          {/* Cart Icon (Always visible) */}
          <Link href="/" className="hover:scale-105 transition-transform">
            <div className="rounded-full border border-gray-300 p-1 hover:ring-2 ring-blue-300">
              <Image
                src="/images/grocery-store.png"
                height={20}
                width={20}
                alt="Cart"
              />
            </div>
          </Link>

          {/* Profile Icon (Desktop only) */}
          <Link
            href="/"
            className="hidden sm:block hover:ring-2 ring-blue-300 rounded-full hover:scale-105 transition-transform"
          >
            <Image
              className="rounded-full border  size-7"
              src="/images/Profile-Picture.png"
              height={28}
              width={28}
              alt="Profile"
            />
          </Link>

          {/* Hamburger (Mobile only) */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white shadow-inner border-t border-gray-200 p-5 space-y-5">
          {headerLinks.map((item, index) => {
            const isSelected = item.href === pathname;
            return (
              <Link
                key={item.title + index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-1 text-lg ${
                  isSelected
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {item.title}
              </Link>
            );
          })}

          {/* Divider */}
          <hr className="border-gray-300" />

          {/* Profile Icon in Mobile Menu */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 pt-3"
          >
            <Image
              className="rounded-full border border-green-200 size-9"
              src="/images/Profile-Picture.png"
              height={32}
              width={32}
              alt="Profile"
              
            />
            <span className="text-gray-700 font-medium ">My Profile</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
