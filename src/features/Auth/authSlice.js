import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    isLoading: false,
    error: {},
    auth: {},
};

export const login = createAsyncThunk('auth/login', async (userCredentials) => {
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
        throw error.response.data;
    }
});

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData) => {
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
            console.log('REGISTRATION ERROR', error.response.data);
            throw error.response.data;
        }
    }
);

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        fetchUserFromLocal: (state) => {
            const localData = localStorage.getItem('auth');
            if (localData) state.auth = JSON.parse(localData);
        },
        logoutUser: (state) => {
            localStorage.removeItem('auth');
            state.auth = {};
        },
    },
    extraReducers: (builder) => {
        //LOGIN
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
            state.error = {};
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.auth = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        //REGISTER
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.error = {};
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.auth = action.payload;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    },
});

export default authSlice;
export const { fetchUserFromLocal, logoutUser } = authSlice.actions;
