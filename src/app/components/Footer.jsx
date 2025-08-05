import React from "react";
import Image from 'next/image';
import Link from "next/link";

const Footer = () => {
  return (
    // Container
    <div className="h-50 flex justify-evenly items-center w-full bg-gray-600">
      {/* First Box */}
      <div className="h-30 flex flex-col justify-between items-center">
        <Link href="/">
          <Image src="/images/pushcart.png" height={40} width={40} alt="Logo"/>
            </Link>
        <div className="w-40 flex justify-evenly items-center">
         <Link href="/">
          <Image src="/images/facebook.png" height={30} width={30} alt="Logo"/>
            </Link>
            <Link href="/">
          <Image src="/images/twitter.png" height={30} width={30} alt="Logo" />
</Link>
          <Link href="/">
          <Image src="/images/social.png" height={30} width={30} alt="Logo" />
          </Link>
        </div>
      </div>
      {/* Second Box */}
      <div className="h-30 flex flex-col justify-evenly items-center">
        <p className="text-white font-semibold">PAGES</p>
        <p className="text-white">Home</p>
        <p className="text-white">Categories</p>
        <p className="text-white">Items</p>
      </div>
      {/* Third Box */}
      <div className="h-30 flex flex-col justify-evenly items-center">
        <p className="text-white font-semibold">LEGAL AND POLICIES</p>
        <a className="text-white">Terms&Conditions</a>
        <a className="text-white">Privacy Policy</a>
        <a className="text-white">Cookie Policy</a>
      </div>
      {/* Fourth Box */}
      <div className="h-30 flex flex-col justify-evenly items-center">
        <p className="text-white font-semibold">PLATFORM INFORMATION:</p>
        <a className="text-white">Home</a>
        <a className="text-white">How it Works</a>
        <a className="text-white">FAQs</a>
        <a className="text-white">Contact Us</a>
      </div>
    </div>
  );
};

export default Footer;
