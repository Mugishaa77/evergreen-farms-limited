import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './basketSlice.css';

const initialState = {
    basketItems: localStorage.getItem("basketItems") ?
     JSON.parse(localStorage.getItem("basketItems")) : [],
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
                toast.success("increased product quantity", {
                    position: "bottom-left",
                    theme: "dark",
                });
            } else {
                const tempProduct = {...action.payload, basketQuantity: 1 };
                state.basketItems.push(tempProduct);
                 toast.info("added to basket", {
                    position: "bottom-left",
                    theme: "dark",
                    
                });
            }

            localStorage.setItem("basketItems", JSON.stringify(state.basketItems));


        },

        removeFromBasket(state, action){
            const nextBasketItems =state.basketItems.filter(
                basketItem => basketItem.id !== action.payload.id
            )

            state.basketItems = nextBasketItems;
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;

