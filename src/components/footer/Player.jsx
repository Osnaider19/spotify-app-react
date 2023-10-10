import { ButtonRunSong } from "./ButtonRunSong";
import { useSelector } from "react-redux";
import { ButtonPlay } from "./ButtonPlay";
import "./player.css";
import {
  IconNext,
  IconPreviuw,
  IconRepeat,
  IconShuffle,
} from "../../Icons/Icons";
import { SliderAudio } from "./SliderAudio";
export const Player = ({ refAudio }) => {
  const { track } = useSelector((state) => state.players);
  return (
    <div
      className={`flex flex-col  flex-grow justify-center ${
        track?.preview_url
          ? "opacity-100 pointer-events-auto"
          : "opacity-50 pointer-events-none"
      }`}
    >
      <div className="flex justify-center items-center gap-x-7 py-1 ">
        <ButtonRunSong icon={<IconShuffle />} />
        <ButtonRunSong icon={<IconPreviuw />} />
        <ButtonPlay refAudio={refAudio} />
        <ButtonRunSong icon={<IconNext />} />
        <ButtonRunSong icon={<IconRepeat />} />
      </div>
      <SliderAudio refAudio={refAudio} />
    </div>
  );
};
