import React from "react";
import Header from "../components/UserComponents/UserHeader";
import Footer from "../components/UserComponents/Footer";

const UserLayout = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full justify-between items-center gap-8">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;
