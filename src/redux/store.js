import { configureStore } from "@reduxjs/toolkit";
import authUser from "./facture/auth/authSlice";
import { albums } from "./facture/stateHome/albums";
import { playLists } from "./facture/stateHome/playLists";
const persistanceLocalStoreMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("redux__state", JSON.stringify(store.getState()));
};
export const store = configureStore({
  reducer: {
    authUser: authUser,
    [playLists.reducerPath]: playLists.reducer,
    [albums.reducerPath]: albums.reducer,
  },
  middleware: [persistanceLocalStoreMiddleware],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(playLists.middleware , albums.middleware),
});
