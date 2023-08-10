import image from '../../assets/products/tv-1.jpg';
import './featuredProducts.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
const FeaturedProducts = () => {
    return (
        <section className='featured'>
            <h4>Featured Products</h4>
            <div className='products'>
                <div className='product'>
                    <div className='image-container'>
                        <img src={image} alt='prod_img' />
                        <AiFillHeart className='icon' />
                    </div>
                    <h3>
                        Wireless Headphones <span>Br 250</span>
                    </h3>
                    <p>decsription of the product here</p>
                    <button className='add-to-cart'>Add to Cart </button>
                </div>
                <div className='product'>
                    <div className='image-container'>
                        <img src={image} alt='prod_img' />
                        <AiOutlineHeart className='icon' />
                    </div>
                    <h3>
                        Wireless Headphones <span>Br 250</span>
                    </h3>
                    <p>decsription of the product here</p>
                    <button className='add-to-cart'>Add to Cart </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
