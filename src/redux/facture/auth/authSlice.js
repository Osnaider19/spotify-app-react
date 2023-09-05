import { createSlice } from "@reduxjs/toolkit";

const default_initialState = {
  isAuthenticated: false,
  refresh_token: null,
  responseToken: null,
};

const initialState = (() => {
  const persistanceState = localStorage.getItem("redux__state");
  if (persistanceState) {
    console.log(JSON.parse(persistanceState).authUser);
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
  },
});

export default authUser.reducer;
export const { setIsAuthenticated, setRefreshToken, setResponseToken } =
  authUser.actions;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const CLIENTID = process.env.CLIENTID;
// const CLIENTSECRET = process.env.CLIENTSECRET;
// const REDIRECT_URI = "http://localhost:3000/";
// const scope = "user-read-private user-read-email";
// const commonParams = {
//   redirect_uri: REDIRECT_URI,
//   client_id: CLIENTID,
//   client_secret: CLIENTSECRET,
// };
// const searchParams = Object.keys(params).map((key)=>encodeURIComponent(key) + "=" + encodeURIComponent(params[key])).join("&");

// export const authUser = createApi({
//   reducerPath: "authUser",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://accounts.spotify.com/api",
//   }),
//   endpoints: (builder) => ({
//     getToken: builder.mutation({
//       query: (code) => ({
//         url: "/token",
//         method: "POST",
//         body : searchParams,
//         headers: {"Content-Type": "application/x-www-form-urlencoded",},
//         params: {
//           code : code,
//           grant_type: "authorization_code",
//           ...commonParams,
//         },
//       }),
//     }),
//   }),
// });

// export const { useGetTokenMutation } = authUser;
