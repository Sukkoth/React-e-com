import FeaturedProducts from './FeaturedProducts';
import './homeComponent.css';
import Intro from './Intro';

const HomeComponent = () => {
    return (
        <main className='home-main'>
            <Intro />
            <FeaturedProducts />
        </main>
    );
};

export default HomeComponent;
