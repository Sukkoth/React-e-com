import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/Products/productSlice';

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
    },
});

export default store;
