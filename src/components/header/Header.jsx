import { ButtonNavegation } from "./ButtonNavegation";
import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <div className="absolute top-0  left-0  w-full h-[65px] bg-[rgba(255,255,255,0.1) z-30 ">
      <div className="flex justify-between px-4 items-center">
        <ButtonNavegation />
        <HeaderNav/>
      </div>
    </div>
  );
};
