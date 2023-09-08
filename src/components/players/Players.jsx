import { useSelector } from "react-redux";
import { Card } from "../card/Card";
import { useGetPlayListsQuery } from "../../redux/facture/stateHome/playLists";
import { LoaderCard } from "../loader/LoaderCard";
export const Players = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const { data, isLoading , error } = useGetPlayListsQuery(responseToken.access_token);
  //console.log(error)
  return (
    <div>
      <div className="flex flex-wrap justify-start gap-4">
        {isLoading && <LoaderCard />}
        {data?.playlists?.items?.map((items) => (
          <div key={items.id} className="max-w-[180px]">
            <Card
              image={items?.images[0]?.url}
              description={items?.type}
              title={items.name}
              id={items.id}
              mediaType={items.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
