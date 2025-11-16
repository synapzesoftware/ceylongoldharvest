"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import CommonBanner from "@/components/CommonBanner";
import img from "../../public/images/banner/page-banner.jpg";

import img1 from "../../public/images/about/1.png";
import img2 from "../../public/images/about/2.jpg";
import img3 from "../../public/images/about/3.png";
import img4 from "../../public/images/about/4.jpg";

const AboutUs = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <CommonBanner
        title="About"
        path1="Home"
        path2="About"
        backgroundImage={img}
      />

      <div className="max-w-7xl mx-auto px-8 md:px-20">

        {/* SECTION 1 */}
        <div className="w-full py-20 flex flex-col md:flex-row items-center gap-14">

          {/* TEXT (always first on mobile) */}
          <div className="md:w-1/2 order-1 md:order-1" data-aos="fade-right">
            <h2 className="text-4xl font-bold text-gray-800 mb-5">
              Ceylon Gold Harvest
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
              We are committed to bringing you the finest spices sourced from
              the heart of Sri Lanka’s fertile lands.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              At <strong>Ceylon Gold Harvest</strong>, every product begins its
              journey in the lush spice gardens of Ceylon. Our farmers handpick
              each spice with care, ensuring that every aroma, flavor, and
              natural essence remains pure.
            </p>
          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 order-2 md:order-2 rounded-xl overflow-hidden" data-aos="fade-left">
            <Image
              src={img1}
              alt="Ceylon Gold Harvest"
              style={{ width: "420px", height: "420px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="w-full py-20 flex flex-col md:flex-row items-center gap-14">

          {/* IMAGE (desktop-left) */}
          <div className="md:w-1/2 order-2 md:order-1 rounded-xl overflow-hidden" data-aos="fade-right">
            <Image
              src={img2}
              alt="Natural Quality"
              style={{ width: "420px", height: "420px", objectFit: "cover" }}
            />
          </div>

          {/* TEXT (always first on mobile) */}
          <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-5">
              100% Pure & Natural Spices
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
              Every spice we offer is free from artificial colors, chemicals,
              and preservatives.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              Through traditional drying and processing techniques, we preserve
              the natural aroma, freshness, and authenticity of Sri Lankan spices.
              Our commitment is to deliver safe, healthy, and premium-quality products.
            </p>
          </div>

        </div>

        {/* SECTION 3 */}
        <div className="w-full py-20 flex flex-col md:flex-row items-center gap-14">

          {/* TEXT */}
          <div className="md:w-1/2 order-1 md:order-1" data-aos="fade-right">
            <h2 className="text-4xl font-bold text-gray-800 mb-5">
              Premium Sri Lankan Cinnamon
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
              Known as “True Cinnamon,” Ceylon Cinnamon is one of Sri Lanka’s
              most valued gifts to the world.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              Soft, golden, and naturally sweet—our cinnamon is hand-rolled and
              carefully sun-dried. Its warm aroma, smooth texture, and medicinal
              benefits make it a must-have spice for every kitchen.
            </p>
          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 order-2 md:order-2 rounded-xl overflow-hidden" data-aos="fade-left">
            <Image
              src={img3}
              alt="Sri Lankan Cinnamon"
              style={{ width: "420px", height: "420px", objectFit: "cover" }}
            />
          </div>

        </div>

        {/* SECTION 4 */}
        <div className="w-full py-20 flex flex-col md:flex-row items-center gap-14">

          {/* IMAGE (desktop-left) */}
          <div className="md:w-1/2 order-2 md:order-1 rounded-xl overflow-hidden" data-aos="fade-right">
            <Image
              src={img4}
              alt="Tasty Spices"
              style={{ width: "420px", height: "420px", objectFit: "cover" }}
            />
          </div>

          {/* TEXT */}
          <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-5">
              Naturally Tasty
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
              Our spices deliver bold, vibrant flavors that elevate every dish.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              Whether you're preparing curries, desserts, tea blends, or
              traditional Sri Lankan meals, our spices add authentic aroma and
              richness. Pure, aromatic, and naturally flavorful—Ceylon goodness in
              every bite.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutUs;
