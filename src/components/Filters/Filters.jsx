import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './filters.css';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesSelector } from '../../features/Categories/categoriesSlice';
import {
    changePage,
    fetchProducts,
    updateQueryCategories,
} from '../../features/Products/productSlice';
const Filters = () => {
    const queryOptions = useSelector(
        (state) => state?.products?.products?.queryOptions
    );
    const categories = useSelector(categoriesSelector);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState(
        queryOptions.categories || []
    );

    const dispatch = useDispatch();

    const handleCategory = (categoryId) => {
        selectedCategories.includes(categoryId)
            ? setSelectedCategories(
                  selectedCategories.filter(
                      (selected) => selected !== categoryId
                  )
              )
            : setSelectedCategories([...selectedCategories, categoryId]);
    };

    const handleFilterFormSubmit = (e) => {
        e.preventDefault();
        dispatch(updateQueryCategories(selectedCategories));
        dispatch(changePage(1));
        dispatch(fetchProducts());
    };

    const handleClearAllFilters = () => {
        dispatch(updateQueryCategories([]));
        dispatch(fetchProducts());
    };

    return (
        <div className='filters'>
            <h3
                className={`${showFilters ? 'activate-filters' : ''}`}
                onClick={() => setShowFilters((curr) => !curr)}
            >
                FILTERS
                <span className='toggleIcon'>
                    {!showFilters ? <FaChevronDown /> : <FaChevronUp />}
                </span>
            </h3>
            {showFilters && (
                <form className='form' onSubmit={handleFilterFormSubmit}>
                    <div className='filter'>
                        <h3>Categories</h3>
                        <ul>
                            {categories.map((category) => (
                                <li key={category?._id}>
                                    <input
                                        type='checkbox'
                                        name={category?.name}
                                        id={category?._id}
                                        className='filter-checkbox'
                                        onChange={() =>
                                            handleCategory(category?._id)
                                        }
                                        checked={selectedCategories.includes(
                                            category?._id
                                        )}
                                    />
                                    <label htmlFor={category?._id}>
                                        {category?.name}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <div className='filter'>
                        <h3>Price</h3>
                        <ul>
                            <li>
                                <input
                                    type='checkbox'
                                    name='household'
                                    id='household'
                                />
                                <label htmlFor='household'>0$ - 100$</label>
                            </li>
                            <li>
                                <input
                                    type='checkbox'
                                    name='household'
                                    id='household'
                                />
                                <label htmlFor='household'>100$ - 300$</label>
                            </li>
                            <li>
                                <input
                                    type='checkbox'
                                    name='household'
                                    id='household'
                                />
                                <label htmlFor='household'>300$ - 600$</label>
                            </li>
                            <li>
                                <input
                                    type='checkbox'
                                    name='household'
                                    id='household'
                                />
                                <label htmlFor='household'>$600 . . .</label>
                            </li>
                        </ul>
                    </div>
                    <div className='filter'>
                        <h3>Brand</h3>
                        <ul>
                            <li>
                                <input
                                    type='checkbox'
                                    name='household'
                                    id='household'
                                />
                                <label htmlFor='household'>HouseHold</label>
                            </li>
                            <li>
                                <input
                                    type='checkbox'
                                    name='household'
                                    id='household'
                                />
                                <label htmlFor='household'>Electronics</label>
                            </li>
                            <li>
                                <input
                                    type='checkbox'
                                    name='household'
                                    id='household'
                                />
                                <label htmlFor='household'>Clothes</label>
                            </li>
                            <li>
                                <input
                                    type='checkbox'
                                    name='household'
                                    id='household'
                                />
                                <label htmlFor='household'>Watches</label>
                            </li>
                        </ul>
                    </div> */}

                    <div className='submit'>
                        <button className='btn'>Apply</button>
                        <button
                            type='button'
                            onClick={handleClearAllFilters}
                            className='btn'
                            style={{
                                backgroundColor: '#c5c4c5',
                                boxShadow: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Filters;
