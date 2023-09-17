import { BsShuffle, BsRepeat } from "react-icons/bs";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { ButtonRunSong } from "./ButtonRunSong";
import { useSelector } from "react-redux";
import { useState } from "react";
import { transformDuration } from "../../helpers/transform";
import { ButtonPlay } from "./ButtonPlay";

export const Player = ({audioRef}) => {
 
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { track } = useSelector((state) => state.players);
  const handleTimeUpdate = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration);
    }
  }
  const handleChangeCurretTime = (event) => {
    const newTime = parseFloat(event.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  
  return (
    <div>
      <div className="flex justify-center items-center gap-x-3 py-1">
        <ButtonRunSong icon={<BsShuffle className="text-xl" />} />
        <ButtonRunSong icon={<BiSkipPrevious className="text-4xl" />} />
        <div>
          <ButtonPlay audioRef={audioRef}/>
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
          <div className="m-1">{transformDuration(currentTime ? currentTime * 1000 : "")}</div>
          <input
            type="range"
            value={currentTime}
            max={duration}
            className="min-w-[300px] max-w-[300px] w-full"
            onChange={handleChangeCurretTime}
          ></input>
          <div className="m-1">{transformDuration(duration ? duration * 1000 : "")}</div>
        </div>
      </div>
    </div>
  );
};
