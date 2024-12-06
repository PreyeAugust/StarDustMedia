import React from "react";
import "./product.css";

export default function productSec2({ data }) {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="aboutContainer">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 items-center rounded-4xl">
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p
              data-aos="slide-right"
              className="uppercase text-2xl font-serif font-bold"
            >
              {data.discount}
            </p>
            <br />
            <h1
              data-aos="zoom-out"
              className="uppercase text-1xl font-serif font-bold "
            >
              {data.title}
            </h1>{" "}
            <br />
          </div>

          {/* second col */}
          <div data-aos="zoom-in" className="h-full flex items-center"></div>
          {/* third col */}
          <div className="flex flex-col  justify-center gap-4 p-6 sm:p-8">
            <p
              data-aos="fade-up"
              className="font-bold font-serif text-2xl text-white uppercase"
            >
              {data.date}
            </p>
            <p
              data-aos="zoom-out"
              className="uppercase text-1xl font-serif font-bold"
            >
              {data.title2}
            </p>
            <p
              data-aos="fade-up"
              className="font-bold font-serif text-2xl text-white uppercase"
            >
              {data.date2}
            </p>
            <p
              data-aos="fade-up"
              className="uppercase text-1xl font-serif font-bold"
            >
              {data.title3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
