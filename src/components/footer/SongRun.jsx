import {CiHeart} from "react-icons/ci"
import {CgInpicture} from 'react-icons/cg'
export const SongRun = () => {
  return (
    <div className="flex flex-grow">
      <div className="flex px-2 py-1 gap-x-5 justify-center items-center">
        <div className="h-[55px] w-[55px] bg-blue-500 rounded-lg overflow-hidden"></div>
        <div>
          <p>cancion</p>
          <span className="text-[12px]">generos , generos</span>
        </div>
        <div className="flex gap-x-2 py-1 ml-2">
          <i className="text-2xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white"><CiHeart/></i>
          <i className="text-2xl text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white"><CgInpicture/></i>
        </div>
      </div>
    </div>
  );
};
