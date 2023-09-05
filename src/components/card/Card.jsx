
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import './card.css'
export const Card = () => {
  return (
    <>
      <Link to="/" className="w-[180px]">
        <div className="w-full bg-[rgba(255,255,255,0.3)] rounded-md overflow-hidden p-4 content-card">
          <div className="relative w-[150px] h-[150px] bg-red-500 rounded-md overflow-hidden">
            <button className="absolute right-3 opacity-0 w-[45px] h-[45px] bg-green-500 rounded-full -bottom-16 z-10 transition-all duration-200">
              <i className="w-full h-full flex justify-center items-center text-black">
                <FaPlay />
              </i>
            </button>
          </div>
          <strong className="text-sm">Release Radar</strong>
          <p className="uppercase text-xs line-clamp-2">
            grupo niche , Gilberto santa rosa , dimension
          </p>
        </div>
      </Link>
    </>
  );
};
