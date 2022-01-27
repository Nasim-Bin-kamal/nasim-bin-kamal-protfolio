import React from 'react';
import './Footer.css';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <div className="footer py-2 mx-auto">
            <ScrollToTop smooth color="#fc5a03" />
            <p className="mx-auto  mb-0 px-2 py-4 text-center text-white fw-light">&copy; 2021 || All rights reserved by Nasim Bin Kamal</p>
        </div>
    );
};

export default Footer;