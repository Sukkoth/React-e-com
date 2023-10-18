import { useDispatch, useSelector } from 'react-redux';
import './wishList.styles.css';
import ProductsList from '../Product/ProductsList';
import { useEffect } from 'react';
import { getWishList } from '../../features/WishList/wishListSlice';
import FullLoader from '../Loaders/FullLoader';
import Card from '../../components/MessageCard/Card';

const WishList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWishList());
    }, [dispatch]);

    const { isLoading, error, data } = useSelector((state) => state.wishlist);
    let products = { data: { products: [] } };

    products['data']['products'] = data?.wishList?.items?.map(
        (item) => item?.product
    );

    console.log(products);
    if (isLoading) {
        return <FullLoader isLoading={isLoading} />;
    }

    return data?.wishList?.items?.length ? (
        <Card />
    ) : (
        <div className='wishlist-page'>
            <ProductsList products={products} />
        </div>
    );
};

export default WishList;
