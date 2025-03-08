import { createSlice } from "@reduxjs/toolkit";

// const initialState = JSON.parse(localStorage.getItem('cart')) || {
//     items : [], // final cart
//     tempItems : [] , // temporary items for update
//     total : 0
// }

const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

const initialState =  {
    items : savedCart.item || [], // final cart
    tempItems : savedCart.tempItems || [] , // temporary items for update
    total : savedCart.total || 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addtoCart(state , action){
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            
            if(existingItem){
                existingItem.quantity +=1 ;
            } else{
                state.items.push({...action.payload, quantity : 1})
            }

            state.tempItems = [...state.items];
            state.total = state.items.reduce((sum , item) => sum + item.price * item.quantity,0)
        },
        removeFromCart(state, action ) {
            state.items = state.items.filter((item) => item.id !== action.payload);
            state.tempItems = [...state.items];
        }


    }

})

export const {addtoCart,removeFromCart} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;