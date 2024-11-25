"use client";
import React from "react";
import "./home.css";

export default function heroSection() {
  return (
    <main className="main">
      <div className="contents">
        <h1>imagination to reality</h1>
        <div className="buttons">
          <a href="/products">
            <button>our work</button>
          </a>
          <a href="/about">
            <button>our Story</button>
          </a>
        </div>
      </div>
      <video autoPlay muted loop className="video">
        <source src="/comic-vid.mp4" />
      </video>
    </main>
  );
}
