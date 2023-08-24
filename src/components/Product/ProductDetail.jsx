import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproductById } from '../../features/Products/productSlice';
import { PRODCTS_IMAGE_URL } from '../../config/env';
import FullLoader from '../Loaders/FullLoader';
import FullScreenErrorMessage from '../Error/FullScreenErrorMessage';
import { useLocation } from 'react-router-dom';
import WishlistOperations from '../Wishlist/WishlistOperations';
import CartOperations from '../Cart/CartOperations';
import './productDetail.css';

const ProductDetail = () => {
    //use this incase you want to redirect to specific variant than using default 0
    const location = useLocation();

    const queryParams = useMemo(
        () => new URLSearchParams(location.search),
        [location.search]
    );

    //* //////////////////DISPATCH, SELECTOR, PARAMS////////////////////////
    const { productId } = useParams();
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.products.product);
    const {
        data: { product },
        isLoading,
        error,
    } = productData;

    //* //////////////////// states //////////////////////////

    const [activeVariant, setActiveVariant] = useState(0);
    const [activeImage, setActiveImage] = useState(0);
    const handleChangeVariant = (index) => {
        setActiveVariant(index);
        setActiveImage(0);
    };

    //* ////////////////// Drived states ////////////////////////

    // console.log('variant', activeVariant, foundInCart);
    const imageToBePreviewed = `${PRODCTS_IMAGE_URL}/${product?.variations[activeVariant]?.images[activeImage]}`;

    //* ///////////////////// EFFECTS   ///////////////////////

    useEffect(() => {
        //*FETCH A RPTODUCT BY TAKING ID FROM PARAMS
        dispatch(fetchproductById(productId));
    }, [productId, dispatch]);

    useEffect(() => {
        let tempVariantIndex = parseInt(queryParams.get('activeVariant') - 1);
        tempVariantIndex =
            tempVariantIndex < 0
                ? 0
                : tempVariantIndex >= product?.variations?.length
                ? 0
                : tempVariantIndex;
        setActiveVariant(tempVariantIndex);
    }, [product, queryParams]);
    //* ///////////////////// FUNCTIONS   ///////////////////////

    //! //////////////////RETURN////////////////////////

    return (
        <div className='details-main'>
            <FullLoader isLoading={isLoading} />
            {!isLoading && error && (
                <FullScreenErrorMessage message={error?.message} />
            )}
            {!isLoading && !error && product && (
                <>
                    <section className='showcase'>
                        <div className='navigator'>
                            <div className='container'>
                                {product?.variations[
                                    activeVariant
                                ]?.images?.map((image, index) => (
                                    <img
                                        className={
                                            activeImage === index
                                                ? 'active-nav-image'
                                                : ''
                                        }
                                        src={`${PRODCTS_IMAGE_URL}/${image}`}
                                        alt='product_img'
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='preview'>
                            {imageToBePreviewed && (
                                <img
                                    src={imageToBePreviewed}
                                    alt='product_image_preview'
                                />
                            )}
                        </div>
                    </section>
                    <section className='details'>
                        <div className='header'>
                            <h3>{product?.name}</h3>
                            <h4>Br {product?.price}</h4>
                            <p>134 reviews</p>
                        </div>
                        <div className='variants'>
                            <h3>Variants</h3>
                            <div className='variant-nav'>
                                {product?.variations?.map((variant, index) => (
                                    <p
                                        onClick={() =>
                                            handleChangeVariant(index)
                                        }
                                        className={
                                            activeVariant === index
                                                ? 'active'
                                                : ''
                                        }
                                        key={variant?._id}
                                    >
                                        {index + 1}
                                    </p>
                                ))}
                            </div>
                            <div className='attributes'>
                                {product?.variations[
                                    activeVariant
                                ]?.attributes?.map((attribute) => (
                                    <p key={attribute?._id}>
                                        <span>{attribute?.name}:</span>{' '}
                                        {attribute?.value}
                                    </p>
                                ))}
                                <p>
                                    <span>Price:</span> Br{' '}
                                    {product?.variations[activeVariant]?.price}
                                </p>
                                <p>
                                    <span>In Stock:</span>{' '}
                                    {
                                        product?.variations[activeVariant]
                                            ?.stockQuantity
                                    }
                                </p>
                            </div>
                            <CartOperations
                                type='button'
                                variationIndex={activeVariant}
                                productId={product?._id}
                            />
                            <WishlistOperations
                                type='button'
                                variationIndex={activeVariant}
                                productId={product?._id}
                            />

                            <div className='product-details'></div>
                        </div>
                        <div className='other-details'>
                            <h3>Product Info</h3>
                            <div className='attributes'>
                                <p>
                                    <span>Description: </span>
                                    {product?.description}
                                </p>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default ProductDetail;
