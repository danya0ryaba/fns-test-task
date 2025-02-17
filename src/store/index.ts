import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from '../pages/Home/model/slice/cardsSlice'
import { cardsApi } from '../pages/Home/model/services/cardsApi'
import { createCardApi } from '../pages/Create'
import { updateCardApi } from '../pages/Edit'

export const store = configureStore({
    reducer: {
        cards: cardsSlice,
        [cardsApi.reducerPath]: cardsApi.reducer,
        [createCardApi.reducerPath]: createCardApi.reducer,
        [updateCardApi.reducerPath]: updateCardApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            cardsApi.middleware,
            createCardApi.middleware,
            updateCardApi.middleware
        ),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch