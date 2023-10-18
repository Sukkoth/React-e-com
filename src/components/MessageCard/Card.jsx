import './card.styles.css';
import cartEmptyImage from '../../assets/empty-cart.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ header, text, image, link, btnText }) => {
    return (
        <div className='info-card'>
            <div className='card'>
                <div className='img-container'>
                    <img src={image} alt='cart-empty-img' />
                </div>
                <h1>{header}</h1>
                <p>{text}</p>
                <Link to={link}>{btnText}</Link>
            </div>
        </div>
    );
};

Card.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    btnText: PropTypes.string,
};

Card.defaultProps = {
    header: 'Header',
    text: 'This is a default text displayed on the card',
    image: cartEmptyImage,
    link: '/',
    btnText: 'Button',
};

export default Card;
