import HomePageBanner1 from '../Banners/HomePageBanner1';
import FeaturedProducts from './FeaturedProducts';
import './homeComponent.css';
import Intro from './Intro';

const HomeComponent = () => {
    return (
        <main className='home-main'>
            <Intro />
            <FeaturedProducts />
            <HomePageBanner1 />
        </main>
    );
};

export default HomeComponent;
