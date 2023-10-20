import {
    addToWishList,
    getWishList,
    removeFromWishList,
} from './wishlistService';

export const wishlistBuilder = (builder) => {
    //get all items in users wishlist
    builder.addCase(getWishList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    });

    builder.addCase(getWishList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
    });

    builder.addCase(getWishList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    });

    //add item to wishlist

    builder.addCase(addToWishList.pending, (state) => {
        state.item.isLoading = true;
        state.item.error = null;
    });
    builder.addCase(addToWishList.fulfilled, (state, action) => {
        state.item.isLoading = false;
        state.item.data = action.payload;
    });

    builder.addCase(addToWishList.rejected, (state, action) => {
        state.item.isLoading = false;
        state.item.error = action.payload;
    });

    //remove item from wishlist

    builder.addCase(removeFromWishList.pending, (state) => {
        state.item.isLoading = true;
        state.item.error = null;
    });
    builder.addCase(removeFromWishList.fulfilled, (state) => {
        state.item.isLoading = false;
        state.item.data = {};
    });

    builder.addCase(removeFromWishList.rejected, (state, action) => {
        state.item.isLoading = false;
        state.item.error = action.payload;
    });
};
