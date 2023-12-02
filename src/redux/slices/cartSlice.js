import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //action
        //fn to add items to cart
        addToCart:(state,action)=>{
           state.push(action.payload) 
        },
        //fn to remove items from cart
        removeFromCart:(state,action)=>{
           return state.filter(item=>item.id!=action.payload)
        },
        //fn to empty the cart
        emptyCart:(state)=>{
            return state=[]
        }

    }
})
export const {addToCart,removeFromCart,emptyCart}=cartSlice.actions
export default cartSlice.reducer