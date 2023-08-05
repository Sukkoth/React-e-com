import ProductsList from '../components/ProductsList';
import Pagination from '../components/Pagination/Pagination';
import Filters from '../components/Filters/Filters';

const ProductsPage = () => {
    return (
        <>
            <div className='productsPage'>
                <Filters />
                <ProductsList />
            </div>
        </>
    );
};

export default ProductsPage;
