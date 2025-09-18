import { createSlice, isAction } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id: id,
                front: front,
                back: back
            };
        }
    }
});

export const selectCards = (id) => (state) => state.cards.cards[id];

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;