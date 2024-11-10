import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-[#0F4C75] text-white font-bold py-3 flex items-center space-x-6 justify-center">
            <h1 className="text-lg underline font-extrabold ">Parizah.</h1>
            <div className="flex space-x-4">
                <Link href="/" className="hover:underline">Profile</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/skills" className="hover:underline">Skills</Link>
                <Link href="/projects" className="hover:underline">Projects</Link>
                <Link href="/experience" className="hover:underline">Experience</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;
