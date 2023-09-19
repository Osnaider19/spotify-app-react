import React from "react";
import { TbPointFilled } from "react-icons/tb";
import { BsHeart, BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./table.css";
import { transformDuration, transformDate } from "../../helpers/transform";
import { setTrackPlayer } from "../../redux/facture/players/players";
import { useDispatch } from "react-redux";
export const ItemsTable = ({
  num,
  track,
  album,
  date,
  duration,
  image,
  artists,
}) => {
  const dispatch = useDispatch();
  const handelplay = () => {
    dispatch(setTrackPlayer(track));
  };
  return (
    <>
      <tr className="tr_content">
        <td>
          <button className="button__play" onClick={handelplay}>
            <span className="num__list">{num + 1}</span>
            <BsFillPlayFill className="icono_play" />
          </button>
        </td>
        <td>
          <div className="flex py-1 items-center">
            <div className="max-w-[40px] max-h-[40px] w-full h-full bg-green-400">
              <img
                src={image}
                className="w-full h-full object-cover"
                alt={track?.name}
              />
            </div>
            <div className="flex flex-col px-3">
              <Link
                to={`/${track.type}/${track.id}`}
                className=" hover:underline"
              >
                {track?.name}
              </Link>
              <div className="flex w-full max-w-[350px] text-ellipsis line-clamp-1 overflow-hidden justify-start items-center ">
                {artists?.map((artist) => (
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
        </td>
        <td className="max-w-[200px] min-w-[150px] overflow-ellipsis">
          <Link
            to={`/${album?.type}/${album?.id}`}
            className="line-clamp-1  text-[14px] max-w-[250px] overflow-ellipsis hover:underline text-[#AAA8A9]"
          >
            {album?.name}
          </Link>
        </td>
        <td>
          <p className="min-w-[200px] max-w-[200px] text-[#AAA8A9]">
            {transformDate(date)}
          </p>
        </td>
        <td className="rounded-r-md">
          <div className="flex gap-x-3 justify-center items-center px-2">
            <button className="button_like">
              <BsHeart className="icon_play" />
            </button>
            <p className="text-[#AAA8A9]">{transformDuration(duration)}</p>
            <i className="button__details">
              <TbPointFilled />
              <TbPointFilled />
              <TbPointFilled />
            </i>
          </div>
        </td>
      </tr>
    </>
  );
};
