import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from '../pages/Home/model/slice/cardsSlice'
import { cardsApi } from '../pages/Home/model/services/cardsApi'
// import cardSlice from '../pages/Edit/model/slice/cardSlice'
import { createCardApi } from '../pages/Create'
// import { cardsIdApi } from '../pages/Edit'

export const store = configureStore({
    reducer: {
        cards: cardsSlice,
        // cardId: cardSlice,
        [cardsApi.reducerPath]: cardsApi.reducer,
        // [cardsIdApi.reducerPath]: cardsIdApi.reducer,
        [createCardApi.reducerPath]: createCardApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(
            cardsApi.middleware,
            // cardsIdApi.middleware,
            createCardApi.middleware
        ),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch