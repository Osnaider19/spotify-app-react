import { ItemNav } from "./ItemNav";
import { BsSearch } from "react-icons/bs";
import {AiFillHome} from 'react-icons/ai'
import { YourLibrary } from "./YourLibrary";
import { PlayLists } from "./PlayLists";
import { ItemPlayList } from "./ItemPlayList";

export  const Nav = () => {
  return (
    <nav className="sticky top-0 left-0   h-[86vh] min-w-[300px]  rounded-xl overflow-hidden">
      <div className="flex flex-col gap-y-3">
        <div className="relative h-32 w-full bg-[rgba(255,255,255,0.1)] rounded-xl">
          <div className="flex flex-col px-5 items-center justify-center py-2  h-full">
            <ItemNav icon={<AiFillHome/>} link={"/"} title="Home"/>
            <ItemNav icon={<BsSearch/>} link={"/search"} title="Search"/>
          </div>
        </div>
        <div className="w-full rounded-xl h-screen bg-[rgba(255,255,255,0.1)]">
            <YourLibrary/>
            <PlayLists/>
            <ItemPlayList/>
        </div>
      </div>
    </nav>
  );
};
