import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CardType } from '../types/cardsType'

export interface CardsState {
    cards: CardType[]
}

const initialState: CardsState = {
    cards: [],
}

export const cardsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCards: (state, action: PayloadAction<CardType[]>) => {
            state.cards = action.payload
        }
    },
})

export const { setCards } = cardsSlice.actions

export default cardsSlice.reducer