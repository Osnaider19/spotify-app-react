import React from "react";
import { CardVertical } from "../card/CardVertical";

export const GoodNight = ({data}) => {
  const select = {
    playList : data?.playList?.playlists?.items,
    albums : data?.albums?.albums?.items,
  }
  return (
    <div className="w-full relative h-[260px]  px-4">
      <h2 className="py-3 text-3xl font-extrabold">Buenas noches</h2>
      <div className="mt-3 flex justify-between gap-y-4 items-center flex-wrap w-full">
        {select?.playList?.slice(7, 10).map((list) => (
          <CardVertical
            key={list.id}
            imagen={
              list?.images[1]?.url ? list?.images[1]?.url : list?.images[0]?.url
            }
            name={list.name}
            link={`/${list.type}/${list.id}`}
          />
        ))}
        {select?.albums?.slice(0, 3).map((list) => (
          <CardVertical
            key={list.id}
            imagen={
              list?.images[1]?.url ? list?.images[1]?.url : list?.images[0]?.url
            }
            name={list.name}
            link={`/${list.type}/${list.id}`}
          />
        ))}
      </div>
    </div>
  );
};
