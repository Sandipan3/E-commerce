import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "../features/ShopCart/productSlice";
import { cartReducer } from "../features/ShopCart/cartSlice";

export const store = configureStore({
    reducer:{
        products : productsReducer,
        cart : cartReducer
    }
})