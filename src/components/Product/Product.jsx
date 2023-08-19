import { FaCartPlus, FaSearch } from 'react-icons/fa';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import phone1 from '../../assets/products/headphone-1.jpg';
import { PRODCTS_IMAGE_URL } from '../../config/env';
import './product.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/Cart/cartSlice';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const foundInCart = useSelector((state) =>
        state.cart?.data?.data?.items.find(
            (pr) => pr.variationIndex === 0 && pr.productId === product._id
        )
    );
    console.log(product.name, foundInCart);
    const handleAddToCart = () => {
        !foundInCart
            ? dispatch(
                  addToCart({
                      productId: product._id,
                  })
              )
            : console.log('FOUND ID', foundInCart.productId);
    };
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
                {!foundInCart ? (
                    <AiOutlineHeart
                        className='icons'
                        onClick={handleAddToCart}
                    />
                ) : (
                    <AiFillHeart className='icons' onClick={handleAddToCart} />
                )}
            </div>
        </div>
    );
};

export default Product;
