import { configureStore } from '@reduxjs/toolkit'
import { cardsApi } from './api/cardsApi'
import cardsSlice from './slice/cardsSlice'

export const store = configureStore({
    reducer: {
        cards: cardsSlice,
        [cardsApi.reducerPath]: cardsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(cardsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch