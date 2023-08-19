import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    isLoading: false,
    error: false,
    data: [],
    cart: {
        isLoading: false,
        error: false,
        data: {},
    },
};

export const fetchCartData = createAsyncThunk('cart/fetchData', async () => {
    const response = await axios.get('/carts');
    return response.data;
});

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async ({ productId, variationIndex = 0 }, { dispatch }) => {
        const newCart = {
            productId,
            variationIndex: variationIndex,
            quantity: 1,
        };
        const response = await axios.post('/carts', newCart);
        dispatch(fetchCartData());
        return response.data;
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCartData.pending, (state) => {
            state.isLoading = true;
            state.error = {};
        });
        builder.addCase(fetchCartData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = {};
        });
        builder.addCase(fetchCartData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(addToCart.pending, (state) => {
            state.cart.isLoading = true;
            state.error = {};
        });
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.cart.isLoading = false;
            state.cart.data = action.payload;
            state.cart.error = {};
        });
        builder.addCase(addToCart.rejected, (state, action) => {
            state.cart.isLoading = false;
            state.cart.error = action.error;
        });
    },
});

export const cartSelector = (state) => state.cart.data;

export default cartSlice;
