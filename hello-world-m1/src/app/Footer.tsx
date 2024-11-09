import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-center absolute bg-[#00adb5] text-white-700 mb-[10px] mt-[650px] w-full">
        <p>&copy; {new Date().getFullYear()} Parizah Shaikh. All Rights Reserved.</p>
        </footer>
    );
};


export default Footer;