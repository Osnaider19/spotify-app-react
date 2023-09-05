import { Player } from "./Player";
import { SongRun } from "./SongRun";
import { Vol } from "./Vol";

export const Footer = () => {
  return (
    <div className="absolute left-0 bottom-0 mt-1 py-1 px-2 h-[80px] w-full bg-black">
      <div className="w-full h-full  rounded-lg overflow-hidden">
        <div className="h-full w-full flex ">
          <SongRun />
          <Player/>
          <Vol/>
        </div>
      </div>
    </div>
  );
};
