import React from 'react'
import Image from 'next/image'

const RightDesign = () => {
  return (

        <div className="hidden md:block  h-screen w-70 bg-[#D3EDF0] relative  ">
            <Image
          src="/images/onBoardingleftsideImg.png"
          alt="Logo"
          width={280} 
          height={300}
          className='absolute bottom-0'
        />
        </div>

  )
}

export default RightDesign