import { useSelector } from 'react-redux';

const CartGrandTotal = () => {
    const grandTotal = useSelector((state) => state.cart.grandTotal);
    return (
        <div className='total-item'>
            <p>Grand Total</p>
            <p>${grandTotal}</p>
        </div>
    );
};

export default CartGrandTotal;
