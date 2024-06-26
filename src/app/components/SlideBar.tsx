"use client";
import React from "react";
import { FaCode, FaTools } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { useRouter } from "next/navigation";

// import resumePDF from "../components/resume.pdf"

const SlideBar = () => {

  const router = useRouter()

  const links = [
    {
      id: 1,
      child: (
        <div onClick={() => router.push("/")} className="cursor-pointer flex gap-5">
          <FaHome size={25}/> Home
        </div>
      ),
      //href: "/",
    },
    {
      id: 2,
      child: (
        <div onClick={() => router.push("/studies")} className="cursor-pointer flex gap-5">
          <FaBookOpenReader size={25} /> Studies
        </div>
      ),
      //href: "/",
    },
    {
      id: 3,
      child: (
        <div onClick={() => router.push("/skills")} className="cursor-pointer flex gap-5">
          <FaTools size={25}  />
          Skills
        </div>
      ),
    },
    {
      id: 4,
      child: (
        <div onClick={() => router.push("/projects")} className="cursor-pointer flex gap-5">
          <FaCode size={25} />
          Projects
        </div>
      ),
      //href: "/",
      style: "rounded-br-md",
      download: true,
    },
    {
      id: 5,
      child: (
        <div onClick={() => router.push("/contact")} className="cursor-pointer flex gap-5 ">
          <MdMarkEmailUnread size={25} />
          Contact
        </div>
      ),
      // href: "/",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="flex left-0 w-40 items-stars gap-0 justify-evenly fixed top-0 p-2 flex-col ">
      {links.map(({ id, child,  style, download }) => (
        <div key={id} className={"right-0 mt-4 flex duration-300 hover:mr-4 "}>
          <a
            // href="/"  
            //onClick={handleClik}      
            className="flex justify-between items-center w-full text-white gap-3"
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
