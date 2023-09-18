import { BsPlayBtn } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { TfiAlignJustify } from "react-icons/tfi";
import { BsDeviceHdd } from "react-icons/bs";
import { IoMdVolumeHigh } from "react-icons/io";
import { BiVolumeMute } from "react-icons/bi";
import "./vol.css";
import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

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
    <div className="flex flex-grow justify-end px-3 items-center ">
      <div className="flex gap-x-3">
        <button>
          <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
            <BsPlayBtn />
          </i>
        </button>
        <button>
          <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
            <TbMicrophone2 />
          </i>
        </button>
        <button>
          <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
            <TfiAlignJustify />
          </i>
        </button>
        <button>
          <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
            <BsDeviceHdd />
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
      </div>
    </div>
  );
};
