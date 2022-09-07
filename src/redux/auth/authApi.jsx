import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    createUser: builder.mutation({
      query: body => ({
        url: `/signup`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
    logInUser: builder.mutation({
      query: body => ({
        url: `/login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
    logOutUser: builder.mutation({
      query: body => ({
        url: `/logout`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
    getCurrentUser: builder.query({
      query: () => '/current',
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrentUserQuery,
} = authApi;
