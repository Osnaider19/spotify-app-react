import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playListsUser: null,
};
const playLists = createSlice({
  name: "playLists",
  initialState,
  reducers: {
    setPlayListUser: (state, action) => {
      state.playListsUser = action.payload;
    },
  },
});

export default playLists.reducer;

export const { setPlayListUser } = playLists.actions;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const playList = createApi({
//   reducerPath: "playList",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://api.spotify.com/v1/",
//   }),
//   endpoints: (builder) => ({
//     getPlayList: builder.query({
//       query: ({ token, id }) => ({
//         url: `playlists/${id}`,
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }),
//     }),
//   }),
// });

// export const { useGetPlayListQuery } = playList;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   playListsUser: null,
//   playListsDetails: null,
// };
// const playLists = createSlice({
//   name: "playLists",
//   initialState: initialState,
//   reducers: {
//     setPlayListUser: (state, action) => {
//       state.playListsUser = action.payload;
//     },
//     setPlayListsDetails: (state, action) => {
//       state.playListsDetails = action.payload;
//     },
//   },
// });

// export default playLists.reducer;
// export const { setPlayListUser, setPlayListsDetails } = playLists.actions;
