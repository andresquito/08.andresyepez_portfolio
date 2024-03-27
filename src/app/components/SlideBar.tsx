import React from "react";
import { AiFillHome , AiFillFolderOpen, AiTwotonePhone,AiFillTool, AiFillRead } from "react-icons/ai";
import { FcSupport,FcReading, FcCommandLine, FcCellPhone, FcDepartment  } from "react-icons/fc";

// import resumePDF from "../components/resume.pdf"

const SlideBar = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Home<FcDepartment size={30} className="cursor-pointer " /> 
        </>
      ),
      href: "https://linkedin.com/in/ricardo-andrés-yépez-valenzuela-661915263",
    },
    {
      id: 2,
      child: (
        <>
          Studies <FcReading size={30}  className="cursor-pointer "/>
        </>
      ),
      href: "https://github.com/andresquito",
    },
    {
      id: 3,
      child: (
        <>
          Experience <FcSupport size={30} className="cursor-pointer " />
        </>
      ),
      href: "mailto:ricardoandres1@hotmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Projects <FcCommandLine size={30} />
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
          Contact <FcCellPhone  size={30} />
        </>
      ),
      href: "/",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex right-0  items-left  justify-evenly fixed top-2 p-4 flex-col">
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