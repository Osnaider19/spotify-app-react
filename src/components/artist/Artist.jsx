import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetArtist } from "../../hooks/useGetArtist";
import { NavPlay } from "../playlist/NavPlay";
import { Popular } from "./Popular";
import "./index.css";
import { transformLikes } from "../../helpers/transform";
import { ArtistAlbums } from "./ArtistAlbums";
import { LoaderPlayList } from "../loader/LoaderPlayList";
export const Artist = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const { id } = useParams();
  const { data , isPending , error} = useGetArtist(id, responseToken?.access_token);

  console.log(data);
  return (
    <>
      {isPending && <LoaderPlayList/>}
      <div className="relative h-full w-full flex flex-col">
        <div
          className="w-full z-0 absolute left-0 top-0 h-[350px]"
          style={{
            backgroundImage: `url(${data?.info?.images[0]?.url})`,
            backgroundPosition: "center , center ",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="w-full h-[350px] absolute left-0 top-0 bg-black/30"></div>
        <div className="flex justify-center flex-col relative items-center w-full z-10 pt-[70px] ">
          <div className="flex justify-start flex-col w-full px-7  h-full">
            <span></span>
            <p className="text-7xl font-extrabold pt-7">{data?.info?.name}</p>
            <p className="pt-6 text-lg">
              {transformLikes(
                data?.info?.followers?.total ? data?.info?.followers?.total : ""
              )}
              {" "} Followers
            </p>
          </div>
          <div className="w-full h-full relative mt-10">
            <div className="linear__gradient_artists"></div>
            <div className=" flex justify-start items-start w-full relative z-10">
              <NavPlay />
            </div>
            <Popular tracks={data?.top?.tracks} />
          </div>
          <ArtistAlbums albums={data?.albums?.items} />
        </div>
      </div>
    </>
  );
};
