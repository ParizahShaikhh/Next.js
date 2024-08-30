import React from 'react';

import NavBar from './NavBar';


const Profile: React.FC = () => {
  return (
    <>
        <NavBar />
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-4xl font-bold mb-4'>Hello, I'm Parizah Shaikh</h1>
      <p className='text-lg text-center max-w-md'>I am a web developer with a passion for creating clean, responsive, and user-friendly websites using TypeScript, Next.js, and Tailwind CSS.</p>
    </div>
    </>
  );
};

export default Profile;