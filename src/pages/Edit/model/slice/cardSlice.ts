import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CardType } from '../../../Home/model/types/cardsType'

export interface CardState {
    card: CardType
}

const initialState: CardState = {
    card: {
        id: "",
        date: "",
        job: "",
        map: "",
        salary: "",
        experience: "",
        metro: ""
    }
}

export const cardsSlice = createSlice({
    name: 'cardId',
    initialState,
    reducers: {
        getCard: (state, action: PayloadAction<CardType>) => {
            state.card = action.payload
        }
    },
})

export const { getCard } = cardsSlice.actions

export default cardsSlice.reducer