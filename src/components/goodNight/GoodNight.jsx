import React from "react";
import { CardVertical } from "../card/CardVertical";

export const GoodNight = ({data}) => {
  return (
    <div className="w-full relative h-[260px]  px-4">
      <h2 className="py-3 text-3xl font-extrabold">Buenas noches</h2>
      <div className="mt-3 flex justify-between gap-y-4 items-center flex-wrap w-full">
        {data?.playListUser?.items?.map((list) => (
          <CardVertical
            key={list.id}
            imagen={
              list?.images[1]?.url ? list?.images[1]?.url : list?.images[0]?.url
            }
            name={list.name}
            link={`/${list.type}/${list.id}`}
          />
        ))}
        {data?.playList?.playlists?.items?.slice(8, 10).map((list) => (
          <CardVertical
            key={list.id}
            imagen={
              list?.images[1]?.url ? list?.images[1]?.url : list?.images[0]?.url
            }
            name={list.name}
            link={`/${list.type}/${list.id}`}
          />
        ))}
        {data?.albums?.albums?.items?.slice(0, 2).map((list) => (
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
