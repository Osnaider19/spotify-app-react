import { FiMusic } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useGetPlayListsUserQuery } from "../../redux/facture/stateHome/playLists";

export const ItemPlayList = () => {

  const { responseToken } = useSelector((state) => state.authUser);
  const { data } = useGetPlayListsUserQuery(responseToken.access_token);
  
  return (
    <div className="px-4 mt-3">
      {data?.items?.map((lists) => (
        <div
          className="flex gap-x-3 px-2 py-2 hover:bg-[#1A1A1A] rounded-lg cursor-pointer transition-colors duration-150"
          key={lists.id}
        >
          <div className="h-[50px]  w-[50px] bg-[#282828] rounded-lg text-[#B3B3B3]">
            <i className="flex justify-center items-center w-full h-full text-3xl">
              <FiMusic />
            </i>
          </div>
          <div className="flex flex-col gap-x-3">
            <span className="block ">{lists?.name}</span>
            <strong className="text-sm">
              {lists.type} {lists?.display_name}
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
};
