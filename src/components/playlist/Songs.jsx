import { BsFillPlayFill, BsHeart } from "react-icons/bs";
import { Table } from "../table/Table";
import { Tbody } from "../table/Tbody";
import { Td } from "../table/Td";
import { Th } from "../table/Th";
import { Thead } from "../table/Thead";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsPlaying,
  setPlayList,
  setTrackPlayer,
} from "../../redux/facture/players/players";
import { Link } from "react-router-dom";
import { transformDate, transformDuration } from "../../helpers/transform";
import { TbPointFilled } from "react-icons/tb";
import { BiTime } from "react-icons/bi";
import { useGetDetailsPlayList } from "../../hooks/useGetDetailsPlayList";
import { Playing } from "../playing/Playing";

export const Songs = () => {
  const { data } = useGetDetailsPlayList();
  const { track, isplaying, currentMusic } = useSelector(
    (state) => state.players
  );

  const dispatch = useDispatch();
  const playlist = data?.data;
  const handelplay = (track) => {
    const tracks = currentMusic.tracks;
    const playlistsState = currentMusic.playlists;
    //validamos si las tracks de el estado son vacias entre o si la playlists es distinta a la playlist de el estado tambien entre por si es que quiere actualizar la playlists
    if (!tracks || playlistsState.id !== playlist.id) {
      //si entre actualizamos el estado con una nueva playlist y las lista de tracks
      dispatch(
        setPlayList({
          playlists: {
            id: playlist.id,
            name : playlist.name
          },
          tracks: data?.data.tracks.items,
        })
      );
      dispatch(setIsPlaying(true));
      dispatch(setTrackPlayer(track));
      const audio = document.querySelector("#audio");
      audio.autoplay = true;
    } else {
      //aqui actuzalizamos solo la track que se esta reproduciendo con la que el usuario seleccionó
      dispatch(setIsPlaying(true));
      dispatch(setTrackPlayer(track));
      const audio = document.querySelector("#audio");
      audio.autoplay = true;
    }
  };
  const tracks = data?.data?.tracks?.items;
  const songId = track?.id;
  const playing = (id) => id === songId && isplaying; // validar si la playlist que se esta reproduciendo es igual a la que se esta recoriendo para poder colocar el <Playing/>
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
                <div className="flex py-1 items-center">
                  <div className="max-w-[40px] max-h-[40px] w-full h-full bg-green-400">
                    <img
                      src={track?.album?.images[2]?.url}
                      className="w-full h-full object-cover "
                      alt={track?.name}
                    />
                  </div>
                  <div className="flex flex-col px-3">
                    <Link
                      to={`/track/${track?.id}`}
                      className={`hover:underline line-clamp-1 ${
                        track.id === songId && "text-green-500"
                      }`}
                    >
                      {track?.name}
                    </Link>
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
