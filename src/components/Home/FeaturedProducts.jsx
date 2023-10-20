import './featuredProducts.css';
import FeaturedProduct from './FeaturedProduct';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeaturedProducts } from '../../features/Products/productsService';
import { featuredProductsSelector } from '../../features/Products/productSlice';
import { useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

const FeaturedProducts = () => {
    const dispatch = useDispatch();
    useState(() => {
        dispatch(fetchFeaturedProducts());
    });
    const featuredProducts = useSelector(featuredProductsSelector);
    return (
        <section className='featured'>
            <>
                <h4>Featured Products</h4>
                <div className='f-products'>
                    {featuredProducts?.isLoading && <ScaleLoader />}
                    {!featuredProducts?.isLoading &&
                        featuredProducts?.data?.products?.map((product) => (
                            <FeaturedProduct
                                key={product._id}
                                product={product}
                            />
                        ))}
                </div>
            </>
        </section>
    );
};

export default FeaturedProducts;
