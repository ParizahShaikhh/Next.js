import React from 'react';

import NavBar from '../NavBar';

const About: React.FC = () => {
    return (
        <>
        <NavBar />
        <div className='flex flex-col items-center justify-center min-h-screen py-2'><h1 className='text-4xl font-bold mb-4'>About Me</h1>
        <p className='text-lg text-center max-w-md'>
            I'm a passionate developer with a keen interest in TypeScript, Next.js, and Tailwind CSS. I love solving problems and building projects that make a difference.</p>
            </div>
            </>
    );
};


export default About;