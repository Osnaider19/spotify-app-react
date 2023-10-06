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
import { useDispatch } from "react-redux";
import { setTrackPlayer } from "../../redux/facture/players/players";
import { useGetDetailsAlbum } from "../../hooks/useGetDetailsAlbum";

export const SongsAlbum = () => {
  const dispatch = useDispatch();
  const { data } = useGetDetailsAlbum();

  const handelplay = (track) => {
    const imagen = data?.data?.images[2];
    track.album = {
      images: [imagen],
    };
    dispatch(setTrackPlayer(track));
  };

  const tracks = data?.data?.tracks?.items;

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
        {tracks?.map((track, index) => (
          <tr className="tr_content" key={track.id}>
            <Td>
              <button
                className="button__play"
                onClick={() => {
                  handelplay(track);
                }}
              >
                <span className="num__list">{index + 1}</span>
                <BsFillPlayFill className="icono_play" />
                <div className="w-25px h-[25px]"></div>
              </button>
            </Td>
            <Td>
              <div className="w-full ">
                <div>
                  <Link to={`/track/${track.id}`} className="hover:underline">
                    <p>{track.name}</p>
                  </Link>
                </div>
                <div className="flex w-full max-w-[350px] text-ellipsis line-clamp-1 overflow-hidden justify-start items-center ">
                  {track?.artists?.map((artist) => (
                    <Link
                      to={`/${artist.type}/${artist.id}`}
                      className="text-[13px] line-clamp-1 text-[#AAA8A9] hover:underline mr-1"
                      key={artist.id}
                    >
                      {artist.name}
                    </Link>
                  ))}
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
        ))}
      </Tbody>
    </Table>
  );
};
