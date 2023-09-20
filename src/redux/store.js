import { configureStore } from "@reduxjs/toolkit";
import authUser from "./facture/auth/authSlice";
import { albums } from "./facture/stateHome/albums";
import { playLists } from "./facture/stateHome/playLists";
import { playList } from "./facture/playlists/playList";
import players from "./facture/players/players";

const persistanceLocalStoreMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("redux__state", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    authUser: authUser,
    players: players,
    [playLists.reducerPath]: playLists.reducer,
    [albums.reducerPath]: albums.reducer,
    [playList.reducerPath]: playList.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      playLists.middleware,
      albums.middleware,
      playList.middleware,
      persistanceLocalStoreMiddleware, // Agrega tu middleware personalizado aquí
    ),
});
