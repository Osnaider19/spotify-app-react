"use client";
import {  BiSolidDownArrow} from "react-icons/bi";
import {BsSearch} from 'react-icons/bs'
export const PlayLists = () => {
  return (
    <div className="px-4 mt-6">
      <div className="flex justify-between">
        <button>
          <i className="h-[32px] cursor-pointer w-[32px] text-[#ffffff80] hover:text-[#fff]  rounded-full flex flex-col justify-center items-center text-lg hover:bg-[rgba(255,255,255,0.1)]">
            <BsSearch />
          </i>
        </button>
        <button className="flex justify-center gap-x-2 items-center text-sm">
            <span>Recents</span>
            <i><BiSolidDownArrow/></i>
        </button>
      </div>
    </div>
  );
};
