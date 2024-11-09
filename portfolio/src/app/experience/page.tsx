import React from 'react';

const Experience: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-[#0F4C75]">
            <h1 className="text-4xl font-bold mb-6">Experience</h1>
            <p className="text-lg text-center max-w-md">
            Throughout my journey as a developer, I have worked on various projects, ranging from interactive single-page applications to full-scale websites. My experience includes collaborating with teams, adhering to project timelines, and implementing client feedback to ensure each project aligns with business goals. Each role has contributed to my growth, teaching me effective time management, communication, and the importance of meticulous attention to detail.
            </p>
            <button type='submit' className=' bg-[#00adb5] rounded  p-[10px]  w-[200px] mt-[20px]'>
            <a href='https://www.linkedin.com/in/parizah-shaikh/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
</button>
        </div>
    );
};

export default Experience;
