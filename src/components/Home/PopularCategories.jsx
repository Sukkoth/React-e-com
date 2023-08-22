import headhphone from '../../assets/products/phone-2.jpg';
import { useSelector } from 'react-redux';
import { categoriesSelector } from '../../features/Categories/categoriesSlice';

const PopularCategories = () => {
    const categories = useSelector(categoriesSelector);
    const topCategories = categories
        ?.slice()
        .sort((a, b) => b?.productsCount - a?.productsCount)
        .slice(0, 6);

    return (
        <div className='popular-categories'>
            <h4 className='title'> Popular Categories</h4>
            {topCategories?.map((category) => (
                <div className='category' key={category?._id}>
                    <div className='img-container'>
                        <img src={headhphone} alt='category_img' />
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
