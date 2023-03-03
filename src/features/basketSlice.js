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
                 toast.info(`${action.payload.name} added to basket`, {
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
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems))
            toast.error(`${action.payload.name} removed from basket`, {
                position: "top-center",
                    theme: "dark",
            })
        },

        decreaseBasket(state, action) {
            const itemIndex = state.basketItems.findIndex(
                basketItem => basketItem.id === action.payload.id
            )

            if(state.basketItems[itemIndex].basketQuantity > 1){
                state.basketItems[itemIndex].basketQuantity -= 1

                toast.info(`Decreased ${action.payload.name} basket quantity`, {
                position: "bottom-left",
                    theme: "dark",
            });
            } else if(state.basketItemsms[itemIndex].basketQuantity === 1){
                const nextBasketItems =state.basketItems.filter(
                basketItem => basketItem.id !== action.payload.id
            );

            state.basketItems = nextBasketItems;

            
            toast.error(`${action.payload.name} removed from basket`, {
                position: "top-center",
                    theme: "dark",
            });
            }
                 
            localStorage.setItem("basketItems", JSON.stringify(state.basketItems))           
            
            
        },
    },
});

export const { addToBasket, removeFromBasket, decreaseBasket } = basketSlice.actions;

export default basketSlice.reducer;

