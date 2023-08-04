import { useState } from 'react';
import icon from '../assets/icon-2.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaCartPlus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
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
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                    <li>
                        <Link to='/cart'>
                            <FaCartPlus /> Cart{' '}
                            <span className='cart-counter'>1</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
