import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './card/cartSlice'; 
import modalSlice from './modal/modalSlice';

export const store = configureStore({
     reducer: {
        cart: cartSlice,
        modal: modalSlice
     }
})