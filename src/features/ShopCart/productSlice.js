import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () =>{
    const response = await fetch('https://fakestoreapi.com/products')
    return await response.json()
})
const productSlice = createSlice({
    name :'products',
    initialState : {
        items : [],
        status : 'idle'
    },
    extraReducers : (builder)=>{
        builder 
            .addCase(fetchProducts.pending , (state)=>{
            state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled , (state , action ) =>{
                state.status = 'success',
                state.items = action.payload //response.json()
            })
            .addCase(fetchProducts.rejected , (state)=>{
                state.status = 'error'
            })
    }
})

export const productsReducer = productSlice.reducer;