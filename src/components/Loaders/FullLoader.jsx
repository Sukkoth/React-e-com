import React from 'react';
import './FullLoader.css';
import { ScaleLoader } from 'react-spinners';

const FullLoader = ({ isLoading }) => {
    return (
        isLoading && (
            <div className='loader-container'>
                <ScaleLoader color='#5ba199' size={60} />
            </div>
        )
    );
};

export default FullLoader;
