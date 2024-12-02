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
    <section data-aos="zoom-out" className="body text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-10 max-w-[600px] mx-auto space-y-2">
          <h1 data-aos="zoom-out" className="text-3xl font-bold lg:text-4xl">
            Explore Our Products
          </h1>
        </div>

        <div className="flex flex-wrap -m-4">
          <div data-aos="zoom-out" className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-88 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover bg-contain bg-center object-center w-full h-full block"
                src={Img1}
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Patriot Kids
              </h2>
              <p className="mt-1">N2500</p>
              <a href="https://selar.co/cuo322">
                <button class="flex mx-auto mt-16 text-white custom-color border-0 py-2 px-8 focus:outline-none rounded text-lg">
                  Purchase
                </button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-88 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={Img2}
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Nkem Learns About VAT
              </h2>
              <p className="mt-1">N2500</p>
              <a href="https://selar.co/cuo322">
                <button class="flex mx-auto mt-16 text-white custom-color border-0 py-2 px-8 focus:outline-none rounded text-lg">
                  Purchase
                </button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-60 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={Img3}
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Giving Peace A Chance
              </h2>
              <p className="mt-1">N2500</p>
              <a href="https://selar.co/66b56n">
                <button class="flex mx-auto mt-16 text-white custom-color border-0 py-2 px-8 focus:outline-none rounded text-lg">
                  Purchase
                </button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-88 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={Img4}
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Reward For Savings
              </h2>
              <p className="mt-1">N2500</p>
              <a href="https://selar.co/32q1x1">
                <button class="flex mx-auto mt-16 text-white custom-color border-0 py-2 px-8 focus:outline-none rounded text-lg">
                  Purchase
                </button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-90 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src={Img5}
              />
            </a>
            <div className="mt-4">
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Young Emralds
              </h2>
              <p className="mt-1">N2500</p>
              <a href="https://selar.co/370b17">
                <button class="flex mx-auto mt-16 text-white custom-color border-0 py-2 px-8 focus:outline-none rounded text-lg">
                  Purchase
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default productSecCard;
