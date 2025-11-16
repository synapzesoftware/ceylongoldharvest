"use client";
import React from "react";
import CommonBanner from "@/components/CommonBanner";
import img from "../../public/images/banner/page-banner.jpg";
import Products from "@/components/products/Products";

//about page
const Shop = () => {
 

  return (
    <div
      className="">
      <CommonBanner title="Shop" path1="Home" path2="Shop" backgroundImage={img} />
      <Products />
    </div>
  );
};

export default Shop;
