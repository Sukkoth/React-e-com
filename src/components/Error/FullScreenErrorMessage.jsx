import React from 'react';
import PropTypes from 'prop-types';
import './fullScreenErrorMessageStyle.css';

const FullScreenErrorMessage = ({ message }) => {
    return (
        <div className='error-container'>
            <h2 className='message'>{message}</h2>
        </div>
    );
};

FullScreenErrorMessage.defaultProps = {
    message: 'Error!',
};

FullScreenErrorMessage.propTypes = {
    message: PropTypes.string,
};

export default FullScreenErrorMessage;
