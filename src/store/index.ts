import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from '../pages/Home/model/slice/cardsSlice'
import { cardsApi } from '../pages/Home/model/services/cardsApi'

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