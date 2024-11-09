import React from 'react';
import Image from 'next/image';

import Service from './services/page';
import About from './about/page';
import Contact from './contact/page';
import Experience from './experience/page';
import Project from './projects/page';
import Skills from './skills/page';

const Profile: React.FC = () => {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center h-full py-8 bg-[#1B262C]">
        <Image 
          src="/images/profile-pic.jpg" 
          alt="Profile Picture" 
          width={200} 
          height={200} 
          className="border-[#0F4C75] border-4 rounded-full" 
        />
        <h1 className="text-4xl font-bold mb-4 text-[#0F4C75] reveal-text">
          Hi, This is Parizah Shaikh
        </h1>
        <h2 className="text-2xl font-semibold mb-4 text-[#0F4C75]">Frontend Developer</h2>
        <p className="text-lg text-center max-w-md text-gray-200">
          I am a web developer with a passion for creating clean, responsive, and user-friendly websites using TypeScript, Next.js, and Tailwind CSS.
        </p>
      </section>

      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Service />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
};

export default Profile;
