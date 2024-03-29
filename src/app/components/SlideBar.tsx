"use client";
import React from "react";
import { FaCode, FaTools } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { useRouter } from "next/navigation";

// import resumePDF from "../components/resume.pdf"

const SlideBar = () => {
  const router = useRouter();

  const handleClick = ()=>{
    router.push("/skills")
}

  

  const links = [
    {
      id: 1,
      child: (
        <div onClick={() => router.push("/")} className="cursor-pointe flex gap-5 ">
          <FaHome size={25}/> Home
        </div>
      ),
      href: "/",
    },
    {
      id: 2,
      child: (
        <div onClick={() => router.push("/studies")} className="cursor-pointe flex gap-5 ">
          <FaBookOpenReader size={25} /> Studies
        </div>
      ),
      href: "/studies",
    },
    {
      id: 3,
      child: (
        <div onClick={() => router.push("/skills")} className="cursor-pointe flex gap-5 ">
          <FaTools size={25}  />
          Skills
        </div>
      ),
    },
    {
      id: 4,
      child: (
        <div onClick={() => router.push("/projects")} className="cursor-pointe flex gap-5 ">
          <FaCode size={25} />
          Projects
        </div>
      ),
      href: "/",
      style: "rounded-br-md",
      download: true,
    },
    {
      id: 5,
      child: (
        <div onClick={() => router.push("/contact")} className="cursor-pointe flex gap-5 ">
          <MdMarkEmailUnread size={25} />
          Contact
        </div>
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
            onClick={handleClick}
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
