import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardRequestType } from '../..';

export const createCardApi = createApi({
    reducerPath: 'createCardApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://67b31a62bc0165def8cfe8f0.mockapi.io/api/v1/' }),
    endpoints: (builder) => ({
        createCard: builder.mutation<any, any>({
            query: body => ({
                url: '/items',
                method: 'POST',
                body: { ...body }
            })
        }),
    }),
})

export const { useCreateCardMutation } = createCardApi;