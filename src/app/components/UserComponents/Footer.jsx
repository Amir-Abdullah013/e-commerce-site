import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-[97%] bg-[#3f175f] rounded-xl px-6 py-10 flex flex-col md:flex-row md:justify-evenly items-start gap-10">
      {/* First Box */}
      <div className="md:h-35 flex flex-col  md:justify-between items-start md:items-center gap-4">
        {/* Logos */}
        <Link href="/">
          <Image src="/images/pushcart.png" height={40} width={40} alt="Logo" />
        </Link>

        <div className="flex gap-4">
          <Link href="/">
            <Image src="/images/slack.png" height={30} width={30} alt="Slack" />
          </Link>
          <Link href="/">
            <Image
              src="/images/Twitter.png"
              height={30}
              width={30}
              alt="Twitter"
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/gitHub.png"
              height={30}
              width={30}
              alt="GitHub"
            />
          </Link>
        </div>
      </div>

      {/* Pages */}
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold mb-1">PAGES</p>
        <Link href="/" className="text-white text-sm">
          Home
        </Link>
        <Link href="/" className="text-white text-sm">
          Categories
        </Link>
        <Link href="/" className="text-white text-sm">
          Items
        </Link>
      </div>

      {/* Legal and Policies */}
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold mb-1">LEGAL AND POLICIES</p>
        <Link href="/" className="text-white text-sm">
          Terms & Conditions
        </Link>
        <Link href="/" className="text-white text-sm">
          Privacy Policy
        </Link>
        <Link href="/" className="text-white text-sm">
          Cookie Policy
        </Link>
      </div>

      {/* Platform Info */}
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold mb-1">PLATFORM INFORMATION</p>
        <Link href="/" className="text-white text-sm">
          Home
        </Link>
        <Link href="/" className="text-white text-sm">
          How it Works
        </Link>
        <Link href="/" className="text-white text-sm">
          FAQs
        </Link>
        <Link href="/" className="text-white text-sm">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Footer;
