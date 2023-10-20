import {
    fetchProducts,
    fetchFeaturedProducts,
    fetchproductById,
} from './productsService';

export const productsBuilder = (builder) => {
    //*PRODUCTS
    builder.addCase(fetchProducts.pending, (state) => {
        state.products.isLoading = true;
        state.products.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.products.isLoading = false;
        state.products.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
        state.products.isLoading = false;
        state.products.error = action.payload;
    });

    //*PRODUCT BY ID

    builder.addCase(fetchproductById.pending, (state) => {
        state.product.isLoading = true;
        state.product.error = null;
    });
    builder.addCase(fetchproductById.fulfilled, (state, action) => {
        state.product.isLoading = false;
        state.product.data = action.payload;
    });
    builder.addCase(fetchproductById.rejected, (state, action) => {
        state.product.isLoading = false;
        state.product.error = action.payload;
    });

    //* FEATURED PRODUCTS

    builder.addCase(fetchFeaturedProducts.pending, (state) => {
        state.featuredProducts.isLoading = true;
        state.featuredProducts.error = null;
    });
    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.featuredProducts.isLoading = false;
        state.featuredProducts.data = action.payload;
    });
    builder.addCase(fetchFeaturedProducts.rejected, (state, action) => {
        state.featuredProducts.isLoading = false;
        state.featuredProducts.error = action.payload;
    });
};
