import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <p className="footer__text">
                    &copy; {new Date().getFullYear()} Harsh Shah. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;