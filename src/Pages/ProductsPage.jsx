import ProductsList from '../components/Product/ProductsList';
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
