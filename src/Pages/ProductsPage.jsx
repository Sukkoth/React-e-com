import ProductsList from '../components/Product/ProductsList';
import Filters from '../components/Filters/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/Products/productSlice';
import { useEffect } from 'react';
import FullLoader from '../components/Loaders/FullLoader';
import FullScreenErrorMessage from '../components/Error/FullScreenErrorMessage';
import { redirect } from 'react-router-dom';
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
                {!products.isLoading &&
                    products.error &&
                    products.error.code === 500 && (
                        <FullScreenErrorMessage
                            message={products.error?.message}
                            code={products.error.code}
                        />
                    )}
            </div>
        </>
    );
};

export default ProductsPage;
