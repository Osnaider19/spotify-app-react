import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const playLists = createApi({
  reducerPath: "playLists",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1/",
  }),
  endpoints: (builder) => ({
    getPlayLists: builder.query({
      query: (token) => ({
        url: "/browse/featured-playlists?country=CO",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getPlayListsUser: builder.query({
      query: (token) => ({
        url: "/me/playlists",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetPlayListsQuery  , useGetPlayListsUserQuery} = playLists;
