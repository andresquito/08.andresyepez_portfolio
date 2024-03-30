"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData, Soon } from "../constants";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const page = () => {
  return (
    <div    
      style={{ background: "url(/bg-2.jpg)" }}
      className="  h-screen w-screen flex items-center justify-center bg-cover bg-center"      
    >
      <div className="flex flex-col gap-0 sm:gap-20 max-w-[80%] text-right sm:text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-white font-semibold text-[30px] sm:text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>{" "}
            Technologists{" "}
          </h1>
          <p className="text-gray-400 text-[15px] sm:text-[20px] pb-5">
            Using the latest tech this world has to offer{" "}
          </p>
        </div>

        <Swiper
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[100%] pb-10"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="text-[30px] sm:text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 pb-5">
          {" "}
          Soon{" "}
        </span>
        {/* <Swiper></Swiper> */}
        <Swiper
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={10000}
          modules={[Autoplay]}
          className="max-w-[100%]"
        >
          {Soon.map((skill, index) => (
            <SwiperSlide key={index}>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default page;
