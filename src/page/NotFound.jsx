import React from "react";
import { Link } from "react-router-dom";
import { BsSpotify } from "react-icons/bs";
export const NotFound = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center font-lato">
      <div className="flex justify-center items-center text-green-500 text-5xl">
        <BsSpotify />
      </div>
      <h1 className="py-4 text-4xl font-extrabold">Página no disponible</h1>
      <p className="py-5">Algo salió mal. Inténtalo de nuevo más tarde.</p>
      <Link
        to="/"
        className="py-3 px-5 bg-white text-black rounded-full overflow-hidden "
      >
        <span>Inicio</span>
      </Link>
    </div>
  );
};
