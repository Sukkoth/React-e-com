import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/Products/productSlice';
import cartSlice from '../features/Cart/cartSlice';
import categoriesSlice from '../features/Categories/categoriesSlice';
import wishListSlice from '../features/WishList/wishListSlice';
import authSlice from '../features/Auth/authSlice';
import orderSlice from '../features/Order/orderSlice';

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
        categories: categoriesSlice.reducer,
        wishlist: wishListSlice.reducer,
        auth: authSlice.reducer,
        order: orderSlice.reducer,
    },
});

export default store;
