"use client";
import { useState } from 'react';
import Footer from "./Footer";


export default function HomePage() {
  const languages = ["Hello World", "Hola Mundo", "Bonjour le Monde"];
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  const handleChangeLanguage = () => {
    setCurrentLanguageIndex((currentLanguageIndex + 1) % languages.length);
  };

  

  return (
    <div className='flex items-center justify-center bg-slate-100 h-screen '>
      <div className='font-extrabold bg-gray-300 p-[20px] rounded m-[30%] w-[150px] mt-[10%] text-[#00adb5]'>{languages[currentLanguageIndex]}</div>
      <button onClick={handleChangeLanguage} className='bg-[#00adb5] rounded  p-[10px]  w-[200px] absolute'>Switch Language</button>
      <Footer />
    </div>
   
  );
};
