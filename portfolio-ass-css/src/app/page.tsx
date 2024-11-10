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
      <section id='body'>
        <Image 
          src="/images/profile-pic.jpg" 
          alt="Profile Picture" 
          width={200} 
          height={200} 
           id='pro-pic'
        />
        <h1 id='name-h1'>
          Parizah Shaikh
        </h1>
        <h2 id='title'>Frontend Developer</h2>
        <p id='intro'>
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
