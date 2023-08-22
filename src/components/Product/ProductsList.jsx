import Product from './Product';
import PropTypes from 'prop-types';
import Pagination from '../Pagination/Pagination';
import { useLocation } from 'react-router-dom';
import './productList.css';

/**
 * page = 1,
 *totalResults = 100,
 *pageSize = 5,
 *handlePageChange,
 */
const ProductsList = ({ title, products }) => {
    const { pathname } = useLocation();
    return (
        <div className='products-list'>
            <h3>{title}</h3>
            {products.data?.products?.map((product) => (
                <Product product={product} key={product._id} />
            ))}
            {pathname === '/products' && (
                <Pagination totalResults={products.data?.productsCount} />
            )}
        </div>
    );
};

ProductsList.propTypes = {
    title: PropTypes.string,
    products: PropTypes.array,
};
ProductsList.defaultProps = {
    title: 'Products',
};

export default ProductsList;
