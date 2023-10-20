export const cartReducer = {
    subTotalCalculation: (state, action) => {
        state.subTotal = parseFloat(
            (state.subTotal + action.payload?.price).toFixed(2)
        );
        state.tempCart = state.tempCart?.map((item) =>
            item?._id === action.payload?.id
                ? action?.payload?.price >= 0
                    ? { ...item, quantity: item.quantity + 1 }
                    : { ...item, quantity: item.quantity - 1 }
                : item
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
    calculateShippingPrice: (state, action) => {
        //real shipping price calculation takes place here, but this is just a demo
        state.shipmentPrice = Math.floor(Math.random(1) * 100);
        state.grandTotal = state.grandTotal + state.shipmentPrice;
        state.shipmentAddress = action.payload;
    },
    setPaymentMethod: (state, action) => {
        state.paymentMethod = action.payload;
    },
};
