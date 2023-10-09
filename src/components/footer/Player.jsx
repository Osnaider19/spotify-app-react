import { ButtonRunSong } from "./ButtonRunSong";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { transformDuration } from "../../helpers/transform";
import { ButtonPlay } from "./ButtonPlay";
import * as Slider from "@radix-ui/react-slider";
import "./player.css";
import {
  IconNext,
  IconPreviuw,
  IconRepeat,
  IconShuffle,
} from "../../Icons/Icons";
import { setIsPlaying } from "../../redux/facture/players/players";
export const Player = ({ refAudio }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const dispatch = useDispatch();
  const { track , refAudio : audioStete } = useSelector((state) => state.players);
  const handleTimeUpdate = () => {
    const audioElement = refAudio.current;
    if (audioElement) {
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration);
    }
  };
  const handleChangeCurretTime = (event) => {
    if (refAudio.current.currentTime) {
      //validar si el audio no se vacio
      const newTime = event[0];
      refAudio.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  const handelEnded = () => {
    //cuando finaliza la cancion actualizar el estado para no seguir reproduciendo el <playing />
    dispatch(setIsPlaying(false));
    refAudio.autoplay = false;
  };

  console.log(refAudio);
  return (
    <div className={`flex flex-col  flex-grow justify-center ${track?.preview_url
      ? "opacity-100 pointer-events-auto"
      : "opacity-50 pointer-events-none"}`}>
      <div className="flex justify-center items-center gap-x-7 py-1 ">
        <ButtonRunSong icon={<IconShuffle />} />
        <ButtonRunSong icon={<IconPreviuw />} />
        <div>
          <ButtonPlay refAudio={refAudio} />
          <audio
            src={track?.preview_url ? track?.preview_url : ""}
            ref={refAudio}
            type="audio"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handelEnded}
            autoPlay={audioStete.autoplay}
          ></audio>
        </div>
        <ButtonRunSong icon={<IconNext />} />
        <ButtonRunSong icon={<IconRepeat />} />
      </div>
      <div>
        <div className="flex justify-center items-center  text-[11px] ">
          <div className="m-1">
            {transformDuration(currentTime ? currentTime * 1000 : "")}
           
          </div>
          <div
            className="w-[400px]"
          >
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
