import './cartComponent.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    cartSelector,
    cartIsLoadingSelector,
    cartErrorSelector,
} from '../../features/Cart/cartSlice';
import { fetchCartData } from '../../features/Cart/cartService';

import FullScreenErrorMessage from '../Error/FullScreenErrorMessage';
import CartItemsList from './CartItemsList';
import FullLoader from '../Loaders/FullLoader';
import CartTotal from './CartTotal';
import CartGrandTotal from './CartGrandTotal';
import Shipping from './Shipping';
import Payment from './Payment';
import PlaceOrderButton from './PlaceOrderButton';
import Card from '../MessageCard/Card';
import cartEmptyImage from '../../assets/empty-cart.png';

const CartComponent = () => {
    const dispatch = useDispatch();
    const cart = useSelector(cartSelector);
    const cartIsLoading = useSelector(cartIsLoadingSelector);
    const cartError = useSelector(cartErrorSelector);
    const [checkout, setCheckout] = useState(false);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    const cartItems = cart?.data?.items || [];

    if (cartIsLoading) return <FullLoader isLoading={cartIsLoading} />;
    if (!cartIsLoading && cartError?.message) {
        console.log(cartError);
        return <FullScreenErrorMessage error={cartError} />;
    }
    return (
        <>
            {cartItems?.length == 0 ? (
                <Card
                    text='There is nothing in your cart. Add items to continue'
                    header='Empty Cart'
                    btnText='Browse Products'
                    image={cartEmptyImage}
                    link='/products'
                />
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
                        {!checkout && (
                            <button
                                className='btn btn-checkout'
                                onClick={() => setCheckout(true)}
                            >
                                Checkout
                            </button>
                        )}
                        {checkout && (
                            <>
                                <Shipping />
                                <CartGrandTotal />
                                <Payment />{' '}
                                <div className='total-item'>
                                    <PlaceOrderButton />
                                </div>
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default CartComponent;
