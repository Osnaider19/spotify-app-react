import React from "react";
import { Table } from "../table/Table";
import { Thead } from "../table/Thead";
import { Th } from "../table/Th";
import { Tbody } from "../table/Tbody";
import { Td } from "../table/Td";
import { BsFillPlayFill, BsHeart } from "react-icons/bs";
import { transformDate, transformDuration } from "../../helpers/transform";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTrackPlayer } from "../../redux/facture/players/players";
import { BiTime } from "react-icons/bi";
export const Popular = ({ tracks }) => {
  const dispatch = useDispatch();
  const handelplay = (track) => {
    dispatch(setTrackPlayer(track));
  };

  return (
    <div className="w-full h-full">
      <Table>
        <Thead>
          <Th title={"#"} />
          <Th title={"Popular"} />
          
          <Th
            title={
              <div className="flex justify-end items-center text-xl pr-8">
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
                </button>
              </Td>
              <Td>
                <div className="flex py-1 items-center w-full">
                  <div className="max-w-[40px] max-h-[40px] w-full h-full bg-green-400">
                    <img
                      src={track?.album?.images[2]?.url}
                      className="w-full h-full object-cover"
                      alt={track?.name}
                    />
                  </div>
                  <div className="flex flex-col px-3 w-full ">
                    <Link
                      to={`/${track.type}/${track.id}`}
                      className=" hover:underline  w-full line-clamp-1 overflow-ellipsis"
                    >
                      {track?.name}
                    </Link>
                    <div className="flex w-full max-w-[350px] text-ellipsis  line-clamp-1 overflow-hidden justify-start items-center ">
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
                </div>
              </Td>
              
              <Td>
                <div className="flex gap-x-3 justify-end items-center px-2 w-full ">
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
    </div>
  );
};
