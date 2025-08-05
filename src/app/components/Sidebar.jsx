import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between items-center w-50 h-screen bg-gray-300 mx-2 rounded-2xl py-2'>
      <Link href="/">
          <Image src="/images/pushcart.png" height={40} width={40} alt="Logo" />
        </Link>

<div className="h-40 w-[80%] flex flex-col justify-evenly items-start">
        <div className="w-full flex justify-evenly items-center ">
          <Link href="/">
          <Image src="/images/dashboard.png" height={20} width={20} alt="Logo" />
        </Link>
        <p className="">Dashboard</p>
        </div>
        <div className="w-[80%] flex justify-evenly items-center ">
          <Link href="/">
          <Image src="/images/group.png" height={20} width={20} alt="Logo" />
        </Link>
        <p className="">Users</p>
        </div>
        <div className="w-[80%] flex justify-evenly items-center ">
          <Link href="/">
          <Image src="/images/list-text.png" height={20} width={20} alt="Logo" />
        </Link>
        <p className="">Items</p>
        </div>
        <div className="w-[80%] flex justify-evenly items-center ml-2.5 ">
          <Link href="/">
          <Image src="/images/star.png" height={20} width={20} alt="Logo" />
        </Link>
        <p className="">Categories</p>
        </div>
        </div>

<div className="w-full flex justify-center items-center gap-3 ">
          <Link href="/">
          <Image src="/images/logout.png" height={30} width={30} alt="Logo" />
        </Link>
        <p className="text-red-600">Logout</p>
        </div>


       
    </div>
  )
}

export default Sidebar