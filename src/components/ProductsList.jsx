import Product from './Product';
import PropTypes from 'prop-types';
import Pagination from './Pagination/Pagination';
const ProductsList = ({ title }) => {
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
            <Pagination />
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
