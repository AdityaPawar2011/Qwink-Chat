import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../../img/logo.svg';
import './Header.css';
import { IoIosSearch } from "react-icons/io";
import LoginModal from '../../SignupModal/LoginModal';
import { AuthContext } from '../../../../contexts/AuthContext';

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const { isLoggedIn, userId, setIsLoggedIn } = useContext(AuthContext);

    return (
        <>
            <div className='header'>
                <Link to="/"><img src={Logo} alt="QwinkChat Logo" className='logo' /></Link>
                <div className="navbar">
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/support">Support</Link></li>
                    </ul>
                    <div className="btns">
                        <IoIosSearch className='search-icon' />
                        <div className="vr-line"></div>
                        <p>User Logged In: {isLoggedIn ? 'Yes' : 'No'}</p>
      {isLoggedIn && <p>User ID: {userId}</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
                    </div>
                </div>
            </div>

            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        </>
    );
};

export default Header;
