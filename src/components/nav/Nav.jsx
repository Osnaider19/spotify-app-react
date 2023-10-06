import { ItemNav } from "./ItemNav";
import { YourLibrary } from "./YourLibrary";
import { PlayLists } from "./PlayLists";
import { PlayListsUser } from "../playlist/PlayListsUser";
import { IconHome, IconSearch } from "../../Icons/Icons";

export const Nav = () => {
  return (
    <nav className="sticky top-0 left-0   h-[86vh] min-w-[300px]  rounded-xl overflow-hidden">
      <div className="flex flex-col gap-y-3">
        <div className="relative h-32 w-full bg-[#121212] rounded-xl">
          <div className="flex flex-col px-5 items-center justify-center py-2  h-full">
            <ItemNav icon={<IconHome />} link={"/"} title="Home" />
            <ItemNav icon={<IconSearch />} link={"/search"} title="Search" />
          </div>
        </div>
        <div className="w-full rounded-xl h-screen bg-[#121212]">
          <YourLibrary />
          <PlayLists />
          <PlayListsUser /> 
        </div>
      </div>
    </nav>
  );
};
