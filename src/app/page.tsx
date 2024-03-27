import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="h-screen bg-orange-300">
      {/* home */}
      <div
        className="bg-green-200 h-full flex bg-cover bg-center pr-3 pl-3 md:pl-20 md:pr-40 lg:pl-40 lg:pr-80"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="flex flex-col  ">
          <img
            src="/andres5.png"
            //voltear imagen
            style={{ transform: "scalex(-1)" }}
            className="left-20 w-40 rounded-full md:pt-40 md:left-40"
          />
          <h1 className="text-[40px] text-white font-semibold ">
            Andres Yepez
          </h1>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-50 text-[40px] font-bold pb-3">
            Sofware develoment
          </h2>
          <p className="text-white pb-3">
            Passionate and highly motivated in the field of software
            development, knowledge of Html, Css, JavaScript, TypeScript, React,
            Next.js, Node.js, Mongo, Express, SQL,Tailwind, Git, GitHub and
            Agile Methodologies.
          </p>
          <div className="text-white flex flex-wrap text-center gap-5  md:flex-row">
            <Link
              href="/nav"
              className="bg-blue-500 w-40 py-3 px-5 rounded-2xl hover:bg-blue-400"
            >
              Studies
            </Link>
            <Link
              href="/"
              className="bg-blue-500 w-40 py-3 px-5 rounded-2xl hover:bg-blue-400"
            >
              Experience
            </Link>
            <Link
              href="/"
              className="bg-blue-500 w-40 rounded-2xl py-3 px-5 hover:bg-blue-400"
            >
              My projects
            </Link>
            <Link
              href="/"
              className="bg-blue-500 w-40 py-3 px-5 rounded-2xl hover:bg-blue-400"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
      {/* images, flip */}
      <div>
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
      </div>
    </main>
  );
}
