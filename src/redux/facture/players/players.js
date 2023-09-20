import { createSlice } from "@reduxjs/toolkit";

const default_initialState = {
  track: null,
  playlists: null,
};

const initialState = (() => {
  const persistanceState = localStorage.getItem("redux__state");
  if (persistanceState) {
    return JSON.parse(persistanceState).players;
  } else {
    return default_initialState;
  }
})();

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
