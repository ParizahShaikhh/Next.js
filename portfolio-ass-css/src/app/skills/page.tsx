import React from 'react';

const Skills: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-[#0F4C75] " id='skills-div'>
            <h1 className="text-4xl font-bold mb-6" id='skills-h'>Skills</h1>
            <p className="text-lg text-center max-w-md" id='skills-p'>
            My core skills include TypeScript, JavaScript, Next.js, and Tailwind CSS, with a focus on building clean, maintainable, and efficient code. I’m also proficient in responsive design, ensuring that websites are visually consistent across all devices. With each project, I aim to deepen my expertise and stay up-to-date with industry trends, incorporating modern libraries and tools for a better development experience.
            </p>
        </div>
    );
};

export default Skills;
