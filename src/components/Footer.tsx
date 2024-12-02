/** @format */
"use client";

import React from "react";
import "./Footer.css";
import Image from "next/image";
import Img1 from "@/assets/StarDustLOGO.jpg";

export default function Footer() {
  return (
    <footer data-aos="zoom-out" className="text-gray-600 body-font footer">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-white font-serif uppercase title-font tracking-widest text-lg font-bold mb-3">
              Quicklinks
            </h2>
            <nav className="list-none mb-10 font-serif">
              <li>
                <a href="/home" className="text-white hover:text-gray-800">
                  HOME
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-gray-800">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="/services" className="text-white hover:text-gray-800">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="/products" className="text-white hover:text-gray-800">
                  PRODUCTS
                </a>
              </li>
              <li>
                <a href="/contactUs" className="text-white hover:text-gray-800">
                  CONTACT
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-white font-serif uppercase title-font  tracking-widest text-lg font-bold mb-3">
              Address
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800 font-serif">
                  No.8 Abdulahhi Ibrahim St, Utako Abuja.
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800 font-serif">
                  +234 706 486 4040
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  +234 803 467 6736
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-serif uppercase title-font text-white tracking-widest text-lg font-bold mb-3">
              email us
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className=" font-serif text-white hover:text-gray-800">
                  Stardustcomicsmedia@gmail.com
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font text-lg text-white font-serif font-bold tracking-widest mb-3">
              SUBSCRIBE
            </h2>
            <form
              action="https://formsubmit.co/0db64e6f5136618657a78bc16a5817f7"
              method="POST"
              className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start"
            >
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label className="leading-7 text-md font-serif text-white">
                  Email
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="font-serif w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-black shadow-sm"
              >
                Send
              </button>
            </form>
            <p className="text-white font-serif text-sm mt-2 md:text-left text-center">
              STARDUST MEDIA & COMICS
            </p>
          </div>
        </div>
      </div>
      <div className=" footer2">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={Img1} alt="" className="footerImg" />
            <span className="ml-3 text-xl font-serif text-white uppercase">
              Stardust
            </span>
          </a>
          <p className="text-sm font-serif  text-white sm:ml-6 sm:mt-0 mt-4">
            © 2024 STARDUST MEDIA & COMICS
            <a
              href="/home"
              rel="noopener noreferrer"
              className="text-white ml-1"
              target="_blank"
            ></a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/profile.php?id=100064957662453&mibextid=LQQJ4d"
              className="text-gray-500"
            >
              <svg
                fill="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/stardustcomics_/profilecard/?igsh=MW41emxmdG8zaWNnbQ=="
              className="ml-3 text-gray-500"
            >
              <svg
                fill="white"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="white"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
