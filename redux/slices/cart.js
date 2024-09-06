import { createSlice } from "@reduxjs/toolkit"




const initialState = {
    cartItems:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        updateCart: (state,action) => {
            state.cartItems = action.payload
        }
    }
})

export const {updateCart} = cartSlice.actions
export default cartSlice.reducer