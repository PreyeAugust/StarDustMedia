import React from "react";
import "./creative.css";

const creativeSec = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/3">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 class="title-font font-serif sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                GRAPHIC DESIGN
              </h1>
              <p class="font-serif leading-relaxed mb-3">
                We offer a range of graphic design services to bring your vision
                to life. From creating illustrations for your childrens book,
                logo, to designing engaging marketing materials.
              </p>
            </div>
          </div>
          <div class="p-4 lg:w-1/3">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 class="title-font font-serif sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                BRANDING
              </h1>
              <p class="font-serif leading-relaxed mb-3">
                At StarDust Media We Prioratize helping you develop a strong and
                recognizable brand identity for your childrens book, or
                educational initiative.
              </p>
            </div>
          </div>
          <div class="p-4 lg:w-1/3">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 class="title-font font-serif sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                ARTS & CRAFTS WORKSHOP
              </h1>
              <p class="font-serif leading-relaxed mb-3">
                Also at StarDust Media we take top priority in sparking
                childrens creativity with our interactive and educational arts
                and crafts workshops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default creativeSec;
