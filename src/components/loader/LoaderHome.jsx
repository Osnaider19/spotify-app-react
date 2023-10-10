import React from "react";
import { LoaderCard } from "./LoaderCard";

export const LoaderHome = () => {
  return (
    <>
      <div className="pt-[65px]">
        <div className="h-7 bg-[#706f6f] rounded w-[300px] ml-4 mt-8"></div>
        <div className=" mt-3 grid grid-rows-2 grid-cols-3 gap-3 w-full px-4 ">
          <div className="shadow rounded-md  max-w-sm w-full mx-auto bg-[#36363680]">
            <div className="animate-pulse flex  items-center">
              <div className="rounded-md bg-[#706f6f] h-[80px] w-[80px]"></div>
              <div className="h-4 bg-[#706f6f] rounded w-[50%] ml-4"></div>
            </div>
          </div>

          <div className="shadow rounded-md  max-w-sm w-full mx-auto bg-[#36363680]">
            <div className="animate-pulse flex  items-center">
              <div className="rounded-md bg-[#706f6f] h-[80px] w-[80px]"></div>
              <div className="h-4 bg-[#706f6f] rounded w-[50%] ml-4"></div>
            </div>
          </div>

          <div className="shadow rounded-md  max-w-sm w-full mx-auto bg-[#36363680]">
            <div className="animate-pulse flex  items-center">
              <div className="rounded-md bg-[#706f6f] h-[80px] w-[80px]"></div>
              <div className="h-4 bg-[#706f6f] rounded w-[50%] ml-4"></div>
            </div>
          </div>

          <div className="shadow rounded-md  max-w-sm w-full mx-auto bg-[#36363680]">
            <div className="animate-pulse flex  items-center">
              <div className="rounded-md bg-[#706f6f] h-[80px] w-[80px]"></div>
              <div className="h-4 bg-[#706f6f] rounded w-[50%] ml-4"></div>
            </div>
          </div>

          <div className="shadow rounded-md  max-w-sm w-full mx-auto bg-[#36363680]">
            <div className="animate-pulse flex  items-center">
              <div className="rounded-md bg-[#706f6f] h-[80px] w-[80px]"></div>
              <div className="h-4 bg-[#706f6f] rounded w-[50%] ml-4"></div>
            </div>
          </div>

          <div className="shadow rounded-md  max-w-sm w-full mx-auto bg-[#36363680]">
            <div className="animate-pulse flex  items-center">
              <div className="rounded-md bg-[#706f6f] h-[80px] w-[80px]"></div>
              <div className="h-4 bg-[#706f6f] rounded w-[50%] ml-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-6">
        <div className="h-7 bg-[#706f6f] rounded w-[250px] ml-4 mb-5"></div>
        <LoaderCard />
      </div>
    </>
  );
};
