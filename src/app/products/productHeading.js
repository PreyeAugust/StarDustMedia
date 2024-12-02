import React from "react";

const ProductHeading = ({ title, subtitle }) => {
  return (
    <div className="body text-center mb-10 max-w-[600px] mx-auto space-y-2">
      <h1 className="text-3xl font-bold lg:text-4xl">{title}</h1>
      <p className=" text-black-600">
      {subtitle}</p>
    </div>
  );
};

export default ProductHeading;
