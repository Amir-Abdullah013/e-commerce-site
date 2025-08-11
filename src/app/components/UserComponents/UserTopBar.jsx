import React from 'react'
import Image from 'next/image'

const UserTopBar = () => {
  return (
    <div className="w-[97%] h-80 sm:h-96 md:h-[22rem] flex flex-col justify-evenly bg-[#25A5B433] rounded-2xl overflow-hidden relative">

      <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-[#E9F6F7] absolute -bottom-20 right-4"></div>

      {/* Blob*/}
      <Image
        src="/images/Blob.png"
        height={160}
        width={200}
        alt="blob"
        className="absolute top-0 w-40 sm:w-48 md:w-56 lg:w-64"
      />
{/* Text Content */}
      <div className="flex flex-col gap-3 absolute left-5 sm:left-10 top-16 sm:top-20">
        <p className="text-2xl sm:text-3xl font-semibold">Find It. Buy it.</p>
        <p className="text-sm sm:text-base max-w-xs sm:max-w-md">
          Promote sustainable buying, connect directly with trusted sellers, and find unique items that tell a story.
        </p>
      </div>
    </div>
  )
}

export default UserTopBar
