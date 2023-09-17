import { IoIosPause, IoMdPlay } from "react-icons/io";
import { useState } from "react";
import { useSelector } from "react-redux";
export const ButtonPlay = ({ audioRef }) => {
  const { track } = useSelector((state) => state.players);
  const [audioPaused, setAudioPaused] = useState(true);
  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setAudioPaused(false);
    } else {
      audio.pause();
      setAudioPaused(true);
    }
  };
  return (
    <button
      className={`h-[35px] w-[35px] rounded-full bg-[#fff] overflow-hidden ${
        track?.preview_url
          ? "opacity-100 pointer-events-auto"
          : "opacity-50 pointer-events-none"
      }`}
      onClick={toggleAudio}
    >
      <i className="flex justify-center items-center text-xl w-full h-full text-black">
        {audioPaused ? <IoMdPlay /> : <IoIosPause />}
      </i>
    </button>
  );
};
