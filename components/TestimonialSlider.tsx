"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

interface Testimonial {
  name: string;
  gender: "male" | "female";
  designation: string;
  comment: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Fernando",
    gender: "female",
    designation: "Home Chef | Colombo",
    comment:
      "Absolutely love these spices! They made my dishes so flavorful and fresh. Excellent quality and quick delivery!",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
  },
  {
    name: "Rohan Perera",
    gender: "male",
    designation: "Restaurant Owner | Spice Haven",
    comment:
      "Top-notch service and authentic spices. Our customers are loving the enhanced taste in every meal.",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
  {
    name: "Anjali Silva",
    gender: "female",
    designation: "Baker | Sweet Delights",
    comment:
      "The aroma and quality of these spices are unmatched. They add a perfect punch to my baked goods!",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
  },
  {
    name: "Kamal Senanayake",
    gender: "male",
    designation: "Chef | Flavor Town",
    comment:
      "Exceptional taste and freshness! These spices truly elevate every dish we prepare. Highly recommend!",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
  {
    name: "Nisha Rajapaksha",
    gender: "female",
    designation: "Home Cook | Galle",
    comment:
      "Wonderful spices and fast delivery! Every meal I cook now has that authentic restaurant flavor.",
    rating: 4,
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
  },
  {
    name: "Dinesh Perera",
    gender: "male",
    designation: "Food Blogger | Taste Explorer",
    comment:
      "These spices are a game changer! Fresh, aromatic, and they make cooking so much fun.",
    rating: 5,
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
];


const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ once: true, duration: 1000 });

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTestimonials = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleTestimonials([testimonials[index]]);
      } else if (width < 1024) {
        const second = (index + 1) % testimonials.length;
        setVisibleTestimonials([testimonials[index], testimonials[second]]);
      } else {
        const second = (index + 1) % testimonials.length;
        const third = (index + 2) % testimonials.length;
        setVisibleTestimonials([testimonials[index], testimonials[second], testimonials[third]]);
      }
    };

    updateTestimonials();
    window.addEventListener("resize", updateTestimonials);
    return () => window.removeEventListener("resize", updateTestimonials);
  }, [index]);

  const getDots = () =>
    testimonials.map((_, i) => (
      <button
        key={i}
        className={`h-2 rounded-full mx-1 transition-all duration-300 ${
          i === index ? "w-6" : "w-2 bg-gray-300"
        }`}
        style={{ backgroundColor: i === index ? "var(--primary)" : undefined }}
        onClick={() => setIndex(i)}
      />
    ));

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-8 sm:mb-12 text-center" data-aos="fade-up" data-aos-delay="100">
        <span className="block mb-2 text-base sm:text-lg font-semibold subtitle" style={{color:'var(--secondary)'}}>Our Reviews</span>
        <h2 className="mb-3 text-2xl sm:text-3xl lg:text-4xl font-bold titles">
          Real Experiences, Real Stories
        </h2>
        <p className="max-w-[90%] sm:max-w-[70%] mx-auto text-sm sm:text-base discriptions">
          Hear from our happy customers who trust us to deliver excellent service and quality.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-6 transition-transform duration-500">
          {visibleTestimonials.map((t, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150} // stagger effect
              className="rounded-2xl shadow-lg w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[30%] p-4 sm:p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "var(--primary)" }}
            >
              {/* Comment */}
              <div>
                <p className="italic mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: "var(--text-white)" }}>
                &quot;{t.comment}&quot;
                </p>
                <div className="text-base sm:text-lg" style={{ color: "var(--third)" }}>
                  {"★".repeat(t.rating)}
                  {"☆".repeat(5 - t.rating)}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={200}
                  height={120}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-md"
                />
                <div>
                  <p className="text-xs sm:text-sm font-semibold" style={{ color: "var(--text-white)" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--secondary)" }}>
                    {t.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8">{getDots()}</div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
