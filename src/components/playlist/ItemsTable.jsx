import React from "react";
import { TbPointFilled } from "react-icons/tb";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { transformDuration, transformDate } from "../../helpers/transform";
export const ItemsTable = ({
  num,
  track,
  album,
  date,
  duration,
  image,
  artists,

}) => {
  return (
    <>
      <tr className="rounded-3xl  hover:bg-[#1A1A1A]  relative ">
        <td className="px-4 rounded-s-md">{num}</td>
        <td>
          <div className="flex  items-center">
            <div className="max-w-[40px] max-h-[40px] w-full h-full bg-green-400">
              <img
                src={image}
                className="w-full h-full object-cover"
                alt={track?.name}
              />
            </div>
            <div className="flex flex-col px-3">
              <Link to={`/${track.type}/${track.id}`} className=" hover:underline">
                {track?.name}
              </Link>
              <div className="flex">
                {artists?.map((artist) => (
                  <Link
                    to={`/${artist.type}/${artist.id}`}
                    className="flex text-[14px] line-clamp-1 text-[#AAA8A9] hover:underline mr-1"
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
          <Link to={`/${album?.type}/${album?.id}`} className="line-clamp-1  text-[14px] max-w-[250px] overflow-ellipsis hover:underline text-[#AAA8A9]">
            {album?.name}
          </Link>
        </td>
        <td>
          <p className="min-w-[200px] max-w-[200px] text-[#AAA8A9]">{transformDate(date)}</p>
        </td>
        <td className="rounded-r-md">
          <div className="flex gap-x-3 justify-center items-center px-2">
            <button>
              <i className="text-[#AAA8A9] px-10">
                <BsHeart />
              </i>
            </button>
            <p className="text-[#AAA8A9]">{transformDuration(duration)}</p>
            <i className="w-full text-[7px] text-center  flex justify-center items-center text-white">
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
