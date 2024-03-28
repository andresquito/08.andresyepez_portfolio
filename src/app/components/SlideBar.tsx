import React from "react";
import { FaCode, FaTools } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

// import resumePDF from "../components/resume.pdf"

const SlideBar = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaHome size={30} className="cursor-pointer " /> Home
        </>
      ),
      href: "https://linkedin.com/in/ricardo-andrés-yépez-valenzuela-661915263",
    },
    {
      id: 2,
      child: (
        <>
           <FaBookOpenReader size={30}  className="cursor-pointer "/> Studies
        </>
      ),
      href: "https://github.com/andresquito",
    },
    {
      id: 3,
      child: (
        <>
           <FaTools size={30} className="cursor-pointer " />Experience
        </>
      ),
      href: "mailto:ricardoandres1@hotmail.com",
    },
    {
      id: 4,
      child: (
        <>
           <FaCode size={30} />Projects
        </>
      ),
      href: "/",
      style: "rounded-br-md",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
           <MdMarkEmailUnread  size={30} />Contact
        </>
      ),
      href: "/",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex left-5  items-left  justify-evenly fixed top-2 p-4 flex-col">
      {links.map(({ id, child, href, style, download }) => (
        <div key={id} className={"right-0 mt-4 flex duration-300 hover:mr-4 "}>
          <a
            href={href}
            className="flex justify-between items-center w-full
         text-white"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SlideBar;