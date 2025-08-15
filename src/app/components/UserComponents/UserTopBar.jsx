import React from "react";
import Image from "next/image";

const UserTopBar = () => {
  return (
    <div className="w-[97%] min-h-[16rem] sm:min-h-[20rem] md:min-h-[22rem] lg:min-h-[24rem] flex flex-col justify-center bg-[#25A5B433] rounded-2xl overflow-hidden relative px-5 sm:px-10">
      
      {/* Right-side Image */}
      <Image
        src="/images/onBoardingleftsideImg.png"
        alt="Location Icon"
        width={250}
        height={300}
        className="absolute bottom-0 right-0 w-40 sm:w-52 md:w-60 lg:w-72"
      />

      {/* Blob */}
      <Image
        src="/images/Blob.png"
        height={160}
        width={200}
        alt="blob"
        className="absolute top-0 left-0 w-28 sm:w-40 md:w-48 lg:w-56"
      />

      {/* Text Content */}
      <div className="flex flex-col gap-3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg z-10">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
          Find It. Bid It. Win It.
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-gray-700">
          Promote sustainable buying, connect directly with trusted sellers, and
          find unique items that tell a story.
        </p>
      </div>
    </div>
  );
};

export default UserTopBar;
