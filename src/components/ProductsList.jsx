import Product from './Product';
import PropTypes from 'prop-types';
const ProductsList = ({ title }) => {
    return (
        <div className='products-list'>
            {/* <h3>{title}</h3> */}
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
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
