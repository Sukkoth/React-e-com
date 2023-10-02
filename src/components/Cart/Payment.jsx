import { useDispatch, useSelector } from 'react-redux';
import { setPaymentMethod } from '../../features/Cart/cartSlice';

const Payment = () => {
    const dispatch = useDispatch();
    const paymentMethod = useSelector((state) => state.cart.paymentMethod);

    function handlePaymentMethodChange(e) {
        dispatch(setPaymentMethod(e.target.value));
    }

    return (
        <div className='total-item' style={{ marginTop: '3rem' }}>
            <h3>Payment Method</h3>
            <select
                name='paymentMethod'
                id='paymentMethod'
                onChange={handlePaymentMethodChange}
                value={paymentMethod}
            >
                {/* <option value='paypal'>Paypal</option> */}
                <option value='stripe'>Stripe</option>
            </select>
        </div>
    );
};

export default Payment;
