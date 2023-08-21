import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    products: {
        isLoading: false,
        error: '',
        data: [],
        queryOptions: {
            page: 1,
            limit: 6,
        },
    },
    product: {
        isLoading: false,
        error: '',
        data: [],
    },

    featuredProducts: {
        isLoading: false,
        error: '',
        data: [],
    },
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(`/products`);
        return response.data;
    }
);

export const fetchFeaturedProducts = createAsyncThunk(
    'products/fetchFeaturedProducts',
    async () => {
        const response = await axios.get(`/products/featured`);
        return response.data;
    }
);

export const fetchproductById = createAsyncThunk(
    'products/fetchProductById',
    async (productId) => {
        const response = await axios.get(`/products/${productId}`);
        return response.data;
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        //*PRODUCTS
        builder.addCase(fetchProducts.pending, (state) => {
            state.products.isLoading = true;
            state.products.error = '';
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products.isLoading = false;
            state.products.data = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.products.isLoading = false;
            state.products.error = action.error;
        });

        //*PRODUCT BY ID

        builder.addCase(fetchproductById.pending, (state) => {
            state.product.isLoading = true;
            state.product.error = '';
        });
        builder.addCase(fetchproductById.fulfilled, (state, action) => {
            state.product.isLoading = false;
            state.product.data = action.payload;
        });
        builder.addCase(fetchproductById.rejected, (state, action) => {
            state.product.isLoading = false;
            state.product.error = action.error;
        });

        //* FEATURED PRODUCTS

        builder.addCase(fetchFeaturedProducts.pending, (state) => {
            state.featuredProducts.isLoading = true;
            state.featuredProducts.error = '';
        });
        builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
            state.featuredProducts.isLoading = false;
            state.featuredProducts.data = action.payload;
        });
        builder.addCase(fetchFeaturedProducts.rejected, (state, action) => {
            state.featuredProducts.isLoading = false;
            state.featuredProducts.error = action.error;
        });
    },
});

export const featuredProductsSelector = (state) =>
    state.products.featuredProducts;
export default productsSlice;
