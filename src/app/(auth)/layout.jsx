import React from "react";
import Link from "next/link";
import Image from "next/image";

const AuthLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-2 h-screen w-full">
      <div className="">
        <Link href="/">
          <Image className="" src="/images/background-auth.jpg" height={2000} width={700} alt="Logo" />
        </Link>
      </div>
      <div className="h-screen flex flex-col justify-evenly items-center text-2xl bg-red-300 w-full  ">
        <div className="flex flex-col ">
          <p className="text-2xl">Welcome Back</p>
          <p className="text-lg text-gray-100">
            Login to explore exciting auctions and unique fields
          </p>
        </div>

        <div className="w-[65%] flex flex-col justify-evenly items-start gap-2">
          <p className="text-lg">Email</p>
          <input
            placeholder="Enter your Email,username or phone"
            type="text"
            className="bg-white rounded-lg pl-2 h-10 w-100 text-sm"
          />
          <p className="text-lg">Password</p>
          <input
            placeholder="Enter your password"
            type="text"
            className="text-sm bg-white rounded-lg pl-2 h-10 w-100"
          />
          <div className="w-full flex justify-between items-center">
            <div className="w-[38%] flex justify-between items-center">
              <button className="bg-white border-gray-200 border-1 size-5 rounded-sm "></button>
              <p className="text-base">Keep me logged in</p>
            </div>
            <a className="text-green-700 text-base">Forgot password?</a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <button className="h-15 w-70 rounded-full bg-green-700 hover:bg-green-900 text-white text-lg">
            Login to your Account
          </button>
          <div className="flex justify-center items-center">
            <p className="text-sm">New to Mumtlikaty?</p>
            <a href="" className="text-green-800 text-base font-semibold">
              Create Account
            </a>
          </div>
          <p className="text-base">Or</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
