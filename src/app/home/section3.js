import React from "react";
import "./home.css";
import Image from "next/image";

export default function section3({ data }) {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 overAll">
      <div className="container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p data-aos="zoom-out" className="text-sm">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-3xl lg:text-5xl font-serif"
            >
              {data.title}
            </h1>
            <p data-aos="zoom-in" className="text-sm">
              {data.date}
            </p>
          </div>

          {/* second col */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <Image
              src={data.Image}
              alt=""
              className="scale-125 w-[220px] md:w-[240px] mx-auto drop-shadow-2xl object-cover rounded-3xl"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-out" className="font-bold text-xl">
              {data.title2}
            </p>
            <p data-aos="zoom-out" className="text-3xl sm:text-3xl font-bold">
              {data.title3}
            </p>
            <p data-aos="zoom-out" className="text-sm tracking-wide leading-5">
              {data.title4}
            </p>
            <div data-aos="zoom-out" data-aos-offset="0">
              <a href="/products">
                <button
                  style={{ color: "#2C540E" }}
                  className="bg-white py-2 px-4 rounded-full"
                >
                  Shop Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
