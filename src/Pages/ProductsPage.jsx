import ProductsList from '../components/Product/ProductsList';
import Filters from '../components/Filters/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/Products/productSlice';
import { useEffect } from 'react';
import FullLoader from '../components/Loaders/FullLoader';
const ProductsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

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
                    <h3 style={{ minHeight: '90vh' }}>
                        ERROR! {products.error?.message}
                    </h3>
                )}
            </div>
        </>
    );
};

export default ProductsPage;
