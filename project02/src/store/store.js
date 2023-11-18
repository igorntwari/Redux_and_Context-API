import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import carthandlerSlicer from "./AddToCart-slice";
const store = configureStore({
  reducer: { ui: cartSlice,cart:carthandlerSlicer.reducer },
});
export default store;
