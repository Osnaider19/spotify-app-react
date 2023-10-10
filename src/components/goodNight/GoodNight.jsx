import React from "react";
import { CardVertical } from "../card/CardVertical";

export const GoodNight = ({ data }) => {
  const select = {
    playList: data?.playList?.playlists?.items,
    albums: data?.albums?.albums?.items,
  };
  function saludoSegunHora() {
    const horaActual = new Date().getHours();
    if (horaActual >= 5 && horaActual < 12) {
      return "Good morning";
    } else if (horaActual >= 12 && horaActual < 18) {
      return "Good afternoon";
    } else {
      return "Good night";
    }
  }

  const saludo = saludoSegunHora();
  return (
    <div className="w-full relative  px-4">
      <h2 className="py-3 text-3xl font-extrabold">{saludo}</h2>
      <div className="mt-3 grid grid-rows-2 grid-cols-3 gap-3 w-full">
        {select?.playList?.slice(0, 3).map((list) => (
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
