import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'ui',
    initialState: { IsInvisible: false },
    reducers: {
        toggle(state) {
            state.IsInvisible = !state.IsInvisible;
        }
    }
});

export const Cartactions = CartSlice.actions; 
 
export default CartSlice.reducer; 
