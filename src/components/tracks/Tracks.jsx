import { useSelector } from "react-redux";
import { Card } from "../card/Card";
import { useGetAlbumsQuery } from "../../redux/facture/stateHome/albums";

export const Tracks = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const {data  , error }  = useGetAlbumsQuery(responseToken.access_token);
  console.log(data , error)
  // const [data, setData] = useState(null);
  // const getTracks = async () => {
  //   const tracks = await fetch(
  //     "https://api.spotify.com/v1/browse/new-releases",
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${responseToken?.access_token}`,
  //       },
  //     }
  //   );
  //   const data = await tracks.json();
  //   setData(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getTracks();
  // }, [responseToken?.access_token]);

  return (
    <div>
      <div className="flex flex-wrap justify-start gap-4">
        
        {data?.albums?.items?.map((items) => (
          <div key={items.id} className="max-w-[180px]">
            <Card
              image={items?.images[0]?.url}
              description={items?.owner?.display_name}
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
