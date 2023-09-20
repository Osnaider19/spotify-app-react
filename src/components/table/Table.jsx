import React from "react";
import './table.css'
export const Table = ({children}) => {
  return (
    <div className="w-full h-full py-6 block relative px-4 font-lato">
      <table className="w-full  relative ">
        {children}
      </table>
    </div>
  );
};
