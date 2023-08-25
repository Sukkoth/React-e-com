import { useSelector, useDispatch } from 'react-redux';
import { BsCartPlusFill, BsFillCartXFill } from 'react-icons/bs';
import ClipLoader from 'react-spinners/ClipLoader';
import { addToCart, removeCartItem } from '../../features/Cart/cartSlice';
import { SyncLoader } from 'react-spinners';
import PropTypes from 'prop-types';
const CartOperations = ({
    productId,
    variationIndex = 0,
    type = 'button',
    showLoader = true,
}) => {
    const dispatch = useDispatch();
    const foundInCart = useSelector((state) =>
        state.cart?.data?.data?.items.find(
            (product) =>
                product?.productId?._id === productId &&
                product?.variationIndex === variationIndex
        )
    );

    const cartStatusIsLoading = useSelector(
        (state) => state.cart.cart.isLoading
    );

    const handleCartAddRemove = () => {
        if (!cartStatusIsLoading)
            !foundInCart
                ? dispatch(
                      addToCart({
                          productId: productId,
                      })
                  )
                : dispatch(removeCartItem(foundInCart._id));
    };

    if (type === 'button') {
        return (
            <button
                className={!foundInCart ? `add-cart` : `removeItem`}
                onClick={handleCartAddRemove}
            >
                {showLoader && cartStatusIsLoading && (
                    <SyncLoader
                        size={5}
                        style={{ padding: '0.001rem' }}
                        color='white'
                    />
                )}
                {!cartStatusIsLoading && !foundInCart && (
                    <>
                        Add to Cart
                        <BsCartPlusFill />
                    </>
                )}
                {!cartStatusIsLoading && foundInCart && (
                    <>
                        Remove from cart <BsFillCartXFill />
                    </>
                )}
            </button>
        );
    } else if (showLoader)
        return (
            <span>
                {cartStatusIsLoading && <ClipLoader className='icons' />}
                {!cartStatusIsLoading && foundInCart && (
                    <BsFillCartXFill
                        title={'Remove from cart'}
                        className='icons'
                        onClick={handleCartAddRemove}
                    />
                )}
                {!cartStatusIsLoading && !foundInCart && (
                    <BsCartPlusFill
                        title={'Add to cart'}
                        className='icons'
                        onClick={handleCartAddRemove}
                    />
                )}
            </span>
        );
    else {
        return (
            <span>
                {showLoader && cartStatusIsLoading && (
                    <ClipLoader className='icons' />
                )}
                {foundInCart && (
                    <BsFillCartXFill
                        title={'Remove from cart'}
                        className='icons'
                        onClick={handleCartAddRemove}
                    />
                )}
                {!foundInCart && (
                    <BsCartPlusFill
                        title={'Add to cart'}
                        className='icons'
                        onClick={handleCartAddRemove}
                    />
                )}
            </span>
        );
    }
};

CartOperations.propTypes = {
    productId: PropTypes.string,
    variationIndex: PropTypes.number,
    type: PropTypes.string,
    showLoader: PropTypes.bool,
};

export default CartOperations;

//you have two layouts, button and icon