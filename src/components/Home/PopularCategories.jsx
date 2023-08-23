import headhphone from '../../assets/products/phone-2.jpg';
import { useSelector } from 'react-redux';
import {
    categoriesSelector,
    categoriesLoadingSelector,
    categoriesErrorSelector,
} from '../../features/Categories/categoriesSlice';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { PRODCTS_IMAGE_URL } from '../../config/env';

const PopularCategories = () => {
    const categories = useSelector(categoriesSelector);
    const categoriesLoading = useSelector(categoriesLoadingSelector);
    const categoriesError = useSelector(categoriesErrorSelector);
    const topCategories = categories
        ?.slice()
        .sort((a, b) => b?.productsCount - a?.productsCount)
        .slice(0, 6);
    console.log('url', categories[1]?.imageUrl[0]);
    return (
        <div className='popular-categories'>
            <h4 className='title'> Popular Categories</h4>
            {categoriesLoading && <ScaleLoader />}
            {!categoriesLoading &&
                topCategories?.map((category) => (
                    <div className='category' key={category?._id}>
                        <div className='img-container'>
                            <img
                                src={
                                    category?.imageUrl[0]
                                        ? `${PRODCTS_IMAGE_URL}/${category?.imageUrl[0]}`
                                        : headhphone
                                }
                                alt='category_img'
                            />
                        </div>
                        <div className='details'>
                            <h3>{category?.name}</h3>
                            <p>{category?.productsCount} Items</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PopularCategories;
