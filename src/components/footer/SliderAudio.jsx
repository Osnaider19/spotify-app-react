import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying } from "../../redux/facture/players/players";
import { transformDuration } from "../../helpers/transform";
import * as Slider from "@radix-ui/react-slider";
import "./player.css";
export const SliderAudio = ({refAudio}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { track  } = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const handelEnded = () => {
    //cuando finaliza la cancion actualizar el estado para no seguir reproduciendo el <playing />
    dispatch(setIsPlaying(false));
    refAudio.autoplay = false;
  };

  const handleChangeCurretTime = (event) => {
    if (refAudio.current.currentTime) {
      //validar si el audio no se vacio
      const newTime = event[0];
      refAudio.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleTimeUpdate = () => {
    const audioElement = refAudio.current;
    if (audioElement) {
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration);
    }
  };
  return (
    <div>
      <audio
        src={track?.preview_url ? track?.preview_url : ""}
        ref={refAudio}
        type="audio"
        id="audio"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handelEnded}
      ></audio>
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
  );
};
