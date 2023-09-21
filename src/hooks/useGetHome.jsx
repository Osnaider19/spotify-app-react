import { useState, useEffect } from "react";

export const useGetHome = (token) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);

      try {
        const [PlayListsResponse, AlbumsResponse , PlayListUserResponse] = await Promise.all([
          fetch(`https://api.spotify.com/v1/browse/featured-playlists?country=CO&limit=10`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch(`https://api.spotify.com/v1/browse/new-releases?limit=10`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch(`https://api.spotify.com/v1/me/playlists`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        if (!PlayListsResponse.ok || !AlbumsResponse.ok || !PlayListUserResponse.ok) {
          throw {
            err: true,
            status: PlayListsResponse.status,
            statusText: !PlayListsResponse.statusText ? "Ocurrió un error" : PlayListsResponse.statusText,
          };
        }

        const playList = await PlayListsResponse.json();
        const albums = await AlbumsResponse.json();
        const playListUser = await PlayListUserResponse.json();

        setData({ playList: playList, albums : albums , playListUser : playListUser});
        setError({ err: false });
      } catch (err) {
        setError(err);
      } finally {
        setIsPending(false);
      }
    };

    getData();
  }, []);

  return { data, isPending, error };
};
