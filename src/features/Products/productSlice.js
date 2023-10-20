import { createSlice } from '@reduxjs/toolkit';
import { productsBuilder } from './productstBuilder';

const initialState = {
    products: {
        isLoading: false,
        error: null,
        data: [],
        queryOptions: {
            page: 1,
            limit: 9,
            categories: [],
        },
    },
    product: {
        isLoading: false,
        error: null,
        data: [],
    },

    featuredProducts: {
        isLoading: false,
        error: null,
        data: [],
    },
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.products.queryOptions.page = action.payload;
        },
        changePageLimit: (state, action) => {
            state.products.queryOptions.limit = action.payload;
        },
        updateQueryCategories: (state, action) => {
            state.products.queryOptions.categories = action.payload;
        },
    },
    extraReducers: productsBuilder,
});

export const featuredProductsSelector = (state) =>
    state.products.featuredProducts;

export const { changePage, changePageLimit, updateQueryCategories } =
    productsSlice.actions;
export default productsSlice;
