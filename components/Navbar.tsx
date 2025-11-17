"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import logoImg from "../public/images/logo/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">

      {/* ===================== TOP BAR ===================== */}
      {!isScrolled && (
        <div className="hidden md:block py-2"
          style={{
            background: "var(--primary)",
            color: "white"
          }}
        >
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">

            {/* Left Section */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 hover:text-[var(--third)] cursor-pointer">
                <IoLocationOutline className="text-lg" />
                <span>Canada</span>
              </div>

              <div className="flex items-center gap-1 hover:text-[var(--third)] cursor-pointer">
                <FaPhoneAlt className="text-lg" />
                <span>+00000000</span>
              </div>
            </div>

            {/* Right Section (Social Icons) */}
            <div className="flex items-center gap-4">
              <FaFacebookF className="text-xl cursor-pointer hover:text-[var(--third)]" />
              <FaInstagram className="text-xl cursor-pointer hover:text-[var(--third)]" />
              <FaTiktok className="text-xl cursor-pointer hover:text-[var(--third)]" />
              <FaYoutube className="text-xl cursor-pointer hover:text-[var(--third)]" />
            </div>

          </div>
        </div>
      )}

      {/* ===================== MAIN NAVBAR ===================== */}
      <div
        className={`w-full transition-all duration-300 shadow-md`}
        style={{
          background: isScrolled ? "var(--primary)" : "white"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

          {/* Logo */}
          <div
            className={`text-2xl font-bold transition-colors duration-300`}
            style={{
              color: isScrolled ? "white" : "var(--primary)"
            }}
          >
            <Link href="/">
              <Image
                src={logoImg.src}
                alt="Logo"
                width={140} // adjust width
                height={40} // adjust height
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            {["Home", "About", "Shop", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="transition-colors"
                  style={{
                    color: isScrolled ? "white" : "var(--primary)"
                  }}
                >
                  <span className="hover:text-[var(--third)]">{item}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col gap-[5px]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <span className="w-6 h-[3px] bg-gray-800"></span>
            <span className="w-6 h-[3px] bg-gray-800"></span>
            <span className="w-6 h-[3px] bg-gray-800"></span>
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t shadow-md">
            <ul className="flex flex-col text-gray-700 font-medium p-4 gap-4">
              <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
              <li><Link href="/shop" onClick={() => setOpen(false)}>Shop</Link></li>
              <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}

      </div>
    </header>
  );
}
