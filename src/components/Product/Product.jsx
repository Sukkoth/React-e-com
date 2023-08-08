import { FaCartPlus, FaSearch, FaHeart } from 'react-icons/fa';
import phone1 from '../../assets/products/headphone-1.jpg';
const staticImageUrl = 'http://localhost:8000/images/products';
const Product = ({ product }) => {
    return (
        <div className='product'>
            <img
                src={
                    `${staticImageUrl}/${product?.variations[0]?.images[0]}` ||
                    phone1
                }
                alt='product image'
                className='img'
            />
            <div className='product-menu'>
                <FaSearch className='icons' />
                <FaCartPlus className='icons' />
                <FaHeart className='icons' />
            </div>
        </div>
    );
};

export default Product;
