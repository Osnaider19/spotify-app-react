import { configureStore } from "@reduxjs/toolkit";
import authUser from "./facture/auth/authSlice";

const persistanceLocalStoreMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("redux__state", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    authUser: authUser,
  },
  middleware: [persistanceLocalStoreMiddleware],
  //middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(authUser.middleware)
});
