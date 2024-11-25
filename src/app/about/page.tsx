"use client";

import dynamic from "next/dynamic";
import React from "react";

import HeroSectionAbout from "@/app/about/heroSectionAbout";
import AboutSec1 from "@/app/about/aboutSec1";
import AboutSec2 from "@/app/about/aboutSec2";
import AboutSec3 from "@/app/about/AboutSec3";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const AboutSec1Data = {
  discount: "Stardust Media & Comics",
  discount2: "Our Story",
  discount3:
    "Stardust Media is a dynamic creative agency dedicated to inspiring young minds and empowering individuals through innovative solutions and captivating storytelling. Founded by the visionary Queen Irene Onwuka, our mission is to create a positive impact on society by providing high-quality educational and entertainment content.",
  title:
    "Stardust Comics, a subsidiary of Stardust Media, is a comic book company involved in leisure storytelling, publishing, and distribution. We create engaging and educational comic books that inspire young readers and spark their imaginations. ",
  date: "Our Vision",
  title2:
    "To be a global leader in creative media, education, and entertainment, pushing the boundaries of creativity and inspiring audiences worldwide.",
  title3: "Our Mission",
  title4:
    "To empower young minds through captivating storytelling and innovative solutions. We strive to create a positive impact on society by providing high-quality educational and entertainment content",
  title5: "Our Values",
  title6: "Innovation Quality Social Impact Client Satisfaction",
  bgColor: "#2c540e",
};

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSectionAbout />
      <AboutSec1 data={AboutSec1Data} />
      <AboutSec2 />
      <AboutSec3 />
      <br />
      <Footer />
    </div>
  );
}
