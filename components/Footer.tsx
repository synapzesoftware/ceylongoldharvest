"use client";
import React, { useState } from "react";
import { FaFacebookF, FaTiktok, FaInstagram, FaWhatsapp, FaYoutube, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";
import "../public/css/footer.css";
import socialLinks from "../config/socialLinks";
import logoImg from "../public/images/logo/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    setSuccess(true);
    setEmail("");

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <footer className="text-white pt-16">
      {/* Upper Section - Subscribe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left: Heading and text */}
          <div className="text-left flex-1">
            <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p style={{ color: "var(--text-muted)" }}>
              Stay updated with the latest insights and tips from our experts.
            </p>
          </div>

          {/* Right: Subscribe form */}
          <div className="flex w-full sm:w-auto flex-col">
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                className="px-5 py-3 w-full sm:w-100 text-white focus:outline-none border border-white-color subscribe-input"
                style={{
                  borderColor: "var(--white-color)",
                  caretColor: "var(--white-color)",
                }}
              />

              <button
                type="button"
                onClick={handleSubscribe}
                className="subscribeBtn relative overflow-hidden flex items-center justify-center rounded-r-full"
                style={{ borderColor: "var(--white-color)" }}
              >
                <span className="subscribeText">Subscribe</span>
                <FaEnvelope className="subscribeIcon absolute opacity-0" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="relative h-6 mt-2">
              {/* Validation Error Message */}
              {error && (
                <span
                  className="absolute left-0 text-sm"
                  style={{ color: "var(--third-color)", animation: "fadeIn 0.3s ease-in" }}
                >
                  {error}
                </span>
              )}

              {/* Success Popup */}
              {success && (
                <div
                  className="absolute left-0 px-4 py-1 text-sm text-white font-medium shadow-lg"
                  style={{
                    backgroundColor: "var(--third-color)",
                    animation: "slideFade 2s forwards",
                    borderRadius: "0px 15px 15px 15px",
                  }}
                >
                  Successfully Subscribed!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          
          {/* Logo & About */}
          <div className="flex flex-col items-center lg:items-start">
            {/* <h3 className="text-xl font-bold mb-4">ProposeMe</h3> */}
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src={logoImg.src} 
                alt="ProposedMe Logo" 
                width={140} 
                height={40} 
                priority
              />
            </Link>
            <p className=" text-sm .footer-about" style={{ color: "var(--text-muted)",}}>
              At Ceylon Gold Harvest, every product starts in the lush spice gardens of Ceylon, handpicked with care to preserve pure aroma, flavor, and natural essence.
            </p>
          </div>

        {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start mx-auto">
            <h4 className="footer-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/shop" className="footer-link">Shop</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

      {/* Privacy & Terms */}
        <div className="flex flex-col items-center lg:items-start mx-auto">
          <h4 className="footer-heading text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Terms & Conditions</a></li>
            <li><a href="#" className="footer-link">Cookie Policy</a></li>
          </ul>
        </div>

    {/* Social & Contact */}
    <div className="flex flex-col items-center lg:items-start">
      <h4 className="footer-heading text-lg font-semibold mb-4">Connect with Us</h4>
      <div className="flex space-x-4 mb-4">
        <a href={socialLinks.facebook} className="social-icon" target="_blank"><FaFacebookF /></a>
        <a href={socialLinks.instagram} className="social-icon" target="_blank"><FaInstagram /></a>
        <a href={socialLinks.tiktok} className="social-icon" target="_blank"><FaTiktok /></a>
        <a href={socialLinks.youtube} className="social-icon" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href={socialLinks.whatsapp} className="social-icon" target="_blank"><FaWhatsapp /></a>
      </div>

      <div className="flex flex-col items-center lg:items-start space-y-3">
        <div className="flex items-center space-x-2 cursor-pointer transition-transform">
          <FaEnvelope className="contact-icon" />
          <span className="text-sm font-medium hover:scale-97 contact-details">
            ceyloangoldharvest@gmail.com
          </span>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer transition-transform">
          <FaPhoneAlt className="contact-icon" />
          <span className="text-sm font-medium hover:scale-97 contact-details">
            +00000000
          </span>
        </div>
      </div>

    </div>

  </div>
</div>

      {/* Bottom Section */}
    <div className="py-3 text-sm" style={{ backgroundColor: "var(--footer-bottom-bg)" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center px-2 sm:px-6 lg:px-8 space-y-1 sm:space-y-0 sm:space-x-2 text-center">
        <div style={{ color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://ceylongoldharvest.com" target="_blank" rel="noopener noreferrer" className="animated-text font-semibold cursor-pointer">
            Ceylon Gold Harvest
          </a>
          , All rights reserved
        </div>
        <div style={{ color: "var(--text-muted)" }} > | </div>
        <div style={{ color: "var(--text-muted)" }}>
          Design & Developed by{" "}
          <a href="https://thesynapze.com" target="_blank" rel="noopener noreferrer" className="animated-text font-semibold cursor-pointer">
            SYNAPZE
          </a>
        </div>
      </div>
    </div>



      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideFade {
          0% { opacity: 0; transform: translateY(-5px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-5px); }
        }

        .animated-text {
          color: var(--text-muted); /* default text color */
          transition: color 0.3s ease;
        }

        .animated-text:hover {
          background: linear-gradient(
            to right,
            var(--third),
            var(--secondary)
          );
          background-size: 200% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation: gradient-move 5s linear infinite;
        }

        @keyframes gradient-move {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }


      `}</style>
    </footer>
  );
};

export default Footer;
