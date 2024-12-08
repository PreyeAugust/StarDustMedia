import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "./Navbar.css";
import Img1 from "@/../public/StarDustLOGO.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#004D40");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed z-40 w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent"
    >
      <div className=" max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Image src={Img1} className="logo" alt="" />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="font-serif p-4">
            <Link href="/home">HOME</Link>
          </li>
          <li className="font-serif p-4">
            <Link href="/about">ABOUT</Link>
          </li>
          <li className="font-serif p-4">
            <Link href="/products">PRODUCTS</Link>
          </li>

          <li className="font-serif p-4">
            <Link href="/gallery">GALLERY</Link>
          </li>
          <li className="font-serif p-4">
            <Link href="/contactUs">CONTACT</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} className="text-white" />
          ) : (
            <AiOutlineMenu size={20} className="text-white" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="font-serif p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              onClick={handleNav}
              className="font-serif p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/about">ABOUT US</Link>
            </li>
            <li
              onClick={handleNav}
              className="font-serif p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/products">PRODUCTS</Link>
            </li>

            <li
              onClick={handleNav}
              className="font-serif p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/gallery">GALLERY</Link>
            </li>
            <li
              onClick={handleNav}
              className="font-serif p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contactUs">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
