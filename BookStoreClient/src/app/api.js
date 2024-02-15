import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const bookStoreApi = createApi({
    reducerPath:'bookStoreApi',

      baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_URL || "https://localhost:3000/api",
      }),

      // add endpoints for user, books,cart, order
      endpoints: (builder) => ({
        getUser: builder.query({ query: (id) => `auth/users/${id}` }),
              addUser: builder.mutation({
                    query: (userData) => ({
                      url: "/auth/users/register",
                      method: "POST",
                      body: userData,
                    }),
                }),
                loginUser: builder.mutation({
                  query: (userData) => ({
                    url: "/auth/users/login",
                    method: "POST",
                    body: userData,
                  }),
      }),
  }),
})
    
   export const {
    useGetUserQuery,
    useAddUserMutation,
    useLoginUserMutation,
   } = bookStoreApi;