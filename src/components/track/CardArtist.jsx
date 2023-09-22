import React from "react";
import { Link } from "react-router-dom";

export const CardArtist = ({ imagen, artist, id }) => {
  return (
    <Link to={`/artist/${id}`}>
      <div className="p-2 w-full rounded-md flex items-center gap-x-3 hover:bg-[#ffffff20]">
        <div className="h-[70px] w-[70px] rounded-full overflow-hidden">
          <img
            src={imagen}
            alt={artist}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="capitalize">artist</p>
          <Link
            to={`/artist/${id}`}
            className="font-bold text-xl hover:underline"
          >
            {artist}
          </Link>
        </div>
      </div>
    </Link>
  );
};
