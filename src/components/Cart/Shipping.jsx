import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateShippingPrice } from '../../features/Cart/cartSlice';

const Shipping = () => {
    const dispatch = useDispatch();
    const shipmentPrice = useSelector((state) => state.cart?.shipmentPrice);
    const [country, setCountry] = useState('');
    const [subCity, setSubCity] = useState('');
    const [city, setCity] = useState('');

    function estimateShipping() {
        if (!country || !subCity || !city) {
            return;
        }
        dispatch(calculateShippingPrice({ country, subCity, city }));
    }

    return (
        <>
            <div className='total-item'>
                <label htmlFor='phone'>Country </label>
                <input
                    type='text'
                    id='country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </div>
            <div className='total-item'>
                <label htmlFor='phone'>City </label>
                <input
                    type='text'
                    id='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className='total-item'>
                <label htmlFor='phone'>Sub City </label>
                <input
                    type='text'
                    id='subCity'
                    value={subCity}
                    onChange={(e) => setSubCity(e.target.value)}
                />
            </div>
            <div className='total-item'>
                <h3>Shipment</h3>
                <h3>${shipmentPrice}</h3>
            </div>

            <div className='total-item'>
                <button
                    className={`btn ${
                        (!country || !subCity || !city) && 'disabled-btn'
                    }`}
                    disabled={!country || !subCity || !city}
                    onClick={estimateShipping}
                >
                    Estimate Shipping
                </button>
            </div>
        </>
    );
};

export default Shipping;
