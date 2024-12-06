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

export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSectionAbout />
      <AboutSec1 />
      <AboutSec2 />
      <AboutSec3 />

      <Footer />
    </div>
  );
}
