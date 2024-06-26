"use client";

import { RiAccountCircleFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa";

const FooterNab = () => {
  return (
    <div className="py-2 w-full bg-[#1F323F] text-white sm:hidden fixed z-50 bottom-0 flex justify-around items-center">
      <div className="flex flex-col items-center flex-1">
        <FaTrophy className="text-[28px]" />
        <h3 className="font-semibold text-white">Live</h3>
      </div>
      <div className="flex flex-col items-center flex-1">
        <FaArtstation className="text-[28px]" />
        <h3 className="font-semibold text-white">Play</h3>
      </div>
      <div className="flex flex-col items-center flex-1">
        <FaHome className="text-[32px]" />
        <h3 className="font-semibold text-white">Home</h3>
      </div>
      <div className="flex flex-col items-center flex-1">
        <FaAward className="text-[28px]" />
        <h3 className="font-semibold text-white">Reward</h3>
      </div>
      <div className="flex flex-col items-center flex-1">
        <RiAccountCircleFill className="text-[28px]" />
        <h3 className="font-semibold text-white">Account</h3>
      </div>
    </div>
  );
};

export default FooterNab;
