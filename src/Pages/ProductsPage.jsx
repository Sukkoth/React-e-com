import ProductsList from '../components/Product/ProductsList';
import Filters from '../components/Filters/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/Products/productSlice';
import { useEffect } from 'react';
const ProductsPage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <>
            <div className='productsPage'>
                {products.isLoading && (
                    <h3 style={{ minHeight: '90vh' }}>Loading . . . </h3>
                )}

                {!products.isLoading && !products.error && products.data && (
                    <>
                        <Filters />
                        <ProductsList products={products} />
                    </>
                )}
                {products.error && (
                    <h3 style={{ minHeight: '90vh' }}>
                        ERROR! {products.error?.message}
                    </h3>
                )}
            </div>
        </>
    );
};

export default ProductsPage;
