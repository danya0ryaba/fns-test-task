import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardType } from '../types/cardsType'


export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://67b31a62bc0165def8cfe8f0.mockapi.io/api/v1/' }),
    endpoints: (builder) => ({
        getCards: builder.query<CardType[], void>({
            query: () => {
                return '/items'
            }
        }),
    }),
})

export const { useGetCardsQuery } = cardsApi