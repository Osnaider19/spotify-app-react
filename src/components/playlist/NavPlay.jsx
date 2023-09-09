import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import {TbPointFilled} from 'react-icons/tb'
export const NavPlay = () => {
  return (
    <div>
      <div className="flex py-4 px-4 gap-x-7 items-center">
        <button className="w-[55px] h-[55px] bg-green-500 rounded-full  transition-all duration-200">
          <i className="w-full text-1xl h-full flex justify-center items-center text-black">
            <FaPlay />
          </i>
        </button>
        <button className="flex justify-center items-center h-full ">
          <i className="w-full text-3xl h-full flex justify-center items-center text-white">
            <BsHeart />
          </i>
        </button>
        <button className="flex justify-center items-center ">
          <i className="w-full text-[12px] text-center  flex justify-center items-center text-white">
            <TbPointFilled/>
            <TbPointFilled/>
            <TbPointFilled/>
          </i>
        </button>
      </div>
    </div>
  );
};
