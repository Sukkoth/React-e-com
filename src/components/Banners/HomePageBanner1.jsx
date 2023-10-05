import './banner-1.css';
import { FaArrowRight } from 'react-icons/fa';
import banner_cover from '../../assets/products/tablet-1.jpg';
const HomePageBanner1 = () => {
    return (
        <div className='home-banner'>
            <img src={banner_cover} alt='' />
            <div className='content'>
                <p>LIMITED OFFER</p>
                <h3>35% off only this friday and get special gift</h3>
                {/* <button className='btn'>
                    Grab it now <FaArrowRight className='icon' />
                </button> */}
            </div>
        </div>
    );
};

export default HomePageBanner1;
