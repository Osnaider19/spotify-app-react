import { useSelector } from "react-redux";
import { Card } from "../card/Card";
import { useGetAlbumsQuery } from "../../redux/facture/stateHome/albums";

export const AlbumsPrincipal = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const {data}  = useGetAlbumsQuery(responseToken?.access_token);
  return (
    <div>
      <div className="flex flex-wrap justify-start gap-4">
        
        {data?.albums?.items?.map((items) => (
          <div key={items.id} className="max-w-[180px]">
            <Card
              image={items?.images[0]?.url}
              description={items?.type}
              title={items?.name}
              id={items?.id}
              mediaType={items?.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
