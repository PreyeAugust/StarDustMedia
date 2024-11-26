import React from "react";
import { images } from "./constants";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";


import "./about.css";

type Props = {
  activeImage: undefined;
  clickNext: undefined;
  clickPrev: undefined;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="grid place-items-start w-full bg-[#e7dfd9] relative md:rounded-tr-3xl md:rounded-br-3xl">
      <div className="section1-intro font-serif uppercase text-sm absolute left-20 top-2 underline-offset-4 underline">
        Stardust media & comics
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="section1-title py-16 text-5xl font-extrabold">
              {elem.title}
            </div>
            <div className="section1-desc leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
              {" "}
              {elem.desc}
            </div>
          </motion.div>

          <div className="absolute md:bottom-1 bottom-10 left-20 md:right-0 w-full flex justify-end items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <FaChevronLeft />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <FaChevronRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
