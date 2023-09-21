import { useSelector } from 'react-redux';

const CartGrandTotal = () => {
    const cart = useSelector((state) => state.cart);
    return (
        <div className='total-item'>
            <h3>Grand Total</h3>
            <h3>${cart?.subTotal + cart.shipmentPrice}</h3>
        </div>
    );
};

export default CartGrandTotal;
