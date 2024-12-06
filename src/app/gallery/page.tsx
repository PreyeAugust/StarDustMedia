"use client";

import dynamic from "next/dynamic";
import React from "react";

import GalleryHero from "@/app/gallery/galleryHero";
import Gallery1 from "@/app/gallery/gallery1";

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
      <GalleryHero />
      <Gallery1 />

      <Footer />
    </div>
  );
}
