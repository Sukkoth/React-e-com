import React, { useEffect, useState } from 'react';
import './productDetail.css';
import headphone from '../../assets/products/headphone-1.jpg';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { fetchproductById } from '../../features/Products/productSlice';
const staticImageUrl = 'http://localhost:8000/images/products';

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();

    const productData = useSelector((state) => state.products.product);
    const {
        data: { product },
    } = productData;

    const [activeVariant, setActiveVariant] = useState(0);
    const [activeImage, setActiveImage] = useState('');
    const handleChangeVariant = (index) => {
        setActiveVariant(index);
        setActiveImage(
            `${staticImageUrl}/${product?.variations[index]?.images[0]}`
        );
    };
    useEffect(() => {
        dispatch(fetchproductById(productId));
    }, [productId, dispatch]);
    return (
        <div className='details-main'>
            <section className='showcase'>
                <div className='navigator'>
                    <div className='container'>
                        {product?.variations[activeVariant]?.images?.map(
                            (image, index) => (
                                <img
                                    src={`${staticImageUrl}/${image}`}
                                    alt='product_img'
                                    key={index}
                                    onClick={() =>
                                        setActiveImage(
                                            `${staticImageUrl}/${image}`
                                        )
                                    }
                                />
                            )
                        )}
                    </div>
                </div>
                <div className='preview'>
                    <img src={activeImage} alt='product_image_preview' />
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
                                onClick={() => handleChangeVariant(index)}
                                className={
                                    activeVariant === index ? 'active' : ''
                                }
                                key={variant?._id}
                            >
                                {index + 1}
                            </p>
                        ))}
                    </div>
                    <div className='attributes'>
                        {product?.variations[activeVariant]?.attributes?.map(
                            (attribute) => (
                                <p key={attribute?._id}>
                                    <span>{attribute?.name}:</span>{' '}
                                    {attribute?.value}
                                </p>
                            )
                        )}
                        <p>
                            <span>Price:</span> Br{' '}
                            {product?.variations[activeVariant]?.price}
                        </p>
                        <p>
                            <span>In Stock:</span>{' '}
                            {product?.variations[activeVariant]?.stockQuantity}
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
                <div></div>
            </section>
        </div>
    );
};

export default ProductDetail;
