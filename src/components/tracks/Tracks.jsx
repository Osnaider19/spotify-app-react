import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../card/Card";

export const Tracks = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const [data, setData] = useState(null);
  const getTracks = async () => {
    const tracks = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists?country=CO",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${responseToken.access_token}`,
        },
      }
    );
    const data = await tracks.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getTracks();
  }, [responseToken.access_token]);

  return (
    <div>
      <div className="flex flex-wrap justify-start gap-4">
        {data?.playlists?.items?.map((items) => (
          <div key={items.id} className="max-w-[180px]">
            <Card
              image={items?.images[0]?.url}
              description={items?.owner?.display_name}
              title={items.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
