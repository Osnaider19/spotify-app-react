import { BsFillPlayFill, BsHeart } from "react-icons/bs";
import { Table } from "../table/Table";
import { Tbody } from "../table/Tbody";
import { Td } from "../table/Td";
import { Th } from "../table/Th";
import { Thead } from "../table/Thead";
import { useDispatch } from "react-redux";
import { setTrackPlayer } from "../../redux/facture/players/players";
import { Link } from "react-router-dom";
import { transformDate, transformDuration } from "../../helpers/transform";
import { TbPointFilled } from "react-icons/tb";
import { BiTime } from "react-icons/bi";
import { useGetDetailsPlayList } from "../../hooks/useGetDetailsPlayList";

export const Songs = () => {
  const { data } = useGetDetailsPlayList();
  const dispatch = useDispatch();
  const handelplay = (track) => {
    dispatch(setTrackPlayer(track));
  };
  const tracks = data?.data?.tracks?.items;
  return (
    <Table>
      <Thead>
        <Th title={"#"} />
        <Th title={"Title"} />
        <Th title={"Album"} />
        <Th title={"Date added"} />
        <Th
          title={
            <div className="ml-4 flex justify-center items-center text-xl">
              <BiTime />
            </div>
          }
        />
      </Thead>
      <Tbody>
        {tracks?.map(({ track, added_at }, index) => {
          if (!track) return; //por si la track viene vacia no rederize un elemento vacio
          return (
            <tr className="tr_content" key={track?.id}>
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
                <div className="flex py-1 items-center">
                  <div className="max-w-[40px] max-h-[40px] w-full h-full bg-green-400">
                    <img
                      src={track?.album?.images[2]?.url}
                      className="w-full h-full object-cover"
                      alt={track?.name}
                    />
                  </div>
                  <div className="flex flex-col px-3">
                    <Link
                      to={`/track.track/${track?.id}`}
                      className=" hover:underline line-clamp-1 "
                    >
                      {track?.name}
                    </Link>
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
                </div>
              </Td>
              <Td>
                <div className="max-w-[200px] min-w-[150px] overflow-ellipsis">
                  <Link
                    to={`/${track?.album?.type}/${track?.album?.id}`}
                    className="line-clamp-1  text-[14px] max-w-[250px] overflow-ellipsis hover:underline text-[#AAA8A9]"
                  >
                    {track?.album?.name}
                  </Link>
                </div>
              </Td>
              <Td>
                <p className="min-w-[200px] max-w-[200px] text-[#AAA8A9]">
                  {transformDate(added_at)}
                </p>
              </Td>
              <Td>
                <div className="flex gap-x-3 justify-center items-center px-2">
                  <button className="button_like">
                    <BsHeart className="icon_play" />
                  </button>
                  <p className="text-[#AAA8A9]">
                    {transformDuration(track?.duration_ms)}
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
