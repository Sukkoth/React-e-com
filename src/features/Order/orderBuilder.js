import { placeOrder, getAllOrders } from './OrderService';

const OrderBuilder = (builder) => {
    //place order cases
    builder.addCase(placeOrder.pending, (state) => {
        state.order.isLoading = true;
        state.order.error = null;
    });
    builder.addCase(placeOrder.fulfilled, (state, action) => {
        state.order.isLoading = false;
        state.order.data = action.payload;
    });
    builder.addCase(placeOrder.rejected, (state, action) => {
        state.order.isLoading = false;
        state.order.error = action.payload;
    });

    builder.addCase(getAllOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
    });
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
    });
    builder.addCase(getAllOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    });
};

export default OrderBuilder;
