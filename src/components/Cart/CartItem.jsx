import PropTypes from 'prop-types';
import { PRODCTS_IMAGE_URL } from '../../config/env';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const CartItem = ({ cartItem, onItemRemove }) => {
    const [itemQuantity, setItemQuantity] = useState(cartItem.quantity);

    const handleQuantityChange = (operator) => {
        operator === '-'
            ? setItemQuantity((prev) => prev - 1)
            : setItemQuantity((prev) => prev + 1);
    };

    const itemImg = `${PRODCTS_IMAGE_URL}/${
        cartItem?.productId?.variations[cartItem.variationIndex]?.images[0]
    }`;
    const itemPrice =
        cartItem?.productId?.variations[cartItem.variationIndex]?.price;

    const stockQuantity =
        cartItem?.productId?.variations[cartItem.variationIndex]?.stockQuantity;

    return (
        <div className='cart-item' key={cartItem._id}>
            <img className='img' src={itemImg} alt='product_img' />

            <div className='price'>Br {itemPrice}</div>
            <div className='quantity'>
                <div className='buttons'>
                    <button
                        className={`cart-button btn-sub ${
                            itemQuantity <= 1 ? 'cart-button-disabled' : ''
                        }`}
                        onClick={() => handleQuantityChange('-')}
                        disabled={itemQuantity <= 1}
                    >
                        -
                    </button>
                    <button className='cart-button btn-qty'>
                        {itemQuantity}
                    </button>
                    <button
                        className={`cart-button btn-add ${
                            itemQuantity >= stockQuantity
                                ? 'cart-button-disabled'
                                : ''
                        }`}
                        onClick={() => handleQuantityChange('+')}
                        disabled={itemQuantity >= stockQuantity}
                    >
                        +
                    </button>
                </div>
            </div>
            <div className='total'>
                120.00$
                <span
                    onClick={() => onItemRemove(cartItem._id)}
                    style={{
                        padding: '0.5rem',
                    }}
                >
                    <FaTimes />
                </span>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    cartItem: PropTypes.object,
    onItemRemove: PropTypes.func,
};

export default CartItem;
