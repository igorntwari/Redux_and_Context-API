import { createSlice } from '@reduxjs/toolkit';


const carthandlerSlicer = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        addToCartItems(state,action){
        const newItem = action.payload;
        const exstingItem = state.items.find(item => item.id === newItem.id);
        state.totalQuantity++
        if(!exstingItem) {
            state.items.push({id:newItem.id,
                price:newItem.price,
                 quantity:1,
                  totalPrice:newItem.price,
                  name:newItem.tittle
                })

        } else {
            exstingItem.quantity++;
            exstingItem.totalPrice = exstingItem.totalPrice + newItem.price
        }

        },
        removeItemsToCart(state,action) {
            const id = action.payload
            const exstingItem = state.items.find(item => item.id === id)
            state.totalQuantity--
            if(exstingItem.quantity === 1) {
                state.items.filter(item => item.id !==id)
            } else{
                exstingItem.quantity--
                exstingItem.totalPrice = exstingItem.totalPrice - exstingItem.price
            }
        }

    }
})
export const carthandlerSlicerActions = carthandlerSlicer.actions
export default carthandlerSlicer