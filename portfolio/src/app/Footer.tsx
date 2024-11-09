import React from 'react';



const Footer: React.FC = () => {
    return (
        <footer className="flex justify-center bg-[#bbe1fa] text-blue-700 ">
        <p>&copy; {new Date().getFullYear()} Parizah Shaikh. All Rights Reserved.</p>
        </footer>
    );
};


export default Footer;