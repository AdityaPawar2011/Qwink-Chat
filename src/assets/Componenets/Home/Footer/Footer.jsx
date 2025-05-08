import React from 'react';
import Logo from './../../../img/logo.svg';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

import './footer.css';
const Footer = () => {
    return (
        <div>
            <footer >
                <img src={Logo} alt="" className='logo'/>
                <ul className="nav-list">
                    <li><Link to="/termsAndConditions">Terms and conditions</Link></li>
                    <li><Link to="/privacyPolicy">Privacy policy</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/communityGuildlines">Community Guildlines</Link></li>
                </ul>
                <div className="social-media">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </footer>
            <div className="copyright">
                <p>&copy; 2025 QwinkChat. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
