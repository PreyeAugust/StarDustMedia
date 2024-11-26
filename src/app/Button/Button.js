import React from "react";

const Button = ({ text, bgColor, textColor = () => {} }) => {
  return (
    <button
      className={`${bgColor} ${textColor}
        cursor-pointer hover:scale-105 
        duration-300 py-1 px-4 rounded-full
         relative`}
    >
      {text}
    </button>
  );
};

export default Button;
