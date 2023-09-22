import React from "react";
import { transformDuration, transformLikes } from "../../helpers/transform";
import { NavPlay } from "../playlist/NavPlay";
import { TbPointFilled } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { CardArtist } from "./CardArtist";

export const Track = () => {
  const { id } = useParams();
  const { responseToken } = useSelector((state) => state.authUser);
  const url = `https://api.spotify.com/v1/tracks/${id}`;
  const { data } = useFetch(url, responseToken.access_token);
  console.log(data);
  const select = {
    imagen: data?.album.images[1].url,
    type: data?.type,
    description: "",
    name: data?.name,
    linkUser: `/${data?.artists[0].type}/${data?.artists[0].id} `,
    album: data?.album,
    tracks: [],
    nameUser: data?.artists[0].name,
    link: 65656,
  };
  function obtenerAnio(fecha) {
    const anio = fecha.split("-")[0];
    return parseInt(anio);
  }
  return (
    <div className="relative min-w-full w-full h-full font-lato">
      <div
        className={`absolute left-0 top-0 w-full h-full bg-gradient-to-t from-transparent via-[#292331] to-[#3a343670]`}
      ></div>
      <div className="relative flex z-10 pt-[85px] px-6 w-full">
        <div className="max-h-[240px] max-w-[240px] w-full h-full overflow-hidden shadow-2xl">
          <div className="w-full h-full">
            <img
              src={select.imagen}
              id="bg_playlist"
              alt=""
              className="w-full h-full imagen"
            />
          </div>
        </div>
        <div className="w-full min-h-full">
          <div className="flex flex-col min-h-full justify-end items-start px-4">
            <div className="w-full">
              <p className="capitalize ">{select.type}</p>
              <p className="font-lato font-black py-1 text-5xl  w-full">
                {select.name}
              </p>
              <span className="py-2 block text-[#AAA8A9] font-semibold text-sm">
                {select.description}
              </span>
              <div className="py-1 flex">
                <div>
                  <Link to={select.linkUser}>
                    <strong className="hover:underline px-1 text-sm">
                      {select.nameUser}
                    </strong>
                  </Link>
                  <TbPointFilled className="inline-block text-[9px]" />
                </div>
                <div>
                  <Link to={`/${select?.album?.type}/${select?.album?.id}`}>
                    <span className="hover:underline px-1 text-sm">
                      {select?.album?.name}
                    </span>
                  </Link>
                  <TbPointFilled className="inline-block text-[9px]" />
                </div>
                <div>
                  <span className="px-1 text-sm">
                    {obtenerAnio(select?.album?.release_date ?? "")}
                  </span>
                  <TbPointFilled className="inline-block text-[9px]" />
                </div>
                <div>
                  <span className="px-1 text-sm">
                    {transformDuration(
                      data?.duration_ms ? data?.duration_ms : ""
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full  h-[500px] mt-8 ">
        <div className="absolute left-0 top-0 h-[400px]  w-full bg-gradient-to-t from-transparent via-black/20 to-black/20"></div>
        <div className="relative z-10">
          <NavPlay />
          <div className="px-4 py-3">
            {data?.artists.map((artist) => (
              <CardArtist
                key={artist.id}
                artist={artist.name}
                id={artist.id}
                imagen={data?.album.images[1].url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
