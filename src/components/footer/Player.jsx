import { BsShuffle, BsRepeat } from "react-icons/bs";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { ButtonRunSong } from "./ButtonRunSong";
import { ButtonPlay } from "./ButtonPlay";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { transformDuration } from "../../helpers/transform";

export const Player = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { track } = useSelector((state) => state.players);
  const audioRef = useRef(null);
  const handleTimeUpdate = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration);
    }
  };
  return (
    <div>
      <div>
        <div className="flex justify-center items-center gap-x-3 py-1">
          <ButtonRunSong icon={<BsShuffle className="text-xl" />} />
          <ButtonRunSong icon={<BiSkipPrevious className="text-4xl" />} />
          <div>
            <ButtonPlay />
            <audio
              src={track?.preview_url}
              autoPlay
              ref={audioRef}
              type="audio"
              onTimeUpdate={handleTimeUpdate}
            ></audio>
             
          </div>
          <ButtonRunSong icon={<BiSkipNext className="text-4xl" />} />
          <ButtonRunSong icon={<BsRepeat className="text-xl" />} />
        </div>
        <div>
          <div className="flex justify-center items-center w-[500px] text-[11px]">
            <label htmlFor="" className="m-1">
              {transformDuration(currentTime * 1000)}
            </label>
            <input type="range" value={currentTime} max={duration} className="min-w-[300px] max-w-[300px] w-full"></input>
            <label htmlFor="" className="m-1">
              {transformDuration(duration * 1000)}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
