import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => ({
        url: '/contacts',
        method: 'GET',
      }),
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'contacts', id })),
              { type: 'contacts', id: 'LIST' },
            ]
          : [{ type: 'contacts', id: 'LIST' }],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'contacts', id: 'LIST' }],
    }),
    createContact: builder.mutation({
      query: body => ({
        url: `/contacts`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'contacts', id: 'LIST' }],
    }),
    updateContacts: builder.mutation({
      query: fields => ({
        url: `/contacts/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: [{ type: 'contacts', id: 'LIST' }],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useCreateContactMutation,
  useUpdateContactsMutation,
} = contactsApi;
