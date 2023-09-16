import { BiTime } from "react-icons/bi";
import "./table.css";
export const TableSongs = ({ children }) => {
  return (
    <div className="w-full h-full relative px-4 font-lato">
      <table className="w-full  relative ">
        <thead className="py-2 w-full border-b  border-[#AAA8A9] mb-4 sticky z-10 top-[65px]  bottom-5 ">
          <tr>
            <th className="text-start px-3 py-3 text-[#AAA8A9] ">#</th>
            <th className="text-start text-[#AAA8A9] ">Title</th>
            <th className="text-start text-[#AAA8A9]">Album</th>
            <th className="text-start text-[#AAA8A9]">Date added</th>
            <th className="text-start text-[#AAA8A9]">
              <i className="flex justify-center items-center text-xl">
                <BiTime />
              </i>
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
