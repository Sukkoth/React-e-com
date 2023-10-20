import { addToCart, fetchCartData, removeCartItem } from './cartService';

export const cartBuilder = (builder) => {
    //* FETCH CART DATA
    builder.addCase(fetchCartData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    });
    builder.addCase(fetchCartData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.tempCart = [...action.payload.data.items];
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
        state.error = null;
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
        state.error = null;
    });
    builder.addCase(removeCartItem.fulfilled, (state) => {
        state.cart.isLoading = false;
        state.cart.data = [];
    });
    builder.addCase(removeCartItem.rejected, (state, action) => {
        state.cart.isLoading = false;
        state.cart.error = action.error;
    });
};
