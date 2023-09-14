import './cartComponent.css';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCartData,
    cartSelector,
    cartIsLoadingSelector,
    cartErrorSelector,
} from '../../features/Cart/cartSlice';

import FullScreenErrorMessage from '../Error/FullScreenErrorMessage';
import CartItemsList from './CartItemsList';
import FullLoader from '../Loaders/FullLoader';
import CartTotal from './CartTotal';
import CartGrandTotal from './CartGrandTotal';
import Shipping from './Shipping';

const CartComponent = () => {
    const dispatch = useDispatch();
    const cart = useSelector(cartSelector);
    const cartIsLoading = useSelector(cartIsLoadingSelector);
    const cartError = useSelector(cartErrorSelector);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    const cartItems = cart?.data?.items || [];

    if (cartIsLoading) return <FullLoader isLoading={cartIsLoading} />;
    if (!cartIsLoading && cartError?.message) {
        return <FullScreenErrorMessage message={cartError?.message} />;
    }
    return (
        <>
            {cartItems?.length == 0 ? (
                <FullScreenErrorMessage message={'Your cart it empty'} />
            ) : (
                <>
                    <h3>Your Cart</h3>
                    <div className='cart-container'>
                        <div className='cart-item'>
                            <p>Image</p>
                            <p>Unit Price</p>
                            <p>In Stock</p>
                            <p>Quantity</p>
                            <p>Total Price</p>
                        </div>
                        <CartItemsList cartItems={cartItems} />
                    </div>
                    <div className='cart-total'>
                        <CartTotal />
                        <Shipping />
                        <CartGrandTotal />

                        <div className='total-item'>
                            <button className='btn'>Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CartComponent;
