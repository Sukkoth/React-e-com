import './cartComponent.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchCartData,
    cartSelector,
    cartIsLoadingSelector,
    cartErrorSelector,
    tempCartSelector,
} from '../../features/Cart/cartSlice';

import FullScreenErrorMessage from '../Error/FullScreenErrorMessage';
import CartItemsList from './CartItemsList';
import FullLoader from '../Loaders/FullLoader';
import CartTotal from './CartTotal';
import CartGrandTotal from './CartGrandTotal';
import Shipping from './Shipping';
import Payment from './Payment';
import PlaceOrderButton from './PlaceOrderButton';
import cartEmptyImage from '../../assets/empty-cart.png';
import { Link } from 'react-router-dom';

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
        return <FullScreenErrorMessage message={cartError?.message} />;
    }
    return (
        <>
            {cartItems?.length == 0 ? (
                <EmptyCart />
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

function EmptyCart() {
    return (
        <div className='empty-cart'>
            <div className='card'>
                <div className='img-container'>
                    <img src={cartEmptyImage} alt='cart-empty-img' />
                </div>
                <h1>Empty cart</h1>
                <p>There is nothing in your cart. Add items to continue</p>
                <Link to={'/products'}> Browse Products</Link>
            </div>
        </div>
    );
}

export default CartComponent;
