// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// export const authApi = createApi({
//   reducerPath: "authApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://accounts.spotify.com/api/",
//   }),
//   endpoints: (builder) => ({
//     getToken: builder.mutation({
//       query: (searchParams) => ({
//         url: "/token",
//         method: "POST",
//         body: searchParams,
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       }),
//     }),
//   }),
// });

// export const { useGetTokenMutation } = authApi;