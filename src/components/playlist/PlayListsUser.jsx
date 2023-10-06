import React from "react";
import { Link } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { FiMusic } from "react-icons/fi";
import { useQuery } from "@tanstack/react-query";
export const PlayListsUser = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const token = responseToken?.access_token;
   const getPlayList = async ()=> {
   const res = await fetch(`https://api.spotify.com/v1/me/playlists`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
   })
   if(!res.ok) {
    throw new Error("error al obtener las playlist de el usuario")
   };
   const data = await res.json();
   return {
    data
   }
  }
  const { data , isLoading } = useQuery(["playListUser"] , getPlayList)
  const playListsUser = data?.data.items
  
  //hacer el loader de las playlist 

  return (
    <div className="px-4 mt-3 ">
      {playListsUser?.map((lists) => (
        <Link key={lists.id} to={`/playlist/${lists?.id}`}>
          <div className="flex gap-x-3  px-2 py-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg cursor-pointer transition-colors duration-150">
            <div className="h-[50px]  w-[50px] bg-[#282828] rounded-lg text-[#B3B3B3] overflow-hidden">
              {lists?.images[2]?.url ? (
                <img
                  src={lists?.images[2]?.url}
                  alt=""
                  className="w-full h-full"
                />
              ) : (
                <i
                  className="flex justify-center items-center w-full 
                h-full  text-3xl"
                >
                  <FiMusic />
                </i>
              )}
            </div>
            <div className="flex flex-col justify-between gap-x-3">
              <span className="block ">{lists?.name}</span>
              <div className="text-[15px] capitalize flex justify-center gap-x-1 items-center">
                <span>{lists.type} </span>
                <TbPointFilled className="flex text-[10px]" />
                <span>{lists?.owner?.display_name}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
