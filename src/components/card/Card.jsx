import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import "./card.css";
export const Card = ({ image, title, description  , mediaType , id }) => {
  return (
    <>
      <Link to={`/${mediaType}/${id}`} className="max-w-[180px]">
        <div className="w-full bg-[#151515] hover:bg-[rgba(255,255,255,0.1)] rounded-md overflow-hidden p-4 transition-colors duration-200 content-card">
          <div className="relative w-[150px] h-[150px] bg-[rgba(255,255,255,0.1)] rounded-md overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <button className="absolute right-3 opacity-0 w-[45px] h-[45px] bg-green-500 rounded-full -bottom-16 z-10 transition-all duration-200">
              <i className="w-full h-full flex justify-center items-center text-black">
                <FaPlay />
              </i>
            </button>
          </div>
          <strong className="text-sm line-clamp-1 pt-2">{title}</strong>
          <p className="capitalize text-xs line-clamp-2">{description}</p>
        </div>
      </Link>
    </>
  );
};
