"use client";
import SlideBar from "./components/SlideBar";

export default function Home() {
  return (
    <>
      <SlideBar />
      <main className="h-screen bg-orange-300">
        {/* home */}
        <div
          className="bg-green-200 h-full flex text-right bg-cover bg-center  pr-10 pl-10 sm:pl-20 sm:pr-20 md:left-20 md:pr-40 lg:pl-40 lg:pr-80"
          style={{ backgroundImage: "url(/main-bg.webp)" }}
        >
          <div className="flex flex-col ">
            <div className="pl-80">
            <img
              src="/andres5.png"
              //voltear imagen
              // style={{ transform: "scalex(-1)" }}
              className=" w-40  rounded-full pt-20 pb-5 sm:w-60 sm:pt-40  md:pt-40 md:left-40"
            />
            </div>

            <h1 className="text-[20px] text-white font-semibold lg:text-[40px]">
              Andrés Yépez
            </h1>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-50 text-[30px] font-bold pb-3 lg:text-[50px]">
              Sofware developer
            </h2>
            <p className="text-white pb-5 lg:text-[20px] lg:pb-10">
              Passionate and highly motivated in the field of software
              development, knowledge of Html, Css, JavaScript, TypeScript,
              React, Next.js, Node.js, Mongo, Express, SQL,Tailwind, Git, GitHub
              and Agile Methodologies.
            </p>

          </div>
        </div>
      </main>
    </>
  );
}
