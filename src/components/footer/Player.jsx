import { BsShuffle , BsRepeat} from "react-icons/bs";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { ButtonRunSong } from "./ButtonRunSong";
import { ButtonPlay } from "./ButtonPlay";
export const Player = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center gap-x-3 py-1">
          <ButtonRunSong icon={<BsShuffle className="text-xl"/>}/>
          <ButtonRunSong icon={<BiSkipPrevious className="text-4xl" />} />
          <ButtonPlay/>
          <ButtonRunSong icon={<BiSkipNext className="text-4xl"/>} />
          <ButtonRunSong icon={<BsRepeat className="text-xl"/>} />
        </div>
        <div>
          <div className="flex justify-center items-center w-[500px] text-[11px]">
            <label htmlFor="" className="m-1">00</label>
            <input type="range" className="range-vol"/>
            <label htmlFor="" className="m-1">300</label>
          </div>
        </div>
      </div>
    </div>
  );
};
