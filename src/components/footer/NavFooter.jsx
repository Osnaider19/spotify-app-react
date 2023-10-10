import {
  IconConnectDivice,
  IconLyrics,
  IconPicture,
  IconPlaying,
  IconQueue,
} from "../../Icons/Icons";
import { Vol } from "./Vol";
import { ButtonMuted } from "./ButtonMuted";
export const NavFooter = ({ audioRef }) => {
 
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
        <ButtonMuted  audioRef={audioRef}/>
        <Vol audioRef={audioRef} />
        <button>
          <i className="text-xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
            <IconPicture />
          </i>
        </button>
      </div>
    </div>
  );
};
