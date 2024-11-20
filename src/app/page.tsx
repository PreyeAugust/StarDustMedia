"use client";

import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Page from "../app/home/page";
import Page1 from "../app/about/page";
import Page2 from "../app/contactUs/page";
import Page3 from "../app/creativeServices/page";
import Page4 from "../app/products/page";
import Page5 from "../app/services/page";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div>
      <Page />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </div>
  );
}
