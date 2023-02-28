import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basketItems: [],
    basketTotalQuantity: 0,
    basketTotalAmount: 0,
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket(state, action){
            const itemIndex = state.basketItems.findIndex(
                (item) => item.id === action.payload.id);
            if(itemIndex >= 0){
                state.basketItems[itemIndex].basketQuantity += 1
            } else {
                const tempProduct = {...action.payload, basketQuantity: 1 };
                state.basketItems.push(tempProduct);
            }
        },
    },
});

export const { addToBasket } = basketSlice.actions;

export default basketSlice.reducer;

