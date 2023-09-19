import React from "react";

export const Thead = ({children}) => {
  return (
    <thead className=" w-full border-b  border-[#262B2D] sticky z-10 top-[65px]">
      <tr>{children}</tr>
    </thead>
  );
};
