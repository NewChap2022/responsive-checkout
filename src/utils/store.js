import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers';

const preloadedState = {
    cart: [],
    cartOpen: false,
    currentCategory: '',
}

export const store = configureStore({
    reducer,
    preloadedState
})