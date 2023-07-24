import './cartComponent.css';
import phone1 from '../assets/products/tv-1.jpg';
import { FaTimes } from 'react-icons/fa';
const CartComponent = () => {
    return (
        <>
            <h3>Your Cart</h3>
            <div className='cart-container'>
                <div className='cart-item'>
                    <p>Image</p>
                    <p>Unit Price</p>
                    <p>Quantity</p>
                    <p>Total Price</p>
                </div>

                <div className='cart-item'>
                    <img className='img' src={phone1} alt='product_img' />

                    <div className='price'>$67.00</div>
                    <div className='quantity'>
                        <div className='buttons'>
                            <button className='btn btn-sub'>-</button>
                            <button className='btn btn-qty'>12</button>
                            <button className='btn btn-add'>+</button>
                        </div>
                    </div>
                    <div className='total'>
                        120.00$
                        <span>
                            <FaTimes />
                        </span>
                    </div>
                </div>
                <div className='cart-item'>
                    <img className='img' src={phone1} alt='product_img' />

                    <div className='price'>$67.00</div>
                    <div className='quantity'>
                        <div className='buttons'>
                            <button className='btn btn-sub'>-</button>
                            <button className='btn btn-qty'>12</button>
                            <button className='btn btn-add'>+</button>
                        </div>
                    </div>
                    <div className='total'>
                        120.00$
                        <span>
                            <FaTimes />
                        </span>
                    </div>
                </div>
                <div className='cart-item'>
                    <img className='img' src={phone1} alt='product_img' />

                    <div className='price'>$67.00</div>
                    <div className='quantity'>
                        <div className='buttons'>
                            <button className='btn btn-sub'>-</button>
                            <button className='btn btn-qty'>12</button>
                            <button className='btn btn-add'>+</button>
                        </div>
                    </div>
                    <div className='total'>
                        120.00$
                        <span>
                            <FaTimes />
                        </span>
                    </div>
                </div>
                <div className='cart-item'>
                    <img className='img' src={phone1} alt='product_img' />

                    <div className='price'>$67.00</div>
                    <div className='quantity'>
                        <div className='buttons'>
                            <button className='btn btn-sub'>-</button>
                            <button className='btn btn-qty'>12</button>
                            <button className='btn btn-add'>+</button>
                        </div>
                    </div>
                    <div className='total'>
                        120.00$
                        <span>
                            <FaTimes />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartComponent;
