"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { products } from "./product-details";
import "@/public/css/product.css";

const categories = ["All", "Cinnamon", "Spices", "Herbal", "Tea"];

const Products = () => {
  const pathname = usePathname();

  // 🔥 HOME PAGE = 8 ITEMS, SHOP PAGE = 12 ITEMS
  const ITEMS_PER_PAGE = pathname === "/" ? 8 : 12;

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <div className="w-full flex flex-col md:flex-row gap-10 py-12 products-container">

      {/* LEFT FILTER */}
      <div className="w-full md:w-1/3 lg:w-1/4 filter-box">
        <h2 className="text-2xl font-bold mb-2 product-title">Our Products</h2>
        <p className="text-gray-500 text-sm mb-6">
          Explore our premium, freshly sourced spices.
        </p>

        <h3 className="text-lg font-semibold mb-4 product-title">Category</h3>

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

      {/* PRODUCT GRID */}
      <div className="w-full md:w-2/3 lg:w-3/4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <div
              key={`${product.category}-${product.id}`}
              className="product-card"
            >
              <div className="w-full h-40 sm:h-44 lg:h-48 overflow-hidden rounded-md relative group">
                <Image
                  src={product.frontImage}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-500 front-img"
                />

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

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-10">

            {/* PREVIOUS BUTTON */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded transition-all duration-300 ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              style={{
                backgroundColor: currentPage === 1 ? "var(--primary)" : "var(--primary)",
                color: "var(--text-white)",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.backgroundColor = "var(--secondary)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary)";
              }}
            >
              Previous
            </button>

            <span className="text-lg font-medium">
              Page {currentPage} of {totalPages}
            </span>

            {/* NEXT BUTTON */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded transition-all duration-300 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              style={{
                backgroundColor:
                  currentPage === totalPages ? "var(--primary)" : "var(--primary)",
                color: "var(--text-white)",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.backgroundColor = "var(--secondary)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary)";
              }}
            >
              Next
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default Products;
