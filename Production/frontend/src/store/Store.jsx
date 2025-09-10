import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/CartSlice';
import userSlice from './reducers/UserSlice';
import productSlice from './reducers/ProductSlice';
export const store = configureStore({
    reducer: {
        useReducer: userSlice,
        productsReducer: productSlice,
        cartReducer: cartSlice
    },
})