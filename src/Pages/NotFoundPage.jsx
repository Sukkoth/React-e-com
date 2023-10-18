import React from 'react';
import Card from '../components/MessageCard/Card';
import notFoundPageIcon from '../assets/404.png';

const NotFoundPage = () => {
    return (
        <div style={{ marginTop: '10rem' }}>
            <Card
                header='404 | Not Found'
                text='The page you are looking for is not found'
                btnText='Homepage'
                link='/'
                image={notFoundPageIcon}
                backgroundColor={'rgba(250, 52, 52, 0.349)'}
            />
        </div>
    );
};

export default NotFoundPage;
