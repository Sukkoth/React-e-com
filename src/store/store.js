import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/Products/productSlice';
import cartSlice from '../features/Cart/cartSlice';
import categoriesSlice from '../features/Categories/categoriesSlice';

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
        categories: categoriesSlice.reducer,
    },
});

export default store;
