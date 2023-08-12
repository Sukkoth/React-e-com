import { FaCartPlus, FaSearch, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import phone1 from '../../assets/products/headphone-1.jpg';
import { PRODCTS_IMAGE_URL } from '../../config/env';
const Product = ({ product }) => {
    return (
        <div className='product'>
            <img
                src={
                    `${PRODCTS_IMAGE_URL}/${product?.variations[0]?.images[0]}` ||
                    phone1
                }
                alt='product image'
                className='img'
            />
            <div className='product-menu'>
                <Link to={`/products/${product?._id}`}>
                    <FaSearch className='icons' />
                </Link>
                <FaCartPlus className='icons' />
                <FaHeart className='icons' />
            </div>
        </div>
    );
};

export default Product;
