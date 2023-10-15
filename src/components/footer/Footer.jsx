import {  useRef } from "react";
import { Player } from "./Player";
import { SongRun } from "./SongRun";
import { NavFooter } from "./NavFooter";

export const Footer = () => {
  const refAudio = useRef(null);
  return (
    <div className="absolute left-0 bottom-0 mt-1 py-1 px-2 h-[80px] w-full bg-black">
      <div className="w-full h-full  rounded-lg overflow-hidden">
        <div className="h-full w-full flex  items-center">
          <SongRun />
          <Player refAudio={refAudio} />
          <NavFooter audioRef={refAudio} />
        </div>
      </div>
    </div>
  );
};
