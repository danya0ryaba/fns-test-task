import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_BASE_URL } from '../../constants/URL';
import { CardRequestType, CardRequestTypeWithoutId } from '../../types/types';

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    tagTypes: ['Card'],
    baseQuery: fetchBaseQuery(API_BASE_URL),
    endpoints: (builder) => ({
        getCards: builder.query<CardRequestType[], void>({
            query: () => '/items',
            providesTags: (result) =>
                result ?
                    [
                        ...result.map(({ id }) => ({ type: 'Card', id } as const)),
                        { type: 'Card', id: 'LIST' },
                    ]
                    : [{ type: 'Card', id: 'LIST' }],

        }),
        getCardId: builder.query<CardRequestType, string>({
            query: (id) => `/items/${id}`,
            providesTags: (_, __, id) => [{ type: 'Card', id }],
        }),
        createCard: builder.mutation<CardRequestType, CardRequestTypeWithoutId>({
            query: body => ({
                url: '/items',
                method: 'POST',
                body: { ...body }
            }),
            invalidatesTags: [{ type: 'Card', id: 'LIST' }],
        }),
        updateCard: builder.mutation<CardRequestType, { id: string; body: CardRequestTypeWithoutId }>({
            query: ({ id, body }) => ({
                url: `/items/${id}`,
                method: 'PUT',
                body: {
                    ...body
                }
            }),
            invalidatesTags: (_, __, { id }) => [{ type: 'Card', id }],
        })
    }),
})

export const { useGetCardsQuery, useGetCardIdQuery, useCreateCardMutation, useUpdateCardMutation } = cardsApi