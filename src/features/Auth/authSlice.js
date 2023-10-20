import { createSlice } from '@reduxjs/toolkit';
import { authBuilder } from './authBuilder';

const initialState = {
    isLoading: false,
    error: {},
    auth: {},
};

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        fetchUserFromLocal: (state) => {
            const localData = localStorage.getItem('auth');
            if (localData) state.auth = JSON.parse(localData);
        },
        resetErrors: (state) => {
            state.error = null;
        },
        logoutUser: (state) => {
            localStorage.removeItem('auth');
            state.auth = {};
        },
    },
    extraReducers: authBuilder,
});

export default authSlice;
export const { fetchUserFromLocal, logoutUser, resetErrors } =
    authSlice.actions;
