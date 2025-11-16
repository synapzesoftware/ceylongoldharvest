"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "./product-details";
import "@/public/css/product.css";

const categories = ["All", "Cinnamon", "B", "C", "D"]; // Capital letters to match product.category

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full flex flex-col md:flex-row gap-10 py-12 products-container">
      
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/3 lg:w-1/4 filter-box">
        <h2 className="text-2xl font-bold mb-2 product-title">Our Products</h2>
        <p className="text-gray-500 text-sm mb-6">
          Explore our premium, freshly sourced spices.
        </p>

        <h3 className="text-lg font-semibold mb-4 product-title">Category</h3>

        {/* Category Buttons */}
        <div className="flex flex-col gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-btn ${
                selectedCategory === cat ? "active" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE PRODUCT GRID */}
      <div className="w-full md:w-2/3 lg:w-3/4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={`${product.category}-${product.id}`} // UNIQUE KEY FIX
              className="product-card"
            >
              <div className="w-full h-40 sm:h-44 lg:h-48 overflow-hidden rounded-md relative group">
                {/* FRONT IMAGE */}
                <Image
                  src={product.frontImage}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-500 front-img"
                />

                {/* BACK IMAGE (VISIBLE ON HOVER) */}
                <Image
                  src={product.backImage}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-500 absolute top-0 left-0 opacity-0 group-hover:opacity-100 back-img"
                />
              </div>

              <h4 className="text-base sm:text-lg font-semibold mt-3 product-title">
                {product.name}
              </h4>

              <button className="btn-product mt-3">View Details</button>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
