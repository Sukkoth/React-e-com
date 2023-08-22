import { FaSearch } from 'react-icons/fa';
import { BsCartPlusFill, BsFillCartXFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import phone1 from '../../assets/products/headphone-1.jpg';
import { PRODCTS_IMAGE_URL } from '../../config/env';
import './product.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCartItem } from '../../features/Cart/cartSlice';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const foundInCart = useSelector((state) =>
        state.cart?.data?.data?.items.find(
            (pr) => pr.variationIndex === 0 && pr.productId._id === product._id
        )
    );
    const handleCartAddRemove = () => {
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
                alt='product image'
                className='img'
            />
            <div className='product-menu'>
                <Link to={`/products/${product?._id}`}>
                    <FaSearch className='icons' />
                </Link>

                {foundInCart ? (
                    <BsFillCartXFill
                        className='icons remove'
                        onClick={handleCartAddRemove}
                    />
                ) : (
                    <BsCartPlusFill
                        className='icons'
                        onClick={handleCartAddRemove}
                    />
                )}
                {!foundInCart ? (
                    <AiOutlineHeart
                        className='icons'
                        onClick={handleWishAddRemove}
                    />
                ) : (
                    <AiFillHeart
                        className='icons remove'
                        onClick={handleWishAddRemove}
                    />
                )}
            </div>
        </div>
    );
};

export default Product;
