
import { Link } from "react-router-dom";
export const ItemNav = ({icon , title , link }) => {
  return (
    <Link href={link} className="w-full text-[#ffffff80] hover:font-semibold hover:text-white transition-all duration-200">
      <div className="flex gap-4 justify-start items-center py-2">
        <i className="text-2xl">
          {icon}
        </i>
        <span className="text-lg block">{title}</span>
      </div>
    </Link>
  );
};
