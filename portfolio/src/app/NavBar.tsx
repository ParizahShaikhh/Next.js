import React from  'react';
import Link from 'next/link';


const NavBar: React.FC = () => {
    return (
        <>
        <nav className = 'pr-[550px] font-extrabold pt-[20px] space-x-4 py-3 bg-[#0F4C75] text-white'>
            <h1 className='flex pr-[550px] font-extrabold pt-[20px]'>Parizah.</h1>
            <Link href='/' className='hover:underline pl-[160px]'>Profile</Link>
            <Link href='/about' className='hover:underline'>About</Link>
            <Link href='/skills' className='hover:underline'>Skills</Link>
            <Link href='/projects' className='hover:underline'>Projects</Link>
            <Link href='/experience' className='hover:underline'>Experience</Link>
            <Link href='/contact' className='hover:underline'>Contact</Link>
        </nav>
        </>
    );
};

export default NavBar;