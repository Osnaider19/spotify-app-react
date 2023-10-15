import { useSelector } from "react-redux";
import { ButtonPlay } from "./ButtonPlay";
import "./player.css";
import { IconRepeat, IconShuffle } from "../../Icons/Icons";
import { SliderAudio } from "./SliderAudio";
import { ButtonNext } from "./ButtonNext";
import { ButtonPreviuw } from "./ButtonPreviuw";
export const Player = ({ refAudio }) => {
  return (
    <div
      className={`flex flex-col  flex-grow justify-center`}
    >
      <div className="flex justify-center items-center gap-x-7 py-1 ">
        <button className="text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
          <IconShuffle />
        </button>
        <ButtonPreviuw/>
        <ButtonPlay refAudio={refAudio} />
        <ButtonNext />
        <button className="text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white">
          <IconRepeat />
        </button>
      </div>
      <SliderAudio refAudio={refAudio} />
    </div>
  );
};
