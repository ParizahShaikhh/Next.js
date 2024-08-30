import React from  'react';
import Link from 'next/link';


const NavBar: React.FC = () => {
    return (
        <nav className = 'flex justify-center space-x-4 py-4 bg-gray-800 text-white'>
            <Link href='/' className='hover:underline'>Profile</Link>
            <Link href='/about' className='hover:underline'>About</Link>
            <Link href='/contact' className='hover:underline'>Contact</Link>
        </nav>
    );
};

export default NavBar;