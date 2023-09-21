import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../../features/Order/OrderService';
import { useNavigate } from 'react-router-dom';

const PlaceOrderButton = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart);
    const singleOrder = useSelector((state) => state.order.order);

    async function handlePlaceOrder() {
        const orderToBePlaced = {
            items: cartData.tempCart.map((item) => {
                return { ...item, product: item.product._id };
            }),
            shipmentPrice: cartData?.shipmentPrice,
            shipmentAddress: cartData?.shipmentAddress,
            grandTotal: cartData?.shipmentPrice + cartData?.subTotal,
            paymentMethod: cartData?.paymentMethod,
        };
        if (
            !orderToBePlaced?.items.length ||
            !orderToBePlaced?.shipmentAddress ||
            !orderToBePlaced?.paymentMethod
        )
            alert(
                'Make sure you have provided all the necessary details for order'
            );
        else {
            dispatch(placeOrder(orderToBePlaced));
            navigate('/payment');
        }
    }
    return (
        <button onClick={handlePlaceOrder} className='btn'>
            {singleOrder?.isLoading && 'Placing Order . . . '}
            {!singleOrder?.isLoading && 'Place Order'}
        </button>
    );
};

export default PlaceOrderButton;