import { FiMusic } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useGetPlayListsUserQuery } from "../../redux/facture/stateHome/playLists";
import { Link } from "react-router-dom";
import { TbPointFilled } from "react-icons/tb";
export const ItemPlayList = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const { data } = useGetPlayListsUserQuery(responseToken?.access_token);
  return (
    <div className="px-4 mt-3 ">
      {data?.items?.map((lists) => (
        <Link key={lists.id} to={`/playlist/${lists?.id}`}>
          <div className="flex gap-x-3  px-2 py-2 hover:bg-[rgba(255,255,255,0.1)] rounded-lg cursor-pointer transition-colors duration-150">
            <div className="h-[50px]  w-[50px] bg-[#282828] rounded-lg text-[#B3B3B3] overflow-hidden">
              {lists?.images[2]?.url ? (
                <img
                  src={lists?.images[2]?.url}
                  alt=""
                  className="w-full h-full"
                />
              ) : (
                <i
                  className="flex justify-center items-center w-full 
                h-full  text-3xl"
                >
                  <FiMusic />
                </i>
              )}
            </div>
            <div className="flex flex-col justify-between gap-x-3">
              <span className="block ">{lists?.name}</span>
              <div className="text-[15px] capitalize flex justify-center gap-x-1 items-center">
                <span>{lists.type} </span>
                <TbPointFilled className="flex text-[10px]"/> 
                <span>{lists?.owner?.display_name}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
