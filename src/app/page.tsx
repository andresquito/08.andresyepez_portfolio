"use client";
import SlideBar from "./components/SlideBar";

export default function Home() {
  return (
    <>
      <SlideBar />
      <main className="h-screen ">
        {/* home */}
        <div
          className="h-full flex text-right bg-cover bg-center  pr-10 pl-10 sm:items-center sm:pl-20 sm:pr-20 md:left-20 md:pr-40 lg:pl-40 lg:pr-80 lg:text-center "
          style={{ backgroundImage: "url(/main-bg.webp)" }}
        >
          <div className="flex flex-col  w-full items-end xl:items-center md:items-center sm:items-center  ">

              <img
                src="/andres5.png"
                //voltear imagen
                // style={{ transform: "scalex(-1)" }}
                className=" w-40  rounded-full pt-40 pb-5 sm:w-60 sm:pt-0  md:pt-0 md:left-40 lg:pt-0 "
              />


            <h1 className="text-[20px] text-white font-semibold lg:text-[40px] ">
              Andrés Yépez
            </h1>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-50 text-[30px] font-bold pb-5 lg:text-[50px]">
              Sofware developer
            </h2>
            <p className="text-white pb-5  lg:text-[20px] lg:pb-10 md:text-center ">
              Motivated in software development. <br/>I work with HTML, CSS,
              JavaScript, TypeScript, React, Next.js, SQL, Tailwind, Git and
              GitHub.
            </p>
          </div>

        </div>
        {/*image*/}  
        <div>
          <img 
          src="/stars.png" 
          alt="stars" 
          height={300}
          width={300}
          className="absolute top-20 right-0 z-[10] "
          />          
        </div>    
      </main>
    </>
  );
}
