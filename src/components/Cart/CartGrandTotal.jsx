import { useSelector } from 'react-redux';

const CartGrandTotal = () => {
    const grandTotal = useSelector((state) => state.cart.grandTotal);
    return (
        <div className='total-item'>
            <h3>Grand Total</h3>
            <h3>${grandTotal}</h3>
        </div>
    );
};

export default CartGrandTotal;
