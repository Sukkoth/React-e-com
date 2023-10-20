import { useSelector, useDispatch } from 'react-redux';
import {
    addToWishList,
    removeFromWishList,
} from '../../features/WishList/wishlistService';

import {
    wishItemSelector,
    wishItemStatusSelector,
} from '../../features/WishList/wishListSlice';
import { ClipLoader, SyncLoader } from 'react-spinners';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const WishlistOperations = ({
    type = 'button',
    productId,
    variationIndex = 0,
    showLoader = true,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth.auth.token);
    const wishList = useSelector(wishItemSelector);
    const wishListItemLoading = useSelector(wishItemStatusSelector);

    const foundInWishList = wishList?.items.find(
        (item) =>
            item.product._id === productId &&
            item.variationIndex === variationIndex
    );

    const handleAddToWishList = () => {
        if (!auth) navigate('/login');

        if (!wishListItemLoading)
            !foundInWishList
                ? dispatch(
                      addToWishList({
                          product: productId,
                          variationIndex: variationIndex,
                      })
                  )
                : dispatch(removeFromWishList(foundInWishList?._id));
    };

    //* RETURN STATEMENT
    if (type === 'button') {
        return (
            <button
                onClick={handleAddToWishList}
                className={!foundInWishList ? 'add-wish' : 'removeItem'}
            >
                {wishListItemLoading && (
                    <SyncLoader size={5} style={{ padding: '0.001rem' }} />
                )}
                {!wishListItemLoading && !foundInWishList && (
                    <>
                        Add to Wishlist
                        <BsHeart />
                    </>
                )}
                {!wishListItemLoading && foundInWishList && (
                    <>
                        Remove from Wishlist <BsHeartFill />
                    </>
                )}
            </button>
        );
    } else {
        if (showLoader)
            return (
                <span>
                    {wishListItemLoading && <ClipLoader className='icons' />}
                    {!wishListItemLoading && !foundInWishList && (
                        <AiOutlineHeart
                            title={'Add to wishlist'}
                            className='icons'
                            onClick={handleAddToWishList}
                        />
                    )}
                    {!wishListItemLoading && foundInWishList && (
                        <AiFillHeart
                            className='icons'
                            title='Remove from wishlist'
                            onClick={handleAddToWishList}
                        />
                    )}
                </span>
            );
        else {
            return (
                <span>
                    {!foundInWishList && (
                        <AiOutlineHeart
                            title={'Add to wishlist'}
                            className='icons'
                            onClick={handleAddToWishList}
                        />
                    )}
                    {foundInWishList && (
                        <AiFillHeart
                            className='icons'
                            title='Remove from wishlist'
                            onClick={handleAddToWishList}
                        />
                    )}
                </span>
            );
        }
    }
};

WishlistOperations.propTypes = {
    productId: PropTypes.string,
    variationIndex: PropTypes.number,
    type: PropTypes.string,
};

export default WishlistOperations;
