import { FaFolderPlus } from 'react-icons/fa';
import ProductsList from './ProductsList';
import { Link } from 'react-router-dom';
import './productsList.css';
const FeaturedProducts = () => {
    return (
        <section className='featured-products'>
            <ProductsList title='Featured Products' />

            <Link style={{ textDecoration: 'none' }} to={'/products'}>
                <button className='btn' style={{ margin: 'auto' }}>
                    <FaFolderPlus /> View More
                </button>
            </Link>
        </section>
    );
};

export default FeaturedProducts;
