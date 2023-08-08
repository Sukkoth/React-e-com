import { FaCartPlus, FaSearch, FaHeart } from 'react-icons/fa';
import phone1 from '../../assets/products/headphone-1.jpg';

const Product = () => {
    return (
        <div className='product'>
            <img src={phone1} alt='product image' className='img' />
            <div className='product-menu'>
                <FaSearch className='icons' />
                <FaCartPlus className='icons' />
                <FaHeart className='icons' />
            </div>
        </div>
    );
};

export default Product;
