import { removeCartItem } from '../../features/Cart/cartSlice';
import { useDispatch } from 'react-redux';
import CartItem from './CartItem';

const CartItemsList = ({ cartItems }) => {
    const dispatch = useDispatch();
    const handleRemoveItemFromCart = (itemId) => {
        dispatch(removeCartItem(itemId));
    };
    return cartItems.map((cartItem) => (
        <CartItem
            cartItem={cartItem}
            onItemRemove={handleRemoveItemFromCart}
            key={cartItem._id}
        />
    ));
};

export default CartItemsList;
