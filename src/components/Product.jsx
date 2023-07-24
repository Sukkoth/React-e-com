import {
    FaCartPlus,
    FaGlasses,
    FaMoneyBill,
    FaMoneyBillAlt,
    FaTag,
} from 'react-icons/fa';
import phone1 from '../assets/products/phone-2.jpg';

const Product = () => {
    return (
        <div className='product'>
            <img src={phone1} alt='product image' className='img' />

            <div className='product-body'>
                <h4>
                    Product Name
                    <span className='cart cart-active'>
                        <FaCartPlus />
                    </span>
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consec thems elit. Repellendus
                    Lorem, ipsum dolor.
                </p>
                <div className='more-info'>
                    <p className='price'>
                        Price:
                        <span className='discount'>$12</span>
                        <span>$5</span>
                    </p>
                    <span className='view-button'>
                        <button className='btn'>
                            <FaGlasses />
                            View
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Product;
