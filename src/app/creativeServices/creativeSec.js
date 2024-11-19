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
                </div>
              </div>
            </div>

            {/* third col */}

            <div className="Creative3  py-10 pl-5 text-white rounded-3xl relative h-[480px]  flex items-center">
              <div>
                <div data-aos="zoom-in" className="mb-4">
                  <p className="text-4xl xl:text-5xl font-bold mb-2">
                    {" "}
                    ART & CRAFTS
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
