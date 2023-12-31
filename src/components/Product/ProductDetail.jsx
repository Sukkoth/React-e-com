import { useEffect, useState } from 'react';
import './productDetail.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { fetchproductById } from '../../features/Products/productSlice';
const staticImageUrl = 'http://localhost:8000/images/products';

const ProductDetail = () => {
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
    ////////////////////Drived states////////////////////////

    const imageToBePreviewed = `${staticImageUrl}/${product?.variations[activeVariant]?.images[activeImage]}`;

    //* ///////////////////// EFFECTS   ///////////////////////

    useEffect(() => {
        //*FETCH A RPTODUCT BY TAKING ID FROM PARAMS
        dispatch(fetchproductById(productId));
    }, [productId, dispatch]);

    //! //////////////////RETURN////////////////////////

    return (
        <div className='details-main'>
            {isLoading && <h3>Loading . . .</h3>}
            {!isLoading && error && (
                <h3 className='error-message'>ERROR! {error?.message}</h3>
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
                                        src={`${staticImageUrl}/${image}`}
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
                            <button className='add-cart'>
                                Add to cart <FaCartPlus />
                            </button>
                            <button className='add-wish'>
                                Add to Wishlist <FaHeart />
                            </button>

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
