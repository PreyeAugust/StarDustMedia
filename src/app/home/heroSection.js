"use client";
import React from "react";
import "./home.css";

export default function heroSection() {
  return (
    <main className="body w-full flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[10rem]">
        <h1 className="uppercase font-serif text-2xl">
          Imagination to reality
        </h1>
        <p className="py-5 text-md font-serif ">
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
    </main>
  );
}
