import { createSlice } from "@reduxjs/toolkit";

const default_initialState = {
  isAuthenticated: false,
  refresh_token: null,
  responseToken: null,
  infoUser : null,
};

const initialState = (() => {
  const persistanceState = localStorage.getItem("redux__state");
  if (persistanceState) {
    return JSON.parse(persistanceState).authUser;
  } else {
    return default_initialState;
  }
})();

export const authUser = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setResponseToken: (state, action) => {
      state.responseToken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refresh_token = action.payload;
    },
    setSession: (state) => {
      localStorage.removeItem("redux__state");
      Object.assign(state, default_initialState);
    },
    setInfoUser : (state , action) => {
     state.infoUser = action.payload
    }
  },
});

export default authUser.reducer;
export const {
  setIsAuthenticated,
  setRefreshToken,
  setResponseToken,
  setSession,
  setInfoUser
} = authUser.actions;
