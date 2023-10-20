import { Link } from 'react-router-dom';
import './footer.css';
import { FaBriefcase, FaTelegram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <h2>Shop</h2>
            <div className='socials'>
                <a href='https://gadisa.cyclic.cloud/'>
                    <FaBriefcase />
                </a>
                <a href='https://t.me/sukkoth'>
                    <FaTelegram />
                </a>
                <a href='https://www.linkedin.com/in/gadisa-teklu-8020a991'>
                    <FaLinkedin />
                </a>
                <a href='https://twitter.com/suukoot'>
                    <FaTwitter />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
