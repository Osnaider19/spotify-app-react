import { configureStore } from "@reduxjs/toolkit";
import authUser from "./facture/auth/authSlice";
import players from "./facture/players/players";
const persistanceLocalStoreMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("redux__state", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    authUser: authUser,
    players: players,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistanceLocalStoreMiddleware),
});
