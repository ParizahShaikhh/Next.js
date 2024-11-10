import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav id='header-bg'>
            <h1 id='nav-h' >Parizah.</h1>
            <div id='link-div'>
                <Link href="/" className="hover:underline" id='l-profile'>Profile</Link>
                <Link href="/about" id='l-about'>About</Link>
                <Link href="/skills" id='l-skills'>Skills</Link>
                <Link href="/projects" id='l-projects'>Projects</Link>
                <Link href="/experience" id='l-experience'>Experience</Link>
                <Link href="/contact" id='l-contact'>Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;
