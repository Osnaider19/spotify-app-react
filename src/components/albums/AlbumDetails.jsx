import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { LoaderPlayList } from "../loader/LoaderPlayList";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TbPointFilled } from "react-icons/tb";
import { NavPlay } from "../playlist/NavPlay";
import { Table } from "../table/Table";
import { Thead } from "../table/Thead";
import { Tbody } from "../table/Tbody";
import { Td } from "../table/Td";
import { Th } from "../table/Th";
import { BsFillPlayFill, BsHeart } from "react-icons/bs";
import { transformDuration } from "../../helpers/transform";
import { BiTime } from "react-icons/bi";
import { setTrackPlayer } from "../../redux/facture/players/players";
export const AlbumDetails = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const { id } = useParams();
  const url = `https://api.spotify.com/v1/albums/${id}`;
  const { data, isPending, error } = useFetch(url, responseToken?.access_token);

  console.log(data);
  console.log(id);

  const select = {
    type: data?.type,
    name: data?.name,
    imagen: data?.images[1].url,
    id: data?.id,
    artists: data?.artists,
    tracks: data?.tracks?.items,
    total_tracks: data?.total_tracks,
    release_date: data?.release_date,
    description: data?.label,
    linkUser: data?.artists[0].id,
    nameUser: data?.artists[0].name,
  };

  const dispatch = useDispatch();
  const handelplay = (track) => {
    const imagen = data?.images[2];
    track.album = {
      images: [imagen],
    };
    dispatch(setTrackPlayer(track));
  };
  return (
    <>
      {isPending && <LoaderPlayList />}
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
            <Table>
              <Thead>
                <Th title={"#"} />
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
                {select?.tracks?.map((track, index) => (
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
                        <div className="w-20px h-[20px]"></div>
                      </button>
                    </Td>
                    <Td>
                      <div>
                        <Link
                          to={`/track/${track.id}`}
                          className="hover:underline"
                        >
                          <p>{track.name}</p>
                        </Link>
                      </div>
                      {select?.artists?.map((artist) => (
                        <Link
                          key={artist.id}
                          to={`/artist/${artist.id}`}
                          className="hover:underline text-[#AAA8A9] mr-1  "
                        >
                          <span>{artist.name}</span>
                        </Link>
                      ))}
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
          </div>
        </div>
      </div>
    </>
  );
};
