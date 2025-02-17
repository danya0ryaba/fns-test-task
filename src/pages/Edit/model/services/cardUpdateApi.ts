import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const updateCardApi = createApi({
    reducerPath: 'updateCardApi',
    tagTypes: ['Card'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://67b31a62bc0165def8cfe8f0.mockapi.io/api/v1/' }),
    endpoints: (builder) => ({
        updateCard: builder.mutation<any, { id: string; body: any }>({
            query: ({ id, body }) => ({
                url: `/items/${id}`,
                method: 'PUT',
                body: {
                    ...body
                }
            }),
        }),
    }),
})

export const { useUpdateCardMutation } = updateCardApi;