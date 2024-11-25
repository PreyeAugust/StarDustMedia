import React from "react";
import "./about.css";
import Image from "next/image";
import Img1 from "@/assets/aboutSec.jpg";

const aboutSec1 = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 overAll">
      <div className="aboutContainer">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="AboutFirstP">
              {data.discount}
              <br />
            </p>
            <span data-aos="zoom-out" className="discount2">
              {data.discount2}
            </span>
            <span data-aos="zoom-out" className="discount3">
              <br />
              <br />
              {data.discount3}
            </span>
            <br />
            <br />
            <span data-aos="zoom-out" className=" AboutTitle">
              {data.title}
            </span>{" "}
          </div>

          {/* second col */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <Image
              src={Img1}
              width={220}
              alt=""
              className="scale-125 w-[220px] md:w-[240px] mx-auto drop-shadow-2xl object-cover rounded-3xl"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="fade-up" className="dateP font-bold uppercase">
              {data.date}
            </p>
            <p data-aos="zoom-out" className="title2">
              {data.title2}
            </p>
            <p data-aos="fade-up" className="title3 uppercase font-bold">
              {data.title3}
            </p>
            <p data-aos="fade-up" className="title4">
              {data.title4}
            </p>
          
            <div data-aos="fade-up" data-aos-offset="0">
              <a
                href="#"
                style={{ color: "#2C540E" }}
                className="bg-white py-2 px-4 rounded-full"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutSec1;
