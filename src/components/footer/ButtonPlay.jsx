import { IoIosPause } from "react-icons/io";
import { BsPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "../../redux/facture/players/players";

export const ButtonPlay = ({ refAudio }) => {
  const { track, isplaying } = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const toggleAudio = () => {
    const audio = refAudio.current;
    if (audio.paused) {
      audio.play();
      dispatch(setIsPlaying(true)); // state global
      audio.autoplay = true;
    } else {
      audio.pause();
      dispatch(setIsPlaying(false));
    }
  };
  return (
    <button
      className={`h-[35px] w-[35px] hover:scale-105 rounded-full bg-[#fff] overflow-hidden ${
        track?.preview_url
          ? "opacity-100 pointer-events-auto"
          : "opacity-50 pointer-events-none"
      }`}
      onClick={toggleAudio}
    >
      <i className="flex justify-center items-center text-2xl w-full h-full text-black ">
        {isplaying ? <IoIosPause /> : <BsPlayFill />}
      </i>
    </button>
  );
};
