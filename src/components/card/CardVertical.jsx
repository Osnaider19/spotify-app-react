import React from "react";
import "./cardvertical.css";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
export const CardVertical = ({ imagen, name , link }) => {
  return (
    <Link to={link}>
      <div className="content__card__vertical">
        <div className="content__card__vertical__img">
          <img src={imagen} alt={name} />
        </div>
        <div className="content__card__vertical__name">
          <span className="line-clamp-1">{name}</span>
        </div>
        <button>
          <i className="w-full h-full flex justify-center items-center text-black">
            <FaPlay />
          </i>
        </button>
      </div>
    </Link>
  );
};
