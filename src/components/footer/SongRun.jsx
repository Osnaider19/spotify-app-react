import { CiHeart } from "react-icons/ci";
import { CgInpicture } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";
export const SongRun = () => {
  const { track } = useSelector((state) => state.players);
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
  return (
    <>
      <div className="flex w-full  max-w-[450px]">
        <div className="flex px-2 py-1 gap-x-5 justify-center items-center">
          <div className="min-h-[55px] min-w-[55px] max-h-[55px] max-w-[55px]  rounded-lg overflow-hidden">
            <img
              src={
                track?.album?.images[2]?.url
                  ? track?.album?.images[2]?.url
                  : track?.album?.images[0]?.url
              }
              alt=""
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
            <div className="text-[12px] flex  justify-start items-center overflow-hidden line-clamp-1   w-full text-ellipsis">
              {track?.artists?.map((artist, index) => (
                <Link
                  key={artist.id}
                  to={`artist/${artist.id}`}
                  className="hover:underline mr-1 text-ellipsis"
                >
                  <span className=" truncate">
                    {artist.name} {index < track.artists.length - 1 && ", "}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-x-2 py-1 ml-2">
            <i className="text-2xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
              <CiHeart />
            </i>
            <i className="text-2xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white ">
              <CgInpicture />
            </i>
          </div>
        </div>
      </div>
      {track?.preview_url === null && runtost()}
    </>
  );
};
