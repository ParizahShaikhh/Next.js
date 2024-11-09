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
    <section>
       <div className='w-full flex flex-col items-center justify-center h-full py-2 bg-[#1B262C] '>
     <Image src="/images/profile-pic.jpg" alt='Profile Picture' width={200} height={200} className='profile-pic border-[#0F4C75] border-[7px] rounded-full'/>
      <h1 className='text-4xl font-bold mb-4 reveal-text text-[#0F4C75]'>Hi, This is <span>P</span><span>a</span><span>r</span><span>i</span><span>z</span><span>a</span><span>h</span> <span>S</span><span>h</span><span>a</span><span>i</span><span>k</span><span>h</span></h1>
      <h2 className='text-4xl font-bold mb-4 text-[#0F4C75]'>Frontened Developer</h2>

      <p className='text-lg text-center max-w-md'>I am a web developer with a passion for creating clean, responsive, and user-friendly websites using TypeScript, Next.js, and Tailwind CSS.</p>

    </div>
</section>
<section>
       <About />
       <a href='/portfolio/src/app/about/page.tsx'>about</a>
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




