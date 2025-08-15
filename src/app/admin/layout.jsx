"use client";
import React, { useState } from "react";
import Sidebar from "../../AdminComponents/Sidebar";
import AdminHeader from "../../AdminComponents/AdminHeader";
import Table from "../../AdminComponents/Table";

const AdminLayout = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex bg-[#ecf1f5]">
      <Sidebar />
      <div className="flex flex-col w-full gap-5">
        <AdminHeader search={search} setSearch={setSearch} />
        <Table search={search} />
      </div>
    </div>
  );
};

export default AdminLayout;
