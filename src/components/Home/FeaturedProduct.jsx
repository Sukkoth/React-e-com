import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { PRODCTS_IMAGE_URL } from '../../config/env';

const FeaturedProduct = ({ product }) => {
    const productImg = product?.variations[0]?.images[0];
    return (
        <div className='f-product'>
            <div className='image-container'>
                <img
                    src={`${PRODCTS_IMAGE_URL}/${productImg}`}
                    alt={product?.name || 'product_image'}
                />
                <AiOutlineHeart className='icon' />
            </div>
            <h3>{product?.name}</h3>

            <p>
                Br {product?.variations[0]?.price}
                <span>
                    <FaCartPlus />
                </span>
            </p>
        </div>
    );
};

export default FeaturedProduct;
