import { createSlice } from "@reduxjs/toolkit";

const default_initialState = {
  track: null,
  isplaying: false,
  refAudio: null, //referencia a la etiqueta audio para poder haceder desde cualquier..
  currentMusic: {
    playlists: null,
    song: null,
    songs: [],
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
      state.currentMusic.playlists = action.payload;
    },
    setRefAudio: (state, action) => {
      state.refAudio = action.payload;
    },
  },
});

export default players.reducer;

export const { setTrackPlayer, setIsPlaying, setPlayList, setRefAudio } =
  players.actions;
