import CartItem from './CartItem';

const CartItemsList = ({ cartItems }) => {
    return cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} key={cartItem._id} />
    ));
};

export default CartItemsList;
