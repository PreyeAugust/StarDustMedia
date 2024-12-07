"use client";
import React from "react";
import "./home.css";

export default function heroSection() {
  return (
    <main className="heroMain flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover">
      <div className="absolute w-full top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className=" container p-5 text-white z-[2] mt-[10rem]">
        <h1 className="content uppercase font-serif text-3xl">
          Imagination to reality
        </h1>
        <p className=" content-P py-5 text-md font-serif ">
          {" "}
          A dynamic creative agency dedicated to inspiring young minds and
          empowering individuals through innovative solutions and captivating
          storytelling
        </p>
        <br />
        <br />
        <div className="buttons">
          <a href="/products">Products</a>
        </div>
      </div>
      <video autoPlay loop muted className="video">
        <source src="/comic-vid.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
