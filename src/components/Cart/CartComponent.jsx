import './cartComponent.css';
import { useEffect } from 'react';
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
                        <div className='total-item'>
                            <h3>Sub Total</h3>
                            <p>Br 10000</p>
                        </div>
                        <div className='total-item'>
                            <label htmlFor='shippingCountry'>Region</label>
                            <select name='' id='shippingCountry'>
                                <option value='Oromia'>Oromia</option>
                                <option value='Amhara'>Amhara</option>
                                <option value='Gambella'>Gambella</option>
                                <option value='Somali'>Somali</option>
                                <option value='south'>South Region</option>
                                <option value='Sidama'>Sidama</option>
                                <option value='Tigrai'>Tigrai</option>
                            </select>
                        </div>
                        <div className='total-item'>
                            <label htmlFor='city'>City</label>
                            <select name='' id='city'>
                                <option value='Oromia'>Oromia</option>
                                <option value='Amhara'>Amhara</option>
                                <option value='Gambella'>Gambella</option>
                                <option value='Somali'>Somali</option>
                                <option value='south'>South Region</option>
                                <option value='Sidama'>Sidama</option>
                                <option value='Tigrai'>Tigrai</option>
                            </select>
                        </div>
                        <div className='total-item'>
                            <label htmlFor='phone'>Phone </label>
                            <input type='text' id='phone' />
                        </div>
                        <div className='total-item'>
                            <p>Shipment</p>
                            <p>$12</p>
                        </div>

                        <div className='total-item'>
                            <button className='btn'>Estimate Shipping</button>
                        </div>
                        <div className='total-item'>
                            <p>Grand Total</p>
                            <p>$120</p>
                        </div>

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
