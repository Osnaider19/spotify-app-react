import { IoMdVolumeHigh } from "react-icons/io";
import { BiVolumeMute } from "react-icons/bi";
import "./vol.css";
import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import {
  IconConnectDivice,
  IconLyrics,
  IconPicture,
  IconPlaying,
  IconQueue,
} from "../../Icons/Icons";

export const Vol = ({ audioRef }) => {
  const [volume, setVolume] = useState(1);
  const [audioMuted, setAudioMuted] = useState(false);
  const handleVolumeChange = (event) => {
    const newVolume = event[0];
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };
  const handelMute = () => {
    const audio = audioRef.current;
    audio.muted = !audio.muted;
    setAudioMuted(!audioMuted);
    setVolume(audioMuted ? 1 : 0);
  };
  return (
    <div className="flex  justify-end px-3 items-center max-w-[360px] w-full">
      <div className="flex gap-x-3">
        <button>
          <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
            <IconPlaying />
          </i>
        </button>
        <button>
          <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
            <IconLyrics />
          </i>
        </button>
        <button>
          <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
            <IconQueue />
          </i>
        </button>
        <button>
          <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
            <IconConnectDivice />
          </i>
        </button>
        <button onClick={handelMute}>
          <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
            {audioMuted ? <BiVolumeMute /> : <IoMdVolumeHigh />}
          </i>
        </button>
        <div className="flex justify-center items-center">
          <div className="w-[100px]">
            <Slider.Root
              className="SliderRoot"
              defaultValue={[volume]}
              value={[volume]}
              step={"0.1"}
              min="0"
              max="1"
              onValueChange={handleVolumeChange}
            >
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>
          </div>
        </div>
        <button>
          <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
            <IconPicture/>
          </i>
        </button>
      </div>
    </div>
  );
};
