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
    grandTotal: 0,
    subTotal: 0,
    shipmentPrice: 0,
};

export const fetchCartData = createAsyncThunk('cart/fetchData', async () => {
    const response = await axios.get('/carts');
    return response.data;
});

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (
        { productId, variationIndex = 0 },
        { dispatch, rejectWithValue }
    ) => {
        const newCart = {
            product: productId,
            variationIndex: variationIndex,
            quantity: 1,
        };
        try {
            const response = await axios.post('/carts', newCart);
            dispatch(fetchCartData());
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const removeCartItem = createAsyncThunk(
    'cart/removeFromCart',
    async (cartItemId, { dispatch }) => {
        const response = await axios.delete(`/carts/${cartItemId}`);
        dispatch(fetchCartData());
        return response.data;
    }
);

export const updateCartItem = createAsyncThunk(
    'cart/updateCartItem',
    async (item) => {
        const response = await axios.put(`/cart/${item._id}`, item);
        return response.data;
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        subTotalCalculation: (state, action) => {
            state.subTotal = parseFloat(
                (state.subTotal + action.payload).toFixed(2)
            );
            state.grandTotal = state.grandTotal + state.subTotal;
        },
        grandTotalCalculation: (state, action) => {
            //pass shipment price in argument
            //take if here from action.payload
            //action.payload represents shipment price
            //add shipment price and subTotal to get grand total
            state.grandTotal = parseFloat(
                (state.grandTotal + action.payload + state.subTotal).toFixed(2)
            );
        },
        calculateShippingPrice: (state) => {
            //real shipping price calculation takes place here, but this is just a demo
            state.shipmentPrice = Math.floor(Math.random(1) * 100);
            state.grandTotal = state.grandTotal + state.shipmentPrice;
        },
    },
    extraReducers: (builder) => {
        //* FETCH CART DATA
        builder.addCase(fetchCartData.pending, (state) => {
            state.isLoading = true;
            state.error = {};
            state.data = {};
        });
        builder.addCase(fetchCartData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.subTotal = parseFloat(
                action.payload.data.items
                    .reduce((acc, item) => {
                        return (
                            acc +
                            item.product.variations[item.variationIndex].price *
                                item.quantity
                        );
                    }, 0)
                    .toFixed(2)
            );
            state.grandTotal = state.subTotal;
        });
        builder.addCase(fetchCartData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        //* ADD ITEM TO CART

        builder.addCase(addToCart.pending, (state) => {
            state.cart.isLoading = true;
            state.error = {};
        });
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.cart.isLoading = false;
            state.cart.data = action.payload;
        });
        builder.addCase(addToCart.rejected, (state, action) => {
            state.cart.isLoading = false;
            state.cart.error = action.payload;
        });

        //* REMOVE ITEM FROM CART
        builder.addCase(removeCartItem.pending, (state) => {
            state.cart.isLoading = true;
            state.error = {};
        });
        builder.addCase(removeCartItem.fulfilled, (state) => {
            state.cart.isLoading = false;
            state.cart.data = [];
        });
        builder.addCase(removeCartItem.rejected, (state, action) => {
            state.cart.isLoading = false;
            state.cart.error = action.error;
        });
    },
});

export const cartSelector = (state) => state.cart.data;
export const cartIsLoadingSelector = (state) => state.cart.isLoading;
export const cartErrorSelector = (state) => state.cart.error;

export const {
    grandTotalCalculation,
    subTotalCalculation,
    calculateShippingPrice,
} = cartSlice.actions;

export default cartSlice;
