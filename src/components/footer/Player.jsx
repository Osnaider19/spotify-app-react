import { BsShuffle, BsRepeat } from "react-icons/bs";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { ButtonRunSong } from "./ButtonRunSong";
import { useSelector } from "react-redux";
import { useState } from "react";
import { transformDuration } from "../../helpers/transform";
import { ButtonPlay } from "./ButtonPlay";
import * as Slider from "@radix-ui/react-slider";
import "./player.css";
import { IconNext, IconPreviuw, IconRepeat, IconShuffle } from "../../Icons/Icons";
export const Player = ({ audioRef }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { track } = useSelector((state) => state.players);
  const handleTimeUpdate = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration);
    }
  };
  const handleChangeCurretTime = (event) => {
    const newTime = event[0];
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="flex flex-col  flex-grow justify-center">
      <div className="flex justify-center items-center gap-x-7 py-1 ">
        <ButtonRunSong icon={<IconShuffle/>} />
        <ButtonRunSong icon={<IconPreviuw />} />
        <div>
          <ButtonPlay audioRef={audioRef} />
          <audio
            src={track?.preview_url}
            ref={audioRef}
            type="audio"
            onTimeUpdate={handleTimeUpdate}
          ></audio>
        </div>
        <ButtonRunSong icon={<IconNext/>} />
        <ButtonRunSong icon={<IconRepeat />} />
      </div>
      <div>
        <div className="flex justify-center items-center  text-[11px] ">
          <div className="m-1">
            {transformDuration(currentTime ? currentTime * 1000 : "")}
          </div>
          <div className="w-[400px]">
            <Slider.Root
              className="SliderRoot"
              defaultValue={[currentTime]}
              value={[currentTime]}
              min={0}
              max={duration}
              onValueChange={handleChangeCurretTime}
            >
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>
          </div>

          <div className="m-1">
            {transformDuration(duration ? duration * 1000 : "")}
          </div>
        </div>
      </div>
    </div>
  );
};
