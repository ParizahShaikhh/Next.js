import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue h-screen flex items-center justify-center">
    <main className="flex h-full max-w-screen flex-col items-center justify-between p-12">
      
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          
        </div>
     
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[100px]  before:-translate-x-1/2  before:bg-gradient-radial before:from-black before:to-black  before:content-[''] after:absolute after:-z-20 after:h-[1280px] after:w-full  after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0a0a0a] after:dark:opacity-40 sm:before:w-[2000px] sm:after:w-[240px] before:lg:h-[2000px] items-center ">
      
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-white-900 bg-gradient-to-b from-zinc-800 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-100/30 dark:from-inherit lg:relative lg:w-auto  lg:rounded-xl lg:border lg:bg-purple-900 lg:p-20 lg:dark:bg-zinc-800/30 font-extrabold text-5xl text-white">
          Hello World!



        </p>
      </div>

      <div className=" grid text-center   lg:grid-cols-4 lg:text-left">
        

        

        
      </div>
    </main>
    </div>
  );
}
