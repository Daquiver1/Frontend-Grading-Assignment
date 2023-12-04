import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-4 text-center">
            &copy; {new Date().getFullYear()}  MissingGrade ,All rights reserved.
        </footer>
    );
};

export default Footer;


