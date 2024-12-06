import React from "react";
import Image from "next/image";
import Img1 from "@/../public/balami.png";
import Img2 from "@/assets/team1.jpg";
import Img3 from "@/assets/team2.jpg";

const AboutSec3 = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1
            data-aos="zoom-out"
            class="text-2xl font-bold title-font mb-4 text-black font-serif tracking-widest"
          >
            OUR TEAM MEMBERS
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                data-aos="zoom-out"
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={Img1}
              />
              <div class="flex-grow sm:pl-8">
                <h2
                  data-aos="zoom-out"
                  class="title-font font-bold text-lg text-black uppercase font-serif"
                >
                  Emmanuel Balami
                </h2>
                <h3
                  data-aos="zoom-out"
                  class="text-black mb-3 font-bold
                 font-serif"
                >
                  Chief Creative Officer
                </h3>
                <p data-aos="zoom-out" class="mb-4 text-black font-serif">
                  A visionary entrepreneur and creative innovator, Emmanuel
                  Balami drives innovation and growth at Stardust Media &
                  Comics. With a passion for storytelling, design, and digital
                  strategy, he crafts captivating narratives and stunning
                  visuals. His strategic thinking and entrepreneurial spirit
                  have been instrumental in shaping the companys success.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                data-aos="zoom-out"
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={Img2}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-bold text-lg text-black uppercase font-serif">
                  Eunice Danjuma
                </h2>
                <h3
                  data-aos="zoom-out"
                  class="text-black mb-3 font-bold
                 font-serif"
                >
                  {" "}
                  Executive Assistant
                </h3>
                <p data-aos="zoom-out" class="mb-4 text-black font-serif">
                  A highly organized and efficient executive assistant, Eunice
                  Danjuma provides invaluable support to the team. Her strong
                  communication skills and attention to detail ensure that
                  operations run smoothly. She plays a vital role in managing
                  schedules, coordinating projects, and providing administrative
                  support.
                </p>
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2">
            <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <Image
                data-aos="zoom-out"
                alt="team"
                class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={Img3}
              />
              <div class="flex-grow sm:pl-8">
                <h2 class="title-font font-bold text-lg text-black uppercase font-serif">
                  Opara Blessing Adaeze
                </h2>
                <h3
                  data-aos="zoom-out"
                  class="text-black mb-3 font-bold
                 font-serif"
                >
                  Secretary
                </h3>
                <p data-aos="zoom-out" class="mb-4 text-black font-serif">
                  Opara Blessing Adaeze is a dedicated and detail-oriented
                  secretary. She provides essential administrative support,
                  including managing correspondence, scheduling appointments,
                  and handling general office tasks. Her strong organizational
                  skills and commitment to excellence contribute to the overall
                  efficiency of the team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec3;
