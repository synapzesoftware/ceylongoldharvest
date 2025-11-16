"use client";

import React from "react";

type DiscountSectionProps = {
  firstImage: string;
  secondImage: string;
  thirdImage: string;
};

const DiscountSection: React.FC<DiscountSectionProps> = ({
  firstImage,
  secondImage,
  thirdImage,
}) => {
  return (
    <div className="w-full flex flex-wrap gap-2 px-4 md:px-16 mt-8 mb-4 justify-center md:justify-between">
      {/* First partition - larger */}
      <div
        className="rounded-xl overflow-hidden relative shadow-lg transform transition duration-500 hover:scale-105"
        style={{
          width: "60%",          // 40% width
          height: "250px",       // fixed height in pixels
          backgroundImage: `url(${firstImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Second partition */}
      <div
        className="rounded-xl overflow-hidden relative shadow-lg transform transition duration-500 hover:scale-105"
        style={{
          width: "250px",          // 20% width
          height: "250px",       // fixed height in pixels
          backgroundImage: `url(${secondImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Third partition */}
      <div
        className="rounded-xl overflow-hidden relative shadow-lg transform transition duration-500 hover:scale-105"
        style={{
          width: "250px",          // 20% width
          height: "250px",       // fixed height in pixels
          backgroundImage: `url(${thirdImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </div>
  );
};

export default DiscountSection;
