import React, { useState } from "react";
import { BiVolumeMute } from "react-icons/bi";
import { IoMdVolumeHigh } from "react-icons/io";

export const ButtonMuted = ({ audioRef }) => {
  const [audioMuted, setAudioMuted] = useState(false);
  const handelMute = () => {
    const audio = audioRef.current;
    audio.muted = !audio.muted;
    setAudioMuted(!audioMuted);
  };
  return (
    <button onClick={handelMute}>
      <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
        {audioMuted ? <BiVolumeMute /> : <IoMdVolumeHigh />}
      </i>
    </button>
  );
};
