import React from "react";
import { LoaderPlayList } from "../loader/LoaderPlayList";
import { Link } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
import { NavPlay } from "../playlist/NavPlay";
import { useGetDetailsAlbum } from "../../hooks/useGetDetailsAlbum";
import { SongsAlbum } from "./SongsAlbum";
export const AlbumDetails = () => {
  const { data, isLoading } = useGetDetailsAlbum();
  const select = {
    type: data?.data?.type,
    name: data?.data?.name,
    imagen: data?.data?.images[1]?.url,
    id: data?.data?.id,
    artists: data?.data?.artists,
    tracks: data?.data?.tracks?.items,
    total_tracks: data?.data?.total_tracks,
    release_date: data?.data?.release_date,
    description: data?.data?.label,
    linkUser: data?.data?.artists[0].id,
    nameUser: data?.data?.artists[0].name,
  };

  if (isLoading) return <LoaderPlayList />;

  return (
    <>
      <div className="relative min-w-full w-full h-full font-lato">
        <div
          className={`absolute left-0 top-0 w-full h-full bg-gradient-to-t from-transparent via-[#292331] to-[#3a343670]`}
        ></div>
        <div className="relative flex z-10 pt-[85px] px-6 w-full">
          <div className="min-h-[240px] min-w-[240px] max-h-[240px] max-w-[240px] w-full h-full overflow-hidden shadow-2xl">
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
                <div className="py-1">
                  <Link to={`/artist/${select.linkUser}`}>
                    <strong className="hover:underline px-1 text-sm">
                      {select.nameUser}
                    </strong>
                  </Link>
                  <TbPointFilled className="inline-block text-[9px]" />
                  <span className="px-1 text-sm">
                    {select?.tracks?.length} songs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full  h-[500px] mt-8 ">
          <div className="absolute left-0 top-0 h-[400px]  w-full bg-gradient-to-t from-transparent via-black/20 to-black/20"></div>
          <div className="relative z-10">
            <NavPlay />
            <SongsAlbum tracks={select.tracks} />
          </div>
        </div>
      </div>
    </>
  );
};
