import React from 'react';

import NavBar from '../NavBar';



const Contact: React.FC = () => {
    return (
        <>
        <NavBar />
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1 className='text-4xl font-bold mb-4'>Contact Me</h1>
            <p className='text-lg text-center max-w-md'>
                Feel free to reach out to me at <a href='mailto:parivian6@gmail.com' className='text-blue-500 underline'>parivian6@gmail.com</a> .
            </p>
        </div>
        </>
    );
};

export default Contact;