import React from 'react'
import Image from 'next/image'

const SubTopBar = (props) => {
  return (
    <div className='w-[97%] h-30 rounded-xl bg-[#25A5B433] relative overflow-hidden'>
      {/* Title */}
<p className="absolute bottom-5 text-xl left-7 ">{props.title}</p>
      {/* Blob */}
 <Image
      src="/images/Blob.png" 
      alt="Blob"
      width={120}
      height={300}
      className="absolute "
    />
    {/* Side Circle */}
    <div className="size-40 rounded-full absolute right-10 bottom-[-100px] bg-[#E9F6F7]"></div>
    </div>
  )
}

export default SubTopBar