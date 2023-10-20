import ProductsList from '../components/Product/ProductsList';
import Filters from '../components/Filters/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/Products/productsService';
import { useEffect } from 'react';
import FullLoader from '../components/Loaders/FullLoader';
import FullScreenErrorMessage from '../components/Error/FullScreenErrorMessage';
const ProductsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            <div className='productsPage'>
                <FullLoader isLoading={products.isLoading} />
                {!products.isLoading && !products.error && products.data && (
                    <>
                        <Filters />
                        <ProductsList products={products} />
                    </>
                )}
                {!products.isLoading && products.error && (
                    <FullScreenErrorMessage error={products.error} />
                )}
            </div>
        </>
    );
};

export default ProductsPage;
