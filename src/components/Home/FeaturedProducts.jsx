import image from '../../assets/products/tv-1.jpg';
import './featuredProducts.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import { FaCartPlus } from 'react-icons/fa';
const FeaturedProducts = () => {
    return (
        <section className='featured'>
            <h4>Featured Products</h4>
            <div className='f-products'>
                <div className='f-product'>
                    <div className='image-container'>
                        <img src={image} alt='prod_img' />
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
                <div className='f-product'>
                    <div className='image-container'>
                        <img src={image} alt='prod_img' />
                        <AiOutlineHeart className='icon' />
                    </div>
                    <h3>Wireless Headphones</h3>
                    <p>
                        Br 500
                        <span>
                            <FaCartPlus />
                        </span>
                    </p>
                </div>
                <div className='f-product'>
                    <div className='image-container'>
                        <img src={image} alt='prod_img' />
                        <AiOutlineHeart className='icon' />
                    </div>
                    <h3>Wireless Headphones</h3>
                    <p>
                        Br 500
                        <span>
                            <FaCartPlus />
                        </span>
                    </p>
                </div>
                <div className='f-product'>
                    <div className='image-container'>
                        <img src={image} alt='prod_img' />
                        <AiOutlineHeart className='icon' />
                    </div>
                    <h3>Wireless Headphones</h3>
                    <p>
                        Br 500
                        <span>
                            <FaCartPlus />
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
