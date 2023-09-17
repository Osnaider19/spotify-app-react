import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  track: null,
  playlists: null,
};
const players = createSlice({
  name: "players",
  initialState,
  reducers: {
    setTrackPlayer: (state, action) => {
      state.track = action.payload;
    },
  },
});

export default players.reducer;

export const { setTrackPlayer } = players.actions;
