import { useSelector } from 'react-redux';

const CartTotal = () => {
    const subTotal = useSelector((state) => state.cart.subTotal);
    return (
        <div className='total-item'>
            <h3>Sub Total</h3>
            <h3>Br {subTotal}</h3>
        </div>
    );
};

export default CartTotal;
