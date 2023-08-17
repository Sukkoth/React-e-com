import { useEffect } from 'react';
import CartComponent from '../components/Cart/CartComponent';

const CartPage = () => {
    useEffect(() => {}, []);
    return (
        <section className='cart-page'>
            <CartComponent />
        </section>
    );
};

export default CartPage;
