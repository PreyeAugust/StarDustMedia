"use client";

import dynamic from "next/dynamic";
import React from "react";

import HeroSection from "@/app/home/heroSection";
import Section1 from "@/app/home/section1";
import Section3 from "@/app/home/section3";
import comic from "@/assets/section3IMG2-removebg-preview.png";
import comic2 from "@/assets/section3IMG.jpg";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const Section3Data = {
  discount: "To Ignite",
  title: "Young Minds",
  date: "Through engaging and inspiring content",
  Image: comic,
  title2: "To Be The Leading Provider",
  title3: "Of Innovative",
  title4:
    "& Educational Media for Children Shaping a brighter Future Through The Power Of Storytelling",
  bgColor: "#ffd700",
};

const Section3Data2 = {
  discount: "Develop & Publish",
  title: "A Diverse Range",
  date: "Of Educational Comic Books",
  Image: comic2,
  title2: "Expand Our Reach",
  title3: "Through Partnerships",
  title4: "With Schools, Libraries And Organizations",
  bgColor: "#2C540E",
};

export default function page() {
  return (
    <div>
      <Navbar />

      <HeroSection />
      <Section1 />
      <Section3 data={Section3Data} />
      <Section3 data={Section3Data2} />

      <Footer />
    </div>
  );
}
