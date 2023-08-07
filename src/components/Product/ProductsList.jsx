import Product from './Product';
import PropTypes from 'prop-types';
import Pagination from '../Pagination/Pagination';
import { useLocation } from 'react-router-dom';
const ProductsList = ({ title }) => {
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <div className='products-list'>
            <h3>{title}</h3>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            {pathname === '/products' && <Pagination />}
        </div>
    );
};

ProductsList.propTypes = {
    title: PropTypes.string,
};
ProductsList.defaultProps = {
    title: 'Products',
};

export default ProductsList;
