import React from 'react'
import '../src/css/styles.css';

const Header = () => {
    return (
        <header>
            <nav className='header__nav'>
                <div className='header__logo'>
                    <h4>Sushiman</h4>
                    <div className='header__logo-overlay'></div>
                </div>

                <ul className='header__menu'>
                    <li>
                        <a href="#menu">Menu</a>
                    </li>
                    <li>
                        <a href="#food">Food</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#about-us">About Us</a>
                    </li>
                    <li>
                        <img src="src\assets\search.svg" alt="search" />
                    </li>
                </ul>

                <ul class="header__menu-mobile" data-aos="fade-down">
                    <li>
                        <img src="src\assets\menu.svg" alt="menu" />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;