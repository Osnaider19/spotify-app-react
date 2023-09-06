import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { BiUser } from "react-icons/bi";
import { setSession } from "../../redux/facture/auth/authSlice";
export const HeaderNav = () => {
  const dispatch = useDispatch();
  const navegation = useNavigate();
  const handelSesion = () => {
    dispatch(setSession());
    navegation("/login");
  }
  return (
    <div>
      <div className="flex justify-center items-center gap-x-3">
        <a href="">
          <span className="block py-1 px-3 bg-[#fff] text-black rounded-2xl">
            Explore Premium
          </span>
        </a>
        <Link to={"/dowlao"} className="px-2">
          <div className="flex justify-center py-1 px-4 rounded-2xl gap-x-1 items-center bg-[rgba(0,0,0,0.4)]">
            <i className="text-xl">
              <MdOutlineDownloadForOffline />
            </i>
            <span>Install App</span>
          </div>
        </Link>
        <div className="h-[35px] w-[35px] bg-[rgba(0,0,0,0.4)] rounded-full mr-2">
          <button
            className="flex justify-center items-center w-full h-full"
            onClick={handelSesion}
          >
            <i className="text-2xl">
              <BiUser />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};
