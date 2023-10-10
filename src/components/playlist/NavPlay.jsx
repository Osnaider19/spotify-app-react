import { BsHeart } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { IconPause, IconPlay } from "../../Icons/Icons";
export const NavPlay = ({ handelPlay, id }) => {
  const { isplaying, currentMusic } = useSelector((state) => state.players);
  const playlistsId = currentMusic?.playlists?.id;
  return (
    <div>
      <div className="flex py-4 px-4 gap-x-7 items-center">
        <button
          className="w-[55px] h-[55px] bg-green-500 rounded-full  transition-all duration-200 hover:scale-105"
          onClick={() => {
            handelPlay(id);
            const audio = document.querySelector("#audio");
            if (!isplaying) audio?.play();
            else audio?.pause();
          }}
        >
          <i className="w-full text-1xl h-full flex justify-center items-center text-black">
            {/* validar que si  la playlist es igual ala que se esta reproduciendo */}
            {isplaying && playlistsId === id ? <IconPause /> : <IconPlay />}
          </i>
        </button>
        <button className="flex justify-center items-center h-full ">
          <i className="w-full text-3xl h-full flex justify-center items-center text-white">
            <BsHeart />
          </i>
        </button>
        <button className="flex justify-center items-center ">
          <i className="w-full text-[12px] text-center  flex justify-center items-center text-white">
            <TbPointFilled />
            <TbPointFilled />
            <TbPointFilled />
          </i>
        </button>
      </div>
    </div>
  );
};
