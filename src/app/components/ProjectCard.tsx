"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
  githubLink: string;
  deployLink: string;
}

const ProjectCard = ({ image, title, text, githubLink, deployLink }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div className="">
      <div
        onClick={handleFlip}
        className="pt-5 w-[150px] h-[100px] md:w-[450px] md:h-[280px] rounded-md cursor-pointer"
      >
        <motion.div
          className="flip-card-inner w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4"
          >
            <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
            <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center ">
              <h1>Learn more &gt;</h1>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4"
          >
            <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
            <div className="flex flex-col gap-20 py-3 z-[30]">
              <h1 className="text-whote text-[20px] md:text-2xl font-semibold">{title}</h1>
              <p className="text-gray-200 text-[0px] md:text-[20px]">{text}</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center gap-10  mt-5  font-bold text-gray-400 ">
        <a href={githubLink}>Github</a>
        <a className="ml-4" href={deployLink}>
          Deploy
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
