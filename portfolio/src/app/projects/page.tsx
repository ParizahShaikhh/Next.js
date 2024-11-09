import React from 'react';

const Project: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-[#0F4C75]">
            <h1 className="text-4xl font-bold mb-6">Projects</h1>
            <p className="text-lg text-center max-w-md">
            I believe that the best way to learn is by doing, which is why I dedicate time to building projects that challenge me to think creatively and solve real-world problems. My portfolio includes a variety of projects, from personal passion projects to team-based collaborations, showcasing my skills in front-end development, UI/UX design, and responsive layouts. These projects represent my commitment to continuous improvement and my drive to make a meaningful impact through code.
            </p>
            <button type='submit' className=' bg-[#00adb5] rounded  p-[10px]  w-[200px] mt-[20px]'>
  <a href='https://github.com/ParizahShaikhh' target='_blank' rel='noopener noreferrer'>GitHub</a>
</button>

        </div>
    );
};

export default Project;
