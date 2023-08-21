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
                    alt='prod_img'
                />
                <AiFillHeart className='icon' />
            </div>
            <h3>Wireless Headphones</h3>

            <p>
                Br 500
                <span>
                    <FaCartPlus />
                </span>
            </p>
        </div>
    );
};

export default FeaturedProduct;
