import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const login = createAsyncThunk(
    'auth/login',
    async (userCredentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('/users/auth/login', {
                ...userCredentials,
            });
            if (response?.data?.token) {
                localStorage.setItem(
                    'auth',
                    JSON.stringify({
                        token: response.data.token,
                        user: response.data.user,
                    })
                );
            }
            return response.data;
        } catch (error) {
            return error?.response
                ? rejectWithValue(error.response.data)
                : rejectWithValue(error);
        }
    }
);

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        delete userData.confirmPassword;
        try {
            const response = await axios.post('/users/auth/register', {
                ...userData,
            });
            if (response?.data?.token) {
                localStorage.setItem(
                    'auth',
                    JSON.stringify({
                        token: response.data.token,
                        user: response.data.user,
                    })
                );
            }
            return { user: response.data.user, token: response.data.token };
        } catch (error) {
            return error?.response
                ? rejectWithValue(error.response.data)
                : rejectWithValue(error);
        }
    }
);
