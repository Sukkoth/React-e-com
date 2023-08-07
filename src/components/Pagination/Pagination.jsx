import PropTypes from 'prop-types';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import './pagination.css';
const Pagination = ({
    page = 6,
    totalResults = 100,
    pageSize = 10,
    handlePageChange,
}) => {
    if (totalResults === 0) return;
    return (
        <div className='pagination'>
            {/* Prev page */}
            {page !== 1 && (
                <button
                    className='pagination-btn'
                    onClick={() => handlePageChange(page - 1)}
                >
                    <FaChevronLeft />
                </button>
            )}

            {/* first page */}
            {page !== 0 && page > 2 && (
                <>
                    <button
                        className='pagination-btn'
                        onClick={() => handlePageChange(1)}
                    >
                        1
                    </button>
                    <button className='pagination-btn' disabled={true}>
                        ...
                    </button>
                </>
            )}

            {/* PREV PAGE NUMBER */}
            {page > 1 && (
                <button
                    className='pagination-btn'
                    onClick={() => handlePageChange(page - 1)}
                >
                    {page - 1}
                </button>
            )}

            {/* NEXT PAGE NUMBER */}
            <button className='pagination-btn active'>{page}</button>
            {page < parseInt(totalResults / pageSize) && (
                <button
                    className='pagination-btn'
                    onClick={() => handlePageChange(page + 1)}
                >
                    {page + 1}
                </button>
            )}

            {/* LAST PAGE */}
            {page + 1 < parseInt(totalResults / pageSize) && (
                <>
                    <button className='pagination-btn' disabled={true}>
                        ...
                    </button>
                    <button
                        className='pagination-btn'
                        onClick={() =>
                            handlePageChange(parseInt(totalResults / pageSize))
                        }
                    >
                        {parseInt(totalResults / pageSize)}
                    </button>
                </>
            )}

            {/* NEXT PAGE  */}
            {page < parseInt(totalResults / pageSize) && (
                <button
                    className='pagination-btn'
                    onClick={() => handlePageChange(page + 1)}
                >
                    <FaChevronRight />
                </button>
            )}
        </div>
    );
};

Pagination.propTypes = {
    page: PropTypes.number,
    totalResults: PropTypes.number,
    pageSize: PropTypes.number,
    handlePageChange: PropTypes.func,
};

export default Pagination;
