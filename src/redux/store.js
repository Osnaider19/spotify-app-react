import { configureStore } from "@reduxjs/toolkit";
import authUser from "./facture/auth/authSlice";
import players from "./facture/players/players";
import playLists from "./facture/playlists/playLists";
const persistanceLocalStoreMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("redux__state", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    authUser: authUser,
    players: players,
    playLists: playLists,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistanceLocalStoreMiddleware),
});
