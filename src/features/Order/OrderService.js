import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const placeOrder = createAsyncThunk(
    'order/placeOrder',
    async (order, { rejectWithValue }) => {
        try {
            const response = await axios.post('/order', order);
            return response?.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getAllOrders = createAsyncThunk(
    'order/getAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/order');
            return response?.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
