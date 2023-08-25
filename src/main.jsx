import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store.js';
import { Provider } from 'react-redux';
import { fetchCategories } from './features/Categories/categoriesSlice.js';
import { fetchCartData } from './features/Cart/cartSlice';
import { getWishList } from './features/WishList/wishListSlice.js';
import { fetchUserFromLocal } from './features/Auth/authSlice.js';

store.dispatch(fetchCategories());
store.dispatch(fetchCartData());
store.dispatch(getWishList());
store.dispatch(fetchUserFromLocal());
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
