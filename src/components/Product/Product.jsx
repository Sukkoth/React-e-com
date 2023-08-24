import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import phone1 from '../../assets/products/headphone-1.jpg';
import { PRODCTS_IMAGE_URL } from '../../config/env';
import './product.css';
import PropTypes from 'prop-types';
import CartOperation from '../Cart/CartOperations';
import WishlistOperations from '../Wishlist/WishlistOperations';

const Product = ({ product }) => {
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
                <CartOperation type='icon' productId={product?._id} />
                <WishlistOperations type='icon' productId={product?._id} />
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
};

export default Product;
