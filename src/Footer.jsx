import React from 'react';

const Footer = () => {
    return (
        <footer className='footer flex-between'>
            <h3 className='footer__logo'>
                <span>Sushi</span>man
            </h3>

            <ul className='footer__nav'>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#food">Food</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about-us">About Us</a></li>
            </ul>

            <ul className='footer__social'>
                <li className='flex-center'>
                    <img src="src\assets\facebook.svg" alt="" />
                </li>
                <li className='flex-center'>
                    <img src="src\assets\instagram.svg" alt="" />
                </li>
                <li className='flex-center'>
                    <img src="src\assets\twitter.svg" alt="" />
                </li>
            </ul>

        </footer>
    );
}

export default Footer;