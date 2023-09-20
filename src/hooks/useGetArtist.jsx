import { useState, useEffect } from "react";

export const useGetArtist = (id, token) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);

      try {
        const [infoResponse, topResponse , albumResponse] = await Promise.all([
          fetch(`https://api.spotify.com/v1/artists/${id}`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=CO`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch(`https://api.spotify.com/v1/artists/${id}/albums?market=CO&include_groups=album&limit=10`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        if (!infoResponse.ok || !topResponse.ok || !albumResponse.ok) {
          throw {
            err: true,
            status: infoResponse.status,
            statusText: !infoResponse.statusText ? "Ocurrió un error" : infoResponse.statusText,
          };
        }

        const infoData = await infoResponse.json();
        const topData = await topResponse.json();
        const albums = await albumResponse.json();

        setData({ info: infoData, top: topData , albums : albums});
        setError({ err: false });
      } catch (err) {
        setError(err);
      } finally {
        setIsPending(false);
      }
    };

    getData();
  }, [id, token]);

  return { data, isPending, error };
};
