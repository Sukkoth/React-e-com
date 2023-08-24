import { FaSearch } from 'react-icons/fa';
import { BsCartPlusFill, BsFillCartXFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import phone1 from '../../assets/products/headphone-1.jpg';
import { PRODCTS_IMAGE_URL } from '../../config/env';
import './product.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCartItem } from '../../features/Cart/cartSlice';
import {
    addToWishList,
    wishItemSelector,
    removeFromWishList,
    wishItemStatusSelector,
} from '../../features/WishList/wishListSlice';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';

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
    const wishList = useSelector(wishItemSelector);

    const foundInWishList = wishList?.items.find(
        (item) => item.product === product?._id && item.variationIndex === 0
    );
    const wishListItemLoading = useSelector(wishItemStatusSelector);

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
    const handleAddToWishList = () => {
        if (!wishListItemLoading)
            !foundInWishList
                ? dispatch(
                      addToWishList({
                          product: product?._id,
                          variationIndex: 0,
                      })
                  )
                : dispatch(removeFromWishList(foundInWishList?._id));
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
                {wishListItemLoading && <ClipLoader className='icons' />}
                {!wishListItemLoading && !foundInWishList && (
                    <AiOutlineHeart
                        title={'Add to wishlist'}
                        className='icons'
                        onClick={handleAddToWishList}
                    />
                )}
                {!wishListItemLoading && foundInWishList && (
                    <AiFillHeart
                        className='icons'
                        title='Remove from wishlist'
                        onClick={handleAddToWishList}
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
