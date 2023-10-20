import { login, registerUser } from './authService';

export const authBuilder = (builder) => {
    //LOGIN
    builder.addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.auth = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    });

    //REGISTER
    builder.addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.auth = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    });
};
