import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="h-screen bg-orange-300">
      {/* home */}
      <div
        className="bg-green-200 h-full flex bg-cover bg-center text-center pr-3 pl-3 sm:pl-20 sm:pr-20 md:left-20 md:pr-40 lg:pl-40 lg:pr-80"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="flex flex-col items-center  ">
          <img
            src="/andres5.png"
            //voltear imagen
            style={{ transform: "scalex(-1)" }}
            className=" w-40 rounded-full pt-10 pb-5 sm:w-60 sm:pt-40  md:pt-40 md:left-40"
          />
          <h1 className="text-[20px] text-white font-semibold lg:text-[40px]">
            Andres Yepez
          </h1>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-50 text-[30px] font-bold pb-3 lg:text-[50px]">
            Sofware develoment
          </h2>
          <p className="text-white pb-5 lg:text-[20px] lg:pb-10">
            Passionate and highly motivated in the field of software
            development, knowledge of Html, Css, JavaScript, TypeScript, React,
            Next.js, Node.js, Mongo, Express, SQL,Tailwind, Git, GitHub and
            Agile Methodologies.
          </p>
          <div className="text-white flex flex-wrap text-center justify-center gap-5  md:flex-row lg:justify-end">
            <Link
              href="/nav"
              className="bg-blue-500 w-40 py-1 px-3 rounded-xl hover:bg-blue-400 lg:w-60 lg:py-3 lg:px-5"
            >
              Studies
            </Link>
            <Link
              href="/"
              className="bg-blue-500 w-40 py-1 px-3 rounded-xl hover:bg-blue-400 lg:w-60 lg:py-3 lg:px-5"
            >
              Experience
            </Link>
            <Link
              href="/"
              className="bg-blue-500 w-40 rounded-xl py-1 px-3 hover:bg-blue-400 lg:w-60 lg:py-3 lg:px-5"
            >
              Projects
            </Link>
            <Link
              href="/"
              className="bg-blue-500 w-40 py-1 px-3 rounded-xl hover:bg-blue-400 lg:w-60 lg:py-3 lg:px-5" 
            >
              Contact 
            </Link>
          </div>
        </div>
      </div>
      {/* images, flip */}
      {/* <div>
        <img
          src="/stars.png"
          alt="cliff"
          height={1500}
          width={1500}
          className="absolute top-0 left-0"
        />
        <img
          src="/cliff.webp"
          alt="cliff"
          height={480}
          width={350}
          className="lg:absolute md:bottom-0 md:right-0 "
        />

        <img
          src="/trees.webp"
          alt="trees"
          height={2000}
          width={2000}
          className="md:absolute bottom-20 right-0 w-full lg:hidden "
        />
      </div> */}
    </main>
  );
}
