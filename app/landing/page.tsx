import HeroSlider from "@/components/HeroSlider";
import Products from "@/components/products/Products";
import TestimonialSlider from "@/components/TestimonialSlider";

import Banner from "@/components/Banner";
import bannerImg from "@/public/images/banner/banner-bg.jpg";

import DiscountSection from "@/components/DiscountSection";
import DiscountlargeImage from "@/public/images/discount/discount-large.jpg";
import DiscountsmallImage1 from "@/public/images/discount/discount-s1.png";
import DiscountsmallImage2 from "@/public/images/discount/discount-s2.png";


const Landing = () => {
  return (
    <>
    <HeroSlider />
    <DiscountSection
      firstImage={DiscountlargeImage.src}
      secondImage={DiscountsmallImage1.src}
      thirdImage={DiscountsmallImage2.src}
    />
    <Products />
    <Banner
        title="Welcome to Our Spices"
        subtitle="Premium Quality"
        description="Explore our freshly sourced, high-quality spices from around the world."
        buttonText="Shop Now"
        buttonLink="/products"
        backgroundImage={bannerImg.src}
      />
    <TestimonialSlider />
    </>
  );
};

export default Landing;
