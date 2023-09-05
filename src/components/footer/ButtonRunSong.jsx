import React from "react";

export const ButtonRunSong = ({ icon , size }) => {
  return (
    <button>
      <i className={`text-${size ? size : `4xl`} text-[#ffffff80] cursor-pointer hover:scale-105 transition-all duration-200 hover:text-white`}>{icon}</i>
    </button>
  );
};
