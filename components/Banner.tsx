"use client";

import React from "react";

type BannerProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
};

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  return (
    <div
      className="w-full h-[70vh] bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black/50 w-full h-full flex flex-col justify-center items-center p-8 md:p-16 text-white text-center">
        {/* Subtitle */}
        <h4 className="text-lg md:text-2xl font-medium mb-2">
          {subtitle || "Pure, Natural & Premium Quality"}
        </h4>

        {/* Title */}
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          {title || "Experience the Rich Flavors of Nature's Best Spices"}
        </h1>

        {/* Description */}
        <p className="text-sm md:text-lg mb-6 max-w-3xl">
          {description || 
            "Discover our carefully sourced, 100% natural and healthy spices that add rich flavors, aroma, and vibrant colors to your meals. From traditional classics to exotic blends, our premium spices are perfect for everyday cooking or gourmet creations. Elevate your dishes with spices that are not only delicious but also enhance your well-being. Taste the difference of freshness, quality, and nature in every pinch!"}
        </p>

        {/* Button */}
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="px-6 py-3 rounded-md font-semibold transition-all duration-300"
            style={{
              backgroundColor: "var(--btn-color)",
              color: "#fff",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--btn-color-hover)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--btn-color)")
            }
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Banner;
