import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CardRequestType } from '../../types/types'

export interface CardsState {
    cards: CardRequestType[]
}

const initialState: CardsState = {
    cards: [],
}

export const cardsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCards: (state, action: PayloadAction<CardRequestType[]>) => {
            state.cards = action.payload
        }
    },
})

export const { setCards } = cardsSlice.actions

export default cardsSlice.reducer