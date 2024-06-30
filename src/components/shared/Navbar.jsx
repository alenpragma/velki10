"use client";

import Link from "next/link";
import { useState } from "react";
import Login from "../ui/Login/Login";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const navItem = [
  { name: "Home", pathname: "/" },
  { name: "In-Play", pathname: "in-play" },
  { name: "Football", pathname: "football" },
  { name: "Cricket", pathname: "cricket" },
  { name: "Casino", pathname: "casino" },
  { name: "Election", pathname: "election" },
];

const Navbar = () => {
  const [isLoginShow, setIsLoginShow] = useState(false);
  const handleLoginToggle = () => {
    setIsLoginShow(!isLoginShow);
  };
  const pathname = usePathname();
  return (
    <>
      <Login isLoginShow={isLoginShow} handleLoginToggle={handleLoginToggle} />
      <div className="w-full bg-black text-white">
        <div className="flex justify-between items-center py-3 px-5">
          <div className="flex items-center gap-4 py-[2px]">
            <Link href="/" className="font-semibold text-[20px] text-primary">
              Velki
            </Link>
            <form>
              <div className="relative h-fit">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-8 text-black md:w-[250px] w-[100px] md:block hidden rounded border border-slate-300 focus:outline focus:outline-slate-400"
                />
                <CiSearch className="absolute top-0 bottom-0 my-0 ml-2 mt-[4px] text-slate-500 text-[18px]  h-fit" />
              </div>
            </form>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="bg-primary px-2 py-1 rounded w-[100px]"
              onClick={handleLoginToggle}
            >
              Login
            </button>
            <Link href="/signUp">
              <button className="bg-primary px-2 py-1 rounded w-[100px]">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-primary px-5">
          <nav className="flex items-center overflow-x-auto">
            {navItem.map((item, i) => (
              <Link
                key={i}
                href={`/${item.pathname}`}
                className={`px-3 py-1 text-[14px] border-r border-secondary  text-black ${
                  pathname === `${item.pathname}`
                    ? "bg-[#FFDC7A] font-bold rounded"
                    : ""
                }`}
              >
                <span className="hover:border-b border-black duration-300">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
