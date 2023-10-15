import React from "react";
import { Table } from "../table/Table";
import { Thead } from "../table/Thead";
import { Th } from "../table/Th";
import { Tbody } from "../table/Tbody";
import { Td } from "../table/Td";
import { transformDuration } from "../../helpers/transform";
import { BiTime } from "react-icons/bi";
import { BsFillPlayFill, BsHeart } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsPlaying,
  setPlayList,
  setTrackPlayer,
} from "../../redux/facture/players/players";
import { useGetDetailsAlbum } from "../../hooks/useGetDetailsAlbum";
import { Playing } from "../playing/Playing";

export const SongsAlbum = () => {
  const { data } = useGetDetailsAlbum();
  const { track, isplaying } = useSelector((state) => state.players);
  const dispatch = useDispatch();
  

  const songId = track?.id;
  const tracks = data?.data?.tracks?.items;
  const playing = (id) => id === songId && isplaying;
  const imagen = data?.data?.images[1].url;

  const handelplay = (track) => {
    const imagen = data?.data?.images[2]
      ? data?.data?.images[2]
      : data?.data?.images[1];
    const id = data?.data.id;
    const trackImage = { ...track, album: { images: [imagen] } }; //mutamos el objeto para que pueda tener una imagen porque el objeto no tiene una imagen
    dispatch(setTrackPlayer(trackImage));
    dispatch(setPlayList({ id: id }));
    dispatch(setIsPlaying(true));
    const audio = document.querySelector("#audio");
    audio.autoplay = true;
  };
  if (!data.data?.tracks?.items) return;
  return (
    <Table>
      <Thead>
        <Th title={"#"} className={"w-[60px]"} />
        <Th title={"Title"} />
        <Th
          title={
            <div className="w-full text-xl flex justify-end px-8 text-end ">
              <BiTime />
            </div>
          }
        />
      </Thead>
      <Tbody>
        {tracks?.map((track, index) => {
          if (!track) return;
          return (
            <tr className="tr_content" key={track.id}>
              <Td>
                <button
                  className="button__play"
                  onClick={() => {
                    handelplay(track);
                  }}
                >
                  {playing(track?.id) && track.preview_url ? (
                    <Playing />
                  ) : (
                    <div className="w-[20px] h-[20px] justify-center items-center">
                      <span className="num__list">{index + 1}</span>
                      <BsFillPlayFill className="icono_play" />
                    </div>
                  )}
                </button>
              </Td>
              <Td>
                <div className="w-full flex py-1 items-center ">
                  <div className="max-w-[40px] max-h-[40px] w-full h-full bg-green-400">
                    <img
                      src={imagen}
                      className="w-full h-full object-cover "
                      alt={track?.name}
                    />
                  </div>
                  <div className="flex flex-col px-3">
                    <div>
                      <Link
                        to={`/track/${track.id}`}
                        className={`hover:underline line-clamp-1 ${track.id === songId && "text-green-500"}`}
                      >
                        <p>{track.name}</p>
                      </Link>
                    </div>
                    <div className="flex w-full max-w-[350px] text-ellipsis overflow-hidden justify-start items-center ">
                      {track?.artists?.map((artist, index) => (
                        <Link
                          to={`/${artist.type}/${artist.id}`}
                          className="text-[13px] truncate text-[#AAA8A9] hover:underline mr-[1px]"
                          key={artist.id}
                        >
                          {artist.name}{" "}
                          {index < track.artists.length - 1 && ", "}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Td>
              <Td>
                <div className="flex gap-x-3 justify-end items-center  px-2">
                  <button className="button_like">
                    <BsHeart className="icon_play" />
                  </button>
                  <p className="text-[#AAA8A9]">
                    {transformDuration(track.duration_ms)}
                  </p>
                  <i className="button__details">
                    <TbPointFilled />
                    <TbPointFilled />
                    <TbPointFilled />
                  </i>
                </div>
              </Td>
            </tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
