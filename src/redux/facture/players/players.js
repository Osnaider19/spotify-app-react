import { createSlice } from "@reduxjs/toolkit";

const default_initialState = {
  track: null,
  isplaying: false,
  currentMusic: {
    playlists: null,
    tracks : null,
  },
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
    setIsPlaying: (state, action) => {
      state.isplaying = action.payload;
    },
    setPlayList: (state, action) => {
      state.currentMusic = action.payload;
    },
    setTracks : (state , action) => {
    state.currentMusic.tracks = action.payload
    }
  },
});

export default players.reducer;

export const { setTrackPlayer, setIsPlaying, setPlayList, setTracks } =
  players.actions;
