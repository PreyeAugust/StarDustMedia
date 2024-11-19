import React from "react";
import "./creative.css";

const creativeSec = () => {
  return (
    <div>
      <div className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* first col */}
            <div className="Creative1 py-10 pl-5 text-white rounded-3xl relative h-[480px]  flex items-center">
              <div>
                <div data-aos="zoom-in" className="mb-4">
                  <p className="text-4xl xl:text-5xl font-bold mb-2">
                    {" "}
                    GRAPHIC DESIGN
                  </p>
                  <p className="pText">
                    {" "}
                    We offer a range of graphic design services to bring your
                    vision to life. From creating illustrations for your
                    childrens book, logo, to designing engaging marketing
                    materials.
                  </p>
                </div>
              </div>
            </div>
            {/* second col */}
            <div className="Creative2 py-10 pl-5 text-white rounded-3xl relative h-[480px]   flex items-center">
              <div>
                <div data-aos="zoom-in" className="mb-4">
                  <p className="text-4xl xl:text-5xl font-bold mb-2">
                    {" "}
                    BRANDING
                  </p>
                  <p className="pText">
                    {" "}
                    At StarDust Media We Prioratize helping you develop a strong
                    and recognizable brand identity for your childrens book, or
                    educational initiative.
                  </p>
                </div>
              </div>
            </div>

            {/* third col */}

            <div className="Creative3 py-10 pl-5 text-white rounded-3xl relative h-[480px]  flex items-center">
              <div>
                <div data-aos="zoom-in" className="mb-4">
                  <p className="text-4xl xl:text-5xl font-bold mb-2">
                    {" "}
                    ARTS & CRAFTS WORKSHOP
                  </p>
                
                  <p className="pText">
                    {" "}
                    Also at StarDust Media we take top priority in sparking
                    childrens creativity with our interactive and educational
                    arts and crafts workshops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default creativeSec;
