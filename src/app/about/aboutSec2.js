import React from "react";
import "./about.css";
import Image from "next/image";
import Img1 from "@/../../public/IMG_6429.jpg";

export default function aboutSec2() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            data-aos="zoom-out"
            className="object-cover object-center rounded-3xl"
            alt="hero"
            src={Img1}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1
            data-aos="zoom-out"
            className="title-font sm:text-4xl text-3xl mb-4 font-bold font-serif text-black uppercase"
          >
            {" "}
            Queen Irene Onwuka, CEO
          </h1>
          <p data-aos="zoom-out" className="mb-8 leading-relaxed font-serif">
            A visionary leader and passionate advocate for education, Queen
            Irene Onwuka is the driving force behind Stardust Media & Comics.
            With a deep understanding of the power of storytelling, she has
            created numerous captivating childrens books and comics that inspire
            young minds. Her dedication to fostering creativity, literacy, and
            social impact has made her a respected gure in the industry. Beyond
            her literary endeavors, Irene is a skilled entrepreneur and business
            strategist.
          </p>
          <p data-aos="zoom-out" className="mb-8 leading-relaxed font-serif">
            A visionary leader and passionate advocate for education, Queen
            Irene Onwuka is the driving force behind Stardust Media & Comics.
            With a deep understanding of the power of storytelling, she has
            created numerous captivating childrens books and comics that inspire
            young minds.
          </p>
        </div>
      </div>
    </section>
  );
}
