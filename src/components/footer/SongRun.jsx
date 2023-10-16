import { CiHeart } from "react-icons/ci";
import { CgInpicture } from "react-icons/cg";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export const SongRun = () => {
  const { track , currentMusic } = useSelector((state) => state.players);

  function runtost() {
    toast.error("info", {
      description: `la track ${track?.name} no tiene audio 😔`,
      style: {
        background: "#121212",
        color: "#1FDF64",
        borderColor: "#1FDF64",
        fontSize: "14px",
        textTransform: "capitalize",
      },
    });
  }

  const imagen = track?.album?.images[2]?.url 
  ? track?.album?.images[2]?.url //si entra aca es una playlists
  : currentMusic?.playlists?.images[2]?.url //si entra aca es un album
  return (
    <>
      <div className="flex max-w-[450px] overflow-hidden  w-full">
        <div className="flex px-2 py-1  justify-center items-center max-w-[450px] ">
          <div className="min-h-[55px] min-w-[55px] max-h-[55px] max-w-[55px]  rounded-lg overflow-hidden mr-2">
            <img
              src={imagen}
              alt={track?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Link
              to={`track/${track?.id}`}
              className="text-sm hover:underline line-clamp-1"
            >
              {track?.name}
            </Link>
            <div className="text-[12px] flex  justify-start items-center overflow-hidden text-[#AAA8A9]">
              {track?.artists?.map((artist, index) => (
                <Link
                  key={artist.id}
                  to={`artist/${artist.id}`}
                  className="hover:underline"
                >
                  <span className="truncate line-clamp-1">
                    {artist.name} {index < track.artists.length - 1 && ", "}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-x-2 py-1 ml-3 ">
            <i className="text-2xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
              <CiHeart />
            </i>
            <i className="text-2xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white ">
              <CgInpicture />
            </i>
          </div>
        </div>
      </div>
      {track?.preview_url === null && runtost()} {/* si no tiene audio la track mandamos la notificacion */}
    </>
  );
};
