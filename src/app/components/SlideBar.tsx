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
          <FaHome size={25} className="cursor-pointer" /> Home
        </>
      ),
      href: "/",
    },
    {
      id: 2,
      child: (
        <>
           <FaBookOpenReader size={25}  className="cursor-pointer "/> Studies
        </>
      ),
      href: "/studies",
    },
    {
      id: 3,
      child: (
        <>
           <FaTools size={25} className="cursor-pointer " />Skills
        </>
      ),
      href: "/",
    },
    {
      id: 4,
      child: (
        <>
           <FaCode size={25} />Projects
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
           <MdMarkEmailUnread  size={25} />Contact
        </>
      ),
      href: "/",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex left-5 w-40 items-center gap-2 justify-evenly fixed top-5 p-4 flex-col ">
      {links.map(({ id, child, href, style, download }) => (
        <div key={id} className={"right-0 mt-4 flex duration-300 hover:mr-4 "}>
          <a
            href={href}
            className="flex justify-between items-center w-full
         text-white gap-3"
            download={download}
            target="_self"
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