import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const albums = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1/",
  }),
  endpoints: (builder) => ({
    getAlbums: builder.query({
      query: (token) => ({
        url: "/browse/new-releases",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});
export const { useGetAlbumsQuery } = albums;