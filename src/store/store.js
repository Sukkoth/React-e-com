import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/Products/productSlice';
import cartSlice from '../features/Cart/cartSlice';

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
    },
});

export default store;
