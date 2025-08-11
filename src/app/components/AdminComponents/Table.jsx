"use client";
import React, { useState } from "react";
import Image from "next/image";

const users = [
  {
    id: 1,
    name: "Kristin Watson",
    email: "debra.holt@example.com",
    role: "Buyer",
    status: "Active",
    verificationStatus: "",
    date: "29 Dec 2022",
    profileImage: "/images/image1.png",
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    email: "nevaeh.simmons@example",
    role: "Seller",
    status: "Active",
    verificationStatus: "",
    date: "29 Dec 2022",
    profileImage: "/images/image2.png",
  },
  {
    id: 3,
    name: "Robert Fox",
    email: "tim.jennings@example.com",
    role: "Buyer",
    status: "Active",
    verificationStatus: "Approved",
    date: "29 Dec 2022",
    profileImage: "/images/image3.png",
  },
  {
    id: 4,
    name: "Jerome Bell",
    email: "kenzi.lawson@example.com",
    role: "Buyer",
    status: "Disabled",
    verificationStatus: "Approved",
    date: "29 Dec 2022",
    profileImage: "/images/image4.png",
  },
  {
    id: 5,
    name: "Dianne Russell",
    email: "tanya.hill@example.com",
    role: "Buyer",
    status: "Active",
    verificationStatus: "",
    date: "29 Dec 2022",
    profileImage: "/images/image5.png",
  },
  {
    id: 6,
    name: "Arlene McCoy",
    email: "jessica.hanson@example.com",
    role: "Seller",
    status: "Active",
    verificationStatus: "Pending",
    date: "29 Dec 2022",
    profileImage: "/images/image6.png",
  },
  {
    id: 7,
    name: "Kathryn Murphy",
    email: "tanya.hill@evando.com",
    role: "Buyer",
    status: "Disabled",
    verificationStatus: "",
    date: "29 Dec 2022",
    profileImage: "/images/image7.png",
  },
  {
    id: 8,
    name: "Courtney Henry",
    email: "alma.lawson@example.com",
    role: "Seller",
    status: "Active",
    verificationStatus: "Pending",
    date: "29 Dec 2022",
    profileImage: "/images/image8.png",
  },
  {
    id: 9,
    name: "Eleanor Pena",
    email: "willie.jennings@example.com",
    role: "Buyer",
    status: "Disabled",
    verificationStatus: "",
    date: "29 Dec 2022",
    profileImage: "/images/image9.png",
  },
];


const Table = ({ search }) => {
  const [nameFilter, setNameFilter] = useState("");

  const searchTerm = search?.toLowerCase() || "";
  const nameSearchTerm = nameFilter.toLowerCase();

  const filteredUsers = users.filter((user) => {
    const matchesHeaderSearch =
      user.name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.role.toLowerCase().includes(searchTerm);

    const matchesNameSearch = user.name.toLowerCase().includes(nameSearchTerm);

    return matchesHeaderSearch && matchesNameSearch;
  });

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* Header */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center px-2 my-2 gap-3">
        <div>
          <p className="text-lg font-semibold">Users</p>
          <div className="flex gap-3 items-center">
            <p className="text-[#4D4D4D]">All Users</p>
            <p className="text-xs">(2 rows selected)</p>
          </div>
        </div>

        {/* Search + Filter */}
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search by name..."
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="bg-[url('/images/search-interface-symbol.png')] bg-no-repeat bg-[length:12px_12px] bg-[12px_center] pl-10 py-2 text-gray-700 text-sm outline-none shadow-md rounded-md w-48 sm:w-60 bg-white"
          />
          <button className="flex items-center gap-2 px-3 py-2 bg-white shadow-md rounded-md">
            <Image src="/images/Filter icon.png" height={15} width={15} alt="Filter" />
            <p className="text-[#667085] text-sm">Filters</p>
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-x-auto">
        {/* Table Header */}
        <div className=" grid grid-cols-[40px_1.5fr_1fr_1fr_1fr_1fr_auto] min-w-[800px] bg-white h-12 px-4 border-b-1 border-gray-300 text-sm font-medium items-center">
          <input type="checkbox" className="mt-1" />
          <p>Name</p>
          <p>Role</p>
          <p className="hidden sm:block">Account Status</p>
          <p className="hidden md:block">Verification Status</p>
          <p className="hidden lg:block">Registration Date</p>
          <p className="ml-12 lg:ml-0 lg:mr-2">Action</p>
        </div>

        {/* Table Rows */}
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-[40px_1.5fr_1fr_1fr_1fr_1fr_auto] min-w-[800px] items-center bg-[#F9F9FC] px-4 py-2 border-b border-gray-300 text-sm"
          >
            <input type="checkbox" />
            <div className="flex items-center gap-2">
              <Image
                className="rounded-full border border-green-200"
                src={user.profileImage}
                height={32}
                width={32}
                alt={`${user.name}'s profile`}
              />
              <div className="flex flex-col">
                <p>{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
            <p>{user.role}</p>

            <p className="w-17 hidden sm:block bg-[#0094481A] text-[#009448] ml-5  py-0.5 rounded-sm text-center">
              {user.status}
            </p>

            <p className="w-20 hidden md:block bg-[#0094481A] text-[#009448] ml-7 py-0.5 rounded-sm text-center">
              {user.verificationStatus || "-"}
            </p>

            <p className="hidden lg:block ml-8">{user.date}</p>

            <div className="flex gap-2 justify-center">
              <Image src="/images/PencilIcon.png" height={15} width={15} alt="Edit" />
              <Image src="/images/EyeIcon.png" height={15} width={15} alt="View" />
              <Image src="/images/DeleteIcon.png" height={15} width={15} alt="Delete" />
            </div>
          </div>
        ))}

        {filteredUsers.length === 0 && (
          <p className="text-gray-500 text-sm py-4 text-center">
            No matching users found.
          </p>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-14 bg-white flex flex-col md:flex-row items-start justify-between px-3 md:items-center pb-1 gap-4 md:gap-0 mt-3">
        <p className="text-xs mt-2">Showing {filteredUsers.length} result(s)</p>
        <div className="flex gap-1">
          <button className="bg-[#25A5B41A] size-8 rounded-lg flex justify-center items-center">
            <Image src="/images/TablePreviousButton.png" height={8} width={8} alt="Prev" />
          </button>
          <button className="bg-[#25A5B41A] text-[#25A5B4] size-8 rounded-lg flex justify-center items-center">
            1
          </button>
          <button className="bg-[#25A5B41A] text-[#25A5B4] size-8 rounded-lg flex justify-center items-center">
            2
          </button>
          <button className="bg-[#25A5B41A] text-[#25A5B4] size-8 rounded-lg flex justify-center items-center">
            ...
          </button>
          <button className="bg-[#25A5B41A] size-8 rounded-lg flex justify-center items-center">
            <Image src="/images/TableNextButton.png" height={20} width={20} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
