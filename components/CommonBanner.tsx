"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import "../public/css/banner.css"; // External animations

interface BannerProps {
  title: string;
  path1: string;
  path2: string;
  backgroundImage: StaticImageData; // imported image type
}

const CommonBanner: React.FC<BannerProps> = ({ title, path1, path2, backgroundImage }) => {
  return (
    <section className="w-full relative py-16 overflow-hidden banner">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Banner Background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10 animate-fade-in">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-white text-sm md:text-base opacity-90">
          {path1}{" > "}{path2}
        </p>
      </div>

      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-pattern z-0"></div>
    </section>
  );
};

export default CommonBanner;
