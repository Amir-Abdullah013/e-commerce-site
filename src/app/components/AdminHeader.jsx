import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AdminHeader = () => {
  return (
    <div className='w-full h-15 bg-gray-200 flex justify-between items-center rounded-l-3xl rounded-r-full shadow mt-2 px-3'>
        <input placeholder='Search' type="text" className="rounded-xl h-9 bg-white pl-2" />
        <div className="h-9 w-40 flex justify-evenly items-center">
            <Link href="/">
          <Image src="/images/bell.png" height={20} width={20} alt="Logo" />
          </Link>
          <Link href="/">
          <Image className="rounded-full border-1 border-green-200" src="/images/Profile-Picture.png" height={25} width={25} alt="Logo" />
        </Link>
          <p className="font-semibold">Mr. Amir</p>
        </div>
    </div>
  )
}

export default AdminHeader