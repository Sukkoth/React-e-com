import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { PRODCTS_IMAGE_URL } from '../../config/env';
import CartOperations from '../Cart/CartOperations';
import WishlistOperations from '../Wishlist/WishlistOperations';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FeaturedProduct = ({ product }) => {
    const productImg = product?.variations[0]?.images[0];
    return (
        <div className='f-product'>
            <div className='image-container'>
                <Link to={`/products/${product?._id}`}>
                    {
                        <img
                            src={`${PRODCTS_IMAGE_URL}/${productImg}`}
                            alt={product?.name || 'product_image'}
                        />
                    }
                </Link>
                <span className='icon'>
                    {
                        <WishlistOperations
                            type='icon'
                            productId={product?._id}
                            key={product?._id}
                            showLoader={false}
                        />
                    }
                </span>
                {/* <AiOutlineHeart className='icon' /> */}
            </div>
            <h3>{product?.name}</h3>

            <p>
                Br {product?.variations[0]?.price}
                <CartOperations
                    type='icon'
                    productId={product?._id}
                    key={product?._id}
                    showLoader={false}
                />
            </p>
        </div>
    );
};

FeaturedProduct.propTypes = {
    product: PropTypes.object,
};

export default FeaturedProduct;
