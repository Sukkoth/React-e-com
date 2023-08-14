import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './filters.css';

const Filters = () => {
    const [showFilters, setShowFilters] = useState(true);

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
                <form className='form'>
                    <div className='filter'>
                        <h3>Categories</h3>
                        <ul>
                            <li>
                                <input
                                    type='checkbox'
                                    name='household'
                                    id='household'
                                    className='filter-checkbox'
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
                    </div>
                    <div className='filter'>
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
                    </div>
                    <div className='filter'>
                        <h3>Colors</h3>
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
                    </div>

                    <div className='submit'>
                        <button className='btn '>Apply</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Filters;
