import { FaFolderPlus } from 'react-icons/fa';
import Product from './Product';
import './productsList.css';
const ProductsList = ({ title }) => {
    return (
        <section className='featured-products'>
            <div className='products-list'>
                <h3>{title}</h3>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

            <button className='btn' style={{ margin: 'auto' }}>
                <FaFolderPlus /> View More
            </button>
        </section>
    );
};

ProductsList.defaultProps = {
    title: 'Products',
};

export default ProductsList;
