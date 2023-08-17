import createSlice, { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: false,
    items: [],
};

export const fetchCartItems = createAsyncThunk('cart/fetchItems', async () => {
    console.log('in fetch items');
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCartItems.pending, (state) => {
            state.isLoading = true;
            state.error = {};
        });
        builder.addCase(fetchCartItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
            state.error = {};
        });
        builder.addCase(fetchCartItems.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    },
});

export default cartSlice;
