import React from "react";
import Image from "next/image";

const LeftDesign = () => {
  return (
    <div className="absolute top-0 left-0">
      <div className="relative w-40 sm:w-56 md:w-64 lg:w-72">
        {/* Blob */}
        <Image
          src="/images/Blob.png"
          alt="Blob"
          width={300}
          height={300}
          className="w-full h-auto"
        />

        {/* Logo */}
        <Image
          src="/images/Logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="absolute top-4 left-3 w-12 sm:w-16 md:w-20 lg:w-24 h-auto"
        />
        
      </div>
    </div>
  );
};

export default LeftDesign;
