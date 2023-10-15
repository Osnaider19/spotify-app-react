export const getHome = async (token) => {
  const [PlayListsResponse, AlbumsResponse] = await Promise.all([
    fetch(
      `https://api.spotify.com/v1/browse/featured-playlists?limit=10`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),
    fetch(`https://api.spotify.com/v1/browse/new-releases?limit=10`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  ]);
  if (!PlayListsResponse.ok || !AlbumsResponse.ok) {
    throw {
      err: true,
      status: PlayListsResponse.status,
      statusText: !PlayListsResponse.statusText
        ? "Ocurrió un error"
        : PlayListsResponse.statusText,
    };
  }

  const playList = await PlayListsResponse.json();
  const albums = await AlbumsResponse.json();
  return {
    playList,
    albums,
  };
};
