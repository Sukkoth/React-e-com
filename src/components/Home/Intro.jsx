import './intro.css';
import { PiMaskHappyLight } from 'react-icons/pi';
import { CiBadgeDollar } from 'react-icons/ci';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { LiaShippingFastSolid } from 'react-icons/lia';
import headhphone from '../../assets/products/phone-2.jpg';
import PopularCategories from './PopularCategories';
const Intro = () => {
    return (
        <>
            <div className='home-intro'>
                <div className='text'>
                    <h3>Discover Your Style, Shop with Confidence</h3>
                    <p>
                        From timeless classics to the latest trends, find pieces
                        that resonate with your personality.
                    </p>
                </div>
                <div className='features'>
                    <div className='feature'>
                        <CiBadgeDollar className='icon' />
                        <h4>Original Products</h4>
                        <p>
                            Shop confidently with authentic products and our
                            money-back guarantee.
                        </p>
                    </div>
                    <div className='feature'>
                        <PiMaskHappyLight className='icon' />
                        <h4>Satisfaction Guaranteed</h4>
                        <p>
                            Your happiness is our priority; our support team
                            ensures satisfaction.
                        </p>
                    </div>
                    <div className='feature'>
                        <RiSecurePaymentFill className='icon' />
                        <h4>Secure Shopping</h4>
                        <p>
                            Experience secure shopping with advanced measures
                            for your peace of mind.
                        </p>
                    </div>
                    <div className='feature'>
                        <LiaShippingFastSolid className='icon' />
                        <h4>Fast and Reliable Shipping</h4>
                        <p>
                            Speedy, reliable shipping; track your order every
                            step of the way.
                        </p>
                    </div>
                </div>
            </div>
            <PopularCategories />
        </>
    );
};

export default Intro;
