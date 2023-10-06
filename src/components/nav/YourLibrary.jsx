"use client";
import { MdAdd } from "react-icons/md";
import { BiRightArrowAlt } from "react-icons/bi";
import { IconLibrary } from "../../Icons/Icons";
export const YourLibrary = () => {
  return (
    <section className="px-4 mt-3">
      <div className="flex justify-between items-center my-2">
        <div className="flex gap-x-3 justify-center items-center">
          <i className="text-2xl">
            <IconLibrary/>
          </i>
          <span>Your Librery</span>
        </div>
        <div className="flex gap-x-1 ">
          <i className="h-[32px] w-[32px] text-[#ffffff80] hover:text-[#fff] cursor-pointer rounded-full flex flex-col justify-center items-center text-2xl hover:bg-[rgba(255,255,255,0.1)]">
            <MdAdd />
          </i>
          <i className="h-[32px] cursor-pointer w-[32px] text-[#ffffff80] hover:text-[#fff]  rounded-full flex flex-col justify-center items-center text-2xl hover:bg-[rgba(255,255,255,0.1)]">
            <BiRightArrowAlt />
          </i>
        </div>
      </div>
      <div className="mt-5">
        <button className="py-1 px-3 bg-[#2A2A2A] rounded-2xl hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-200">
          Playlists
        </button>
      </div>
    </section>
  );
};
