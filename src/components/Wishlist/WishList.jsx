import { useDispatch, useSelector } from 'react-redux';
import './wishList.styles.css';
import ProductsList from '../Product/ProductsList';
import { useEffect } from 'react';
import { getWishList } from '../../features/WishList/wishlistService';
import FullLoader from '../Loaders/FullLoader';
import Card from '../../components/MessageCard/Card';
import emptyWishlistIcon from '../../assets/empty-wishlist.png';
import FullScreenErrorMessage from '../Error/FullScreenErrorMessage';

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

    if (isLoading) {
        return <FullLoader isLoading={isLoading} />;
    }

    if (!isLoading && error) {
        return (
            <div className='wishlist-page'>
                <FullScreenErrorMessage error={error} />;
            </div>
        );
    }

    return data?.wishList?.items?.length ? (
        <div className='wishlist-page'>
            <ProductsList products={products} />
        </div>
    ) : (
        <div className='wishlist-page'>
            <Card
                header='Empty List'
                btnText='Products'
                link='/products'
                text='Your wishlist is empty, try adding some products'
                image={emptyWishlistIcon}
            />
        </div>
    );
};

export default WishList;
