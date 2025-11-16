"use client";
import React from "react";
import CommonBanner from "@/components/CommonBanner";
import img from "../../public/images/banner/page-banner.jpg";
import ContactSection from "@/components/ContactSection";

//about page
const Contact = () => {
 

  return (
        <div
      className="">
      <CommonBanner title="Contact Us" path1="Home" path2="Contact" backgroundImage={img} />

      {/* Top Intro Section */}
      <section className="w-full px-20 md:px-20 py-8 md:py-16 flex flex-col md:flex-row items-center justify-center animate-fade-in "
      style={{padding: "3% 15% 3% 15%" }}>
        {/* Left Side - Title & Subtitle */}
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{color:'var(--primary)'}}>Let’s Talk</h2>
          <p className="text-lg text-gray-600">We’re Here to Help You</p>
        </div>

        {/* Right Side - Description */}
        <div className="md:w-1/2 text-gray-700 text-sm md:text-base text-center md:text-right">
          <p>
            Whether you have questions, feedback, or just want to connect, our team is ready to assist you.
            Fill out the form below or explore our FAQs for quick answers.
          </p>
        </div>
      </section>

      <div className="w-full flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.5s" }} >
        <div className="w-[70%] h-[1.3px] bg-[var(--third-color)]"></div>
      </div>


      
      <ContactSection />
    </div>
  );
};

export default Contact;
