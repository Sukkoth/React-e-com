import { FaSearch } from 'react-icons/fa';
import { BsCartPlusFill, BsFillCartXFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import phone1 from '../../assets/products/headphone-1.jpg';
import { PRODCTS_IMAGE_URL } from '../../config/env';
import './product.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCartItem } from '../../features/Cart/cartSlice';
import PropTypes from 'prop-types';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const foundInCart = useSelector((state) =>
        state.cart?.data?.data?.items.find(
            (pr) => pr.variationIndex === 0 && pr.productId._id === product._id
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
                          productId: product._id,
                      })
                  )
                : dispatch(removeCartItem(foundInCart._id));
    };
    const handleWishAddRemove = () => {
        alert('liked');
    };
    return (
        <div className='product'>
            <img
                src={
                    `${PRODCTS_IMAGE_URL}/${product?.variations[0]?.images[0]}` ||
                    phone1
                }
                alt={product?.name}
                className='img'
            />
            <div className='product-menu'>
                <Link to={`/products/${product?._id}`} title={'Search'}>
                    <FaSearch className='icons' />
                </Link>

                {foundInCart ? (
                    <BsFillCartXFill
                        title={'Remove from cart'}
                        className='icons remove'
                        onClick={handleCartAddRemove}
                    />
                ) : (
                    <BsCartPlusFill
                        title={'Add to cart'}
                        className='icons'
                        onClick={handleCartAddRemove}
                    />
                )}
                {!foundInCart ? (
                    <AiOutlineHeart
                        title={'Add to wishlist'}
                        className='icons'
                        onClick={handleWishAddRemove}
                    />
                ) : (
                    <AiFillHeart
                        className='icons remove'
                        title='Remove from wishlist'
                        onClick={handleWishAddRemove}
                    />
                )}
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
};

export default Product;
