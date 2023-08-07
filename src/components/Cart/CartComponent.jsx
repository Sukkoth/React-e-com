import './cartComponent.css';
import phone1 from '../../assets/products/tv-1.jpg';
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
                            <button className='cart-button btn-sub'>-</button>
                            <button className='cart-button btn-qty'>12</button>
                            <button className='cart-button btn-add'>+</button>
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
                            <button className='cart-button btn-sub'>-</button>
                            <button className='cart-button btn-qty'>12</button>
                            <button className='cart-button btn-add'>+</button>
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

            <div className='cart-total'>
                <div className='total-item'>
                    <h3>Sub Total</h3>
                    <p>$100</p>
                </div>
                <div className='total-item'>
                    <label htmlFor='shippingCountry'>Region</label>
                    <select name='' id='shippingCountry'>
                        <option value='Oromia'>Oromia</option>
                        <option value='Amhara'>Amhara</option>
                        <option value='Gambella'>Gambella</option>
                        <option value='Somali'>Somali</option>
                        <option value='south'>South Region</option>
                        <option value='Sidama'>Sidama</option>
                        <option value='Tigrai'>Tigrai</option>
                    </select>
                </div>
                <div className='total-item'>
                    <label htmlFor='city'>City</label>
                    <select name='' id='city'>
                        <option value='Oromia'>Oromia</option>
                        <option value='Amhara'>Amhara</option>
                        <option value='Gambella'>Gambella</option>
                        <option value='Somali'>Somali</option>
                        <option value='south'>South Region</option>
                        <option value='Sidama'>Sidama</option>
                        <option value='Tigrai'>Tigrai</option>
                    </select>
                </div>
                <div className='total-item'>
                    <label htmlFor='phone'>Phone </label>
                    <input type='text' id='phone' />
                </div>
                <div className='total-item'>
                    <p>Shipment</p>
                    <p>$12</p>
                </div>

                <div className='total-item'>
                    <button className='btn'>Estimate Shipping</button>
                </div>
                <div className='total-item'>
                    <p>Grand Total</p>
                    <p>$120</p>
                </div>

                <div className='total-item'>
                    <button className='btn'>Checkout</button>
                </div>
            </div>
        </>
    );
};

export default CartComponent;
