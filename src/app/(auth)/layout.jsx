import React from 'react';
import LeftDesign from '../components/auth/leftdesign';
import RightDesign from '../components/auth/rightdesign';

const Layout = ({ children }) => {
  return (
    <div className="relative flex justify-between items-center min-h-screen">
      {/* Left Side Design */}
      <LeftDesign />

      

      {/* Middle Content (Centered) */}
      <div className="flex flex-1 justify-center items-center">
        {children}
      </div>

      {/* Right Side Design */}
      <div className="hidden lg:block absolute top-0 right-0 h-full">
        <RightDesign />
      </div>
    </div>
  );
};

export default Layout;
