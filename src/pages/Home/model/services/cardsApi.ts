import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardRequestType } from '../../../Create'

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://67b31a62bc0165def8cfe8f0.mockapi.io/api/v1/' }),
    endpoints: (builder) => ({
        getCards: builder.query<CardRequestType[], void>({
            query: () => {
                return '/items'
            }
        }),
        getCardId: builder.query<CardRequestType, string>({
            query: (id) => {
                return `/items/${id}`
            }
        })
    }),
})

export const { useGetCardsQuery, useGetCardIdQuery } = cardsApi