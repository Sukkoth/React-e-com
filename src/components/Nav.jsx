import { useState } from 'react';
import icon from '../assets/icon-2.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaCartPlus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Nav = () => {
    const cartCount = useSelector(
        (state) => state.cart?.data?.data?.items?.length
    );
    const [showNavMenu, setShowNavMenu] = useState(false);
    return (
        <nav className='nav'>
            <div className='logo-container'>
                <img src={icon} alt='icon' />
            </div>
            <button
                className='nav-toggle'
                onClick={() => setShowNavMenu((curr) => !curr)}
            >
                {showNavMenu ? <FaTimes /> : <AiOutlineMenu />}
            </button>

            <div className={`nav-menu ${showNavMenu ? 'show-nav-menu' : ''}`}>
                <ul className='nav-list'>
                    <li>
                        <Link to='/' onClick={() => setShowNavMenu(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/products'
                            onClick={() => setShowNavMenu(false)}
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <a href='/' onClick={() => setShowNavMenu(false)}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='/' onClick={() => setShowNavMenu(false)}>
                            Contact
                        </a>
                    </li>
                    <li>
                        <Link
                            to='/cart'
                            className='cart-items'
                            onClick={() => setShowNavMenu(false)}
                        >
                            <FaCartPlus />
                            {cartCount > 0 && (
                                <span className='cart-counter'>
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
