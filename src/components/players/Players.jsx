import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../card/Card";

export const Players = () => {
  const { responseToken } = useSelector((state) => state.authUser);
  const [data, setData] = useState(null);
  const getTracks = async () => {
    const tracks = await fetch(
      "https://api.spotify.com/v1/me/following?type=artist",
      {
        method: "GET",
        headers: {  
          Authorization: `Bearer ${responseToken?.access_token}`,
        },
      }
    );
    if (!tracks.ok) {
        throw new Error("La solicitud a la API de Spotify no fue exitosa. error " + tracks.status , tracks.statusText );
    }
    const data = await tracks.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-start gap-4">
        {data?.albums?.items?.map((items) => (
          <div key={items.id} className="max-w-[180px]">
            <Card
              image={items?.images[0]?.url}
              description={items?.type}
              title={items.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
