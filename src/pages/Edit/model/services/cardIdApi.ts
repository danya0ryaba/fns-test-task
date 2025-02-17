import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardType } from '../../../Home/model/types/cardsType'

export const cardsIdApi = createApi({
    reducerPath: 'cardsIdApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://67b31a62bc0165def8cfe8f0.mockapi.io/api/v1/' }),
    endpoints: (builder) => ({
        getCardId: builder.query<CardType, string>({
            query: (name) => `items/${name}`,
        }),
    }),
})

export const { useGetCardIdQuery } = cardsIdApi