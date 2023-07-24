import { FaFolderPlus } from 'react-icons/fa';
import ProductsList from './ProductsList';
import './productsList.css';
const FeaturedProducts = () => {
    return (
        <section className='featured-products'>
            <ProductsList title='Featured Products' />

            <button className='btn' style={{ margin: 'auto' }}>
                <FaFolderPlus /> View More
            </button>
        </section>
    );
};

export default FeaturedProducts;
