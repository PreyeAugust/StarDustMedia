import React from "react";
import { images } from "./constants";
import left from "../.././../public/left-arrow-svgrepo-com.svg";
import right from "../../../public/right-arrow-svgrepo-com.svg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  activeImage: undefined;
  clickNext: undefined;
  clickPrev: undefined;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="grid place-items-start w-full bg-[#e7dfd9] relative md:rounded-tr-3xl md:rounded-br-3xl">
      <div className="section1-intro uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
        StarDUst media & Comics
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

          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="" width={20} height={20} />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
