import { useCallback, useEffect, useState } from 'react';
import icon from '../assets/icon-2.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaCartPlus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../features/Auth/authSlice';

const Nav = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(
        (state) => state.cart?.data?.data?.items?.length
    );

    const auth = useSelector((state) => state.auth.auth);

    const [showNavMenu, setShowNavMenu] = useState(false);

    const onScrollCloseNavMenu = useCallback(() => {
        if (showNavMenu) setShowNavMenu(false);
    }, [showNavMenu]);
    useEffect(() => {
        document.addEventListener('scroll', onScrollCloseNavMenu);
        return () =>
            document.removeEventListener('scroll', onScrollCloseNavMenu);
    }, [onScrollCloseNavMenu]);

    const handleLogout = () => {
        setShowNavMenu(false);
        location.href = '/';
        dispatch(logoutUser());
    };

    return (
        <nav className='nav'>
            <div className='logo-container'>
                <Link to={'/'}>
                    {' '}
                    <img src={icon} alt='icon' />
                </Link>
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
                        <Link to='https://gadisa.cyclic.cloud'>About</Link>
                    </li>

                    {!auth?.token ? (
                        <>
                            {' '}
                            <li>
                                <Link
                                    to='/register'
                                    onClick={() => setShowNavMenu(false)}
                                >
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/login'
                                    onClick={() => setShowNavMenu(false)}
                                >
                                    Login
                                </Link>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link onClick={handleLogout}>Logout</Link>
                        </li>
                    )}

                    {auth?.token && (
                        <>
                            <li>
                                <Link
                                    to='/orders'
                                    // className='cart-items'
                                    onClick={() => setShowNavMenu(false)}
                                >
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='/cart'
                                    // className='cart-items'
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
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
