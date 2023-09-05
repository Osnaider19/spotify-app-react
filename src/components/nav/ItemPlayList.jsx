import React from "react";

export const ItemPlayList = () => {
  return (
    <div className="px-4 mt-3">
      <div className="flex gap-x-3 px-2 py-2 bg-[rgba(255,255,255,0.1)] rounded-lg">
        <div className="h-[50px] w-[50px] bg-red-300 rounded-lg"></div>
        <div className="flex flex-col gap-x-3">
          <span className="block ">liked Songs</span>
          <strong className="text-sm">Playlists - 2 songs</strong>
        </div>
      </div>
    </div>
  );
};
