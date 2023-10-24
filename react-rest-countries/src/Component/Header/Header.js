import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className='headerClass'>
                <a href="home">Home</a>
                <a href="shop">Shop</a>
                <a href="aboutUs">About us</a>
            </nav>
        </div>
    );
};

export default Header;