import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardRequestType } from '../../../Create'

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    tagTypes: ['Card'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://67b31a62bc0165def8cfe8f0.mockapi.io/api/v1/' }),
    endpoints: (builder) => ({
        getCards: builder.query<CardRequestType[], void>({
            query: () => '/items',

            providesTags: (result) =>
                result ?
                    [
                        ...result.map(({ id }) => ({ type: 'Card', id } as const)), // Теги для каждого элемента
                        { type: 'Card', id: 'LIST' }, // Тег для списка
                    ]
                    : [{ type: 'Card', id: 'LIST' }],

        }),

        getCardId: builder.query<CardRequestType, string>({
            query: (id) => `/items/${id}`,
            providesTags: (result, error, id) => [{ type: 'Card', id }],
        }),

        createCard: builder.mutation<any, any>({
            query: body => ({
                url: '/items',
                method: 'POST',
                body: { ...body }
            }),
            invalidatesTags: [{ type: 'Card', id: 'LIST' }],
        }),

        updateCard: builder.mutation<any, { id: string; body: any }>({
            query: ({ id, body }) => ({
                url: `/items/${id}`,
                method: 'PUT',
                body: {
                    ...body
                }
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Card', id }],
        }),

    }),
})

export const { useGetCardsQuery, useGetCardIdQuery, useCreateCardMutation, useUpdateCardMutation } = cardsApi