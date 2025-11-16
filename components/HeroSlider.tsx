"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from '../public/css/HeroSlider.module.css';
import img1 from "../public/images/hero-images/1.jpg";
import img2 from "../public/images/hero-images/2.jpg";
import img3 from "../public/images/hero-images/3.jpg";
import imgRight1 from "../public/images/hero-images/r1.png";
import imgRight2 from "../public/images/hero-images/r2.png";
import imgRight3 from "../public/images/hero-images/r3.png";

const slides = [
  {
    id: 1,
    title: "Experience the True Taste of Spices",
    subtitle: "Fresh, Aromatic & Full of Flavor",
    description:
      "Discover the finest spices sourced directly from the best farms. Add authentic taste and aroma to your dishes with our premium quality collection.",
    buttonText: "Shop Now",
    bg: img1,
    rightImg: imgRight1,
  },
  {
    id: 2,
    title: "Bring the World of Flavors Home",
    subtitle: "Exotic Spices, Endless Possibilities",
    description:
      "From aromatic herbs to fiery chilies, explore our wide range of spices that will elevate every meal. Perfect for chefs and home cooks alike.",
    buttonText: "Shop Now",
    bg: img2,
    rightImg: imgRight2,
  },
  {
    id: 3,
    title: "Craft Culinary Masterpieces",
    subtitle: "Spices That Inspire Creativity",
    description:
      "Turn every recipe into a gourmet experience. Our premium spices are carefully selected to enrich your cooking and awaken your taste buds.",
    buttonText: "Shop Now",
    bg: img3,
    rightImg: imgRight3,
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    router.push("/shop"); // Navigate to shop page
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.sliderContent}>
        {/* Background slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === current ? styles.active : ""}`}
            style={{ backgroundImage: `url(${slide.bg.src})` }}
            aria-hidden={index !== current}
          >
            <div className={styles.overlay}></div>
          </div>
        ))}

        {/* Content Wrapper */}
        <div className={styles.contentWrapper}>
          
          {/* Left Side Text */}
          <div key={current} className={styles.textBox}>
            <h4 className={styles.subTitle} aria-live="polite">
              {slides[current].subtitle}
            </h4>
            <h1 className={styles.title}>{slides[current].title}</h1>
            <p className={styles.description}>
              {slides[current].description}
            </p>
            <button 
              className={styles.ctaButton} 
              onClick={handleClick}
              aria-label={`${slides[current].buttonText} - ${slides[current].title}`}
            >
              {slides[current].buttonText}
            </button>
          </div>

          {/* Right Side Image */}
          <div className={styles.formBox}>
            <img
              src={slides[current].rightImg.src}
              alt={`Slide ${current + 1} Image`}
              className={styles.rightImage}
            />
          </div>
        </div>

        {/* Dots navigation */}
        <div className={styles.dots} role="tablist">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${idx === current ? styles.activeDot : ""}`}
              onClick={() => setCurrent(idx)}
              role="tab"
              aria-label={`Slide ${idx + 1}`}
              aria-selected={idx === current}
              tabIndex={idx === current ? 0 : -1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
