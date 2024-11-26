import React from "react";
import "./product.css";
import Image from "next/image";
import Img1 from "@/assets/The Patriot Kids - Cover.png";
import Img2 from "@/assets/Nkem Learns About Vat.png";
import Img3 from "@/assets/Giving Peace a Chance irene Abuja-1.png";
import Img4 from "@/assets/REWARD OF SAVINNGS COVER - STARDUST.png";
import Img5 from "@/assets/YoungEmeralds.jpg";

const productSecCard = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl">Our Products</h1>
          <p className="text-xs text-gray-400">Explore Our Products</p>
        </div>
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              class="group aos-init aos-animate"
            >
              <div className="relative">
                <Image
                  src={Img1}
                  alt=""
                  className="h-[180px] w-[260px] object-cover rounded-md"
                />
                <div
                  className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                   h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md"
                >
                  <a href="https://selar.co/1py2wj">
                    <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                      Purchase
                    </button>
                  </a>
                </div>
              </div>
              <div className="leading-7">
                <h2 className="font-semibold">The Patriot Kids</h2>
                <h2 className="font-bold">N2500</h2>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="group aos-init aos-animate"
            >
              <div className="relative">
                <Image
                  src={Img2}
                  alt=""
                  className="h-[180px] w-[260px] object-cover rounded-md"
                />
                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                  <a href="https://selar.co/cuo322">
                    <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                      Purchase
                    </button>
                  </a>
                </div>
              </div>
              <div className="leading-7">
                <h2 className="font-semibold">Nkem Learns About VAT</h2>
                <h2 className="font-bold">N2500</h2>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="group aos-init aos-animate"
            >
              <div className="relative">
                <Image
                  src={Img3}
                  alt=""
                  className="h-[180px] w-[260px] object-cover rounded-md"
                />
                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                  <a href="https://selar.co/66b56n">
                    <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                      Purchase
                    </button>
                  </a>
                </div>
              </div>
              <div className="leading-7">
                <h2 className="font-semibold">Giving Peace A Chance</h2>
                <h2 className="font-bold">N2500</h2>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="group aos-init aos-animate"
            >
              <div className="relative">
                <Image
                  src={Img4}
                  alt=""
                  class="h-[180px] w-[260px] object-cover rounded-md"
                />
                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                  <a href="https://selar.co/32q1x1">
                    <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                      Purchase
                    </button>
                  </a>
                </div>
              </div>
              <div className="leading-7">
                <h2 className="font-semibold">Reward For Savings</h2>
                <h2 className="font-bold">N2500</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="group aos-init"
            >
              <div class="relative">
                <Image
                  src={Img5}
                  alt=""
                  class="h-[180px] w-[260px] object-cover rounded-md"
                />
                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                  <a href="https://selar.co/370b17">
                    <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">
                      Purchase
                    </button>
                  </a>
                </div>
              </div>
              <div className="leading-7">
                <h2 className="font-semibold">Young Emeralds</h2>
                <h2 className="font-bold">N2500</h2>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="group aos-init"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productSecCard;
