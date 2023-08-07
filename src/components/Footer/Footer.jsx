import './footer.css';
import { FaFacebook, FaTelegram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <h2>E-shop</h2>
            <div className='socials'>
                <FaFacebook />
                <FaTelegram />
                <FaLinkedin />
            </div>
        </footer>
    );
};

export default Footer;
