"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Marquee from "react-fast-marquee";

import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaReact,
  FaShopify,
  FaWordpress,
  FaCode,
  FaRobot,
  FaChartLine,
  FaPalette,
} from "react-icons/fa";

export default function Home() {

  const { scrollYProgress } = useScroll();

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);

  return (

    <main className="bg-black text-white overflow-hidden relative">

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-purple-500 to-fuchsia-600 z-[9999] origin-left"
        style={{
          scaleX: scrollYProgress,
        }}
      />

      {/* Cursor Glow */}
      <div
        className="fixed pointer-events-none z-0 w-[320px] h-[320px] rounded-full bg-purple-600/20 blur-[130px] transition-all duration-200"
        style={{
          left: position.x - 160,
          top: position.y - 160,
        }}
      />

      {/* Background Glow */}
      <div className="fixed top-[-250px] left-[-250px] w-[500px] h-[500px] bg-purple-700 blur-[180px] opacity-20 rounded-full"></div>

      <div className="fixed bottom-[-250px] right-[-250px] w-[500px] h-[500px] bg-fuchsia-700 blur-[180px] opacity-20 rounded-full"></div>

      {/* HERO */}
      <section className="pt-24 md:pt-32 pb-14 md:pb-20 px-6 relative z-10">

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-purple-400 uppercase tracking-[4px] md:tracking-[8px] text-xs md:text-sm mb-6"
          >
            Founder • Developer • AI Specialist
          </motion.p>

          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[110px] font-black leading-[1.05]"
          >

            <span className="whitespace-nowrap">
              Syed Osama Ali
            </span>

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600 mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Digital Entrepreneur
            </span>

          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-3xl mt-8 text-base md:text-xl leading-relaxed"
          >
            Creating premium digital experiences through
            Website Development, AI Automation, SEO,
            Branding, and modern business solutions.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <a
              href="https://wa.me/923343447256"
              target="_blank"
            >

              <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-purple-600/40 shadow-2xl">
                Contact Me
              </button>

            </a>

            <a href="#services">

              <button className="border border-white/20 px-8 py-4 rounded-full hover:border-purple-500 hover:bg-white/[0.03] transition-all duration-300">
                Explore Services
              </button>

            </a>

          </div>

        </div>

      </section>

      {/* HERO MARQUEE */}
      <section className="py-5 relative z-10 overflow-hidden">

        <div className="w-full overflow-hidden border-y border-white/10 bg-white/[0.03] backdrop-blur-xl py-5">

          <Marquee
            speed={90}
            gradient={false}
            autoFill={true}
          >

            {[
              "Premium Websites",
              "AI Automation",
              "Modern UI/UX",
              "SEO Optimization",
              "Shopify Stores",
              "WordPress Development",
              "Business Growth",
              "Creative Branding",
              "Responsive Design",
              "High Performance",
              "Lead Generation",
              "Digital Solutions",
            ].map((item, index) => (

              <div
                key={index}
                className="flex items-center mx-10"
              >

                <span className="text-purple-500 text-2xl mr-5">
                  ✦
                </span>

                <span className="text-lg md:text-2xl font-semibold whitespace-nowrap">
                  {item}
                </span>

              </div>

            ))}

          </Marquee>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 px-6 relative z-10"
      >

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-20">

            <p className="text-purple-400 uppercase tracking-[5px] mb-4">
              Services & Expertise
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              What I Can Do
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Combining technology, creativity, AI, and digital strategy
              to build powerful modern business solutions.
            </p>

          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Development */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#0B0B12] border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500"
            >

              <div className="flex items-center gap-5 mb-8">

                <div className="w-20 h-20 rounded-[24px] flex items-center justify-center text-4xl bg-purple-600/20 text-purple-400 border border-white/10">
                  <FaCode />
                </div>

                <div>

                  <h3 className="text-3xl md:text-4xl font-bold">
                    Development
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Modern Digital Solutions
                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-4">

                {[
                  "Website Development",
                  "Shopify",
                  "WordPress",
                  "Wix",
                  "Web Applications",
                  "Mobile Apps",
                  "UI/UX Design",
                ].map((item, index) => (

                  <span
                    key={index}
                    className="px-5 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-purple-500/40 text-sm md:text-base transition-all duration-300"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </motion.div>

            {/* AI */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#0B0B12] border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-500"
            >

              <div className="flex items-center gap-5 mb-8">

                <div className="w-20 h-20 rounded-[24px] flex items-center justify-center text-4xl bg-cyan-600/20 text-cyan-400 border border-white/10">
                  <FaRobot />
                </div>

                <div>

                  <h3 className="text-3xl md:text-4xl font-bold">
                    AI & Automation
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Smart AI Systems
                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-4">

                {[
                  "AI Automation",
                  "Prompt Engineering",
                  "ChatGPT Solutions",
                  "AI Workflows",
                  "Business Automation",
                ].map((item, index) => (

                  <span
                    key={index}
                    className="px-5 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 text-sm md:text-base transition-all duration-300"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </motion.div>

            {/* SEO */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#0B0B12] border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-xl hover:border-green-500/40 transition-all duration-500"
            >

              <div className="flex items-center gap-5 mb-8">

                <div className="w-20 h-20 rounded-[24px] flex items-center justify-center text-4xl bg-green-600/20 text-green-400 border border-white/10">
                  <FaChartLine />
                </div>

                <div>

                  <h3 className="text-3xl md:text-4xl font-bold">
                    Marketing & SEO
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Growth Strategies
                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-4">

                {[
                  "SEO Optimization",
                  "Meta Ads",
                  "Google Ads",
                  "Lead Generation",
                  "Social Media Marketing",
                ].map((item, index) => (

                  <span
                    key={index}
                    className="px-5 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-green-500/40 text-sm md:text-base transition-all duration-300"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </motion.div>

            {/* Branding */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#0B0B12] border border-white/10 rounded-[40px] p-8 md:p-10 backdrop-blur-xl hover:border-pink-500/40 transition-all duration-500"
            >

              <div className="flex items-center gap-5 mb-8">

                <div className="w-20 h-20 rounded-[24px] flex items-center justify-center text-4xl bg-pink-600/20 text-pink-400 border border-white/10">
                  <FaPalette />
                </div>

                <div>

                  <h3 className="text-3xl md:text-4xl font-bold">
                    Branding & Design
                  </h3>

                  <p className="text-gray-400 mt-1">
                    Creative Brand Identity
                  </p>

                </div>

              </div>

              <div className="flex flex-wrap gap-4">

                {[
                  "Graphic Design",
                  "Branding",
                  "Logo Design",
                  "Canva Designs",
                  "Store Management",
                ].map((item, index) => (

                  <span
                    key={index}
                    className="px-5 py-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-pink-500/40 text-sm md:text-base transition-all duration-300"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* SERVICES MARQUEE */}
      <section className="py-8 overflow-hidden relative z-10">

        <Marquee
          speed={70}
          gradient={false}
          autoFill={true}
        >

          {[
            "React",
            "Next.js",
            "Shopify",
            "WordPress",
            "SEO",
            "AI Automation",
            "UI/UX",
            "Web Apps",
            "Mobile Apps",
            "Branding",
            "Digital Marketing",
          ].map((item, index) => (

            <div
              key={index}
              className="mx-6"
            >

              <div className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] text-lg font-semibold">

                {item}

              </div>

            </div>

          ))}

        </Marquee>

      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 relative z-10">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-purple-400 uppercase tracking-[5px] mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Building Modern
              Brands Through
              <span className="text-purple-500">
                {" "}Technology
              </span>
            </h2>

            <p className="text-gray-400 mt-8 text-lg leading-relaxed">
              I help businesses grow through modern websites,
              AI automation, SEO, branding, and digital systems.
            </p>

            {/* Socials */}
            <div className="flex flex-wrap gap-5 mt-10 text-3xl">

              <a href="https://wa.me/923343447256" target="_blank">
                <FaWhatsapp className="hover:text-purple-500 transition-all duration-300" />
              </a>

              <a href="https://www.instagram.com/nexuitive_official/" target="_blank">
                <FaInstagram className="hover:text-purple-500 transition-all duration-300" />
              </a>

              <a href="https://pk.linkedin.com/in/syed-osama-ali-" target="_blank">
                <FaLinkedin className="hover:text-purple-500 transition-all duration-300" />
              </a>

              <a href="https://www.facebook.com/nexuitive/" target="_blank">
                <FaFacebookF className="hover:text-purple-500 transition-all duration-300" />
              </a>

            </div>

          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
              <FaReact className="text-5xl text-cyan-400" />
              <p className="mt-4 font-semibold text-lg">
                React Development
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
              <FaShopify className="text-5xl text-green-400" />
              <p className="mt-4 font-semibold text-lg">
                Shopify Stores
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
              <FaWordpress className="text-5xl text-blue-400" />
              <p className="mt-4 font-semibold text-lg">
                WordPress
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-5xl">
                🤖
              </div>

              <p className="mt-4 font-semibold text-lg">
                AI Automation
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 relative z-10">

        <div className="max-w-5xl mx-auto">

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-xl text-center relative overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full"></div>

            <div className="relative z-10">

              <p className="text-purple-400 uppercase tracking-[5px] mb-5">
                Contact
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Let’s Build Something
                <span className="text-purple-500">
                  {" "}Powerful
                </span>
              </h2>

              <p className="text-gray-400 mt-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Ready to build your website, AI system,
                brand, or digital solution?
              </p>

              {/* Contact Details */}
              <div className="mt-10 flex flex-col gap-4 text-lg">

                <a
                  href="https://wa.me/923343447256"
                  target="_blank"
                  className="hover:text-purple-400 transition-all duration-300"
                >
                  📱 WhatsApp: 03343447256
                </a>

                <p className="text-gray-400">
                  📍 Karachi, Pakistan
                </p>

              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">

                <a
                  href="https://wa.me/923343447256"
                  target="_blank"
                >

                  <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-purple-600/40 shadow-2xl">
                    WhatsApp Me
                  </button>

                </a>

                <a href="#services">

                  <button className="border border-white/20 px-8 py-4 rounded-full hover:border-purple-500 transition-all duration-300">
                    Explore Services
                  </button>

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER MARQUEE */}
      <section className="py-6 border-y border-white/10 overflow-hidden relative z-10">

        <Marquee
          speed={100}
          gradient={false}
          autoFill={true}
        >

          {[
            "SYED OSAMA ALI",
            "WEB DEVELOPER",
            "AI SPECIALIST",
            "SEO EXPERT",
            "SHOPIFY EXPERT",
            "DIGITAL ENTREPRENEUR",
          ].map((item, index) => (

            <div
              key={index}
              className="mx-10"
            >

              <span className="text-3xl md:text-5xl font-black text-white/10 uppercase tracking-[6px]">
                {item}
              </span>

            </div>

          ))}

        </Marquee>

      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-white/10 relative z-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h3 className="text-2xl font-black">
              Syed Osama Ali
            </h3>

            <p className="text-gray-500 mt-2">
              Digital Entrepreneur • Developer • AI Specialist
            </p>

          </div>

          <div className="flex gap-6 text-gray-400 flex-wrap justify-center">

            <a
              href="https://www.instagram.com/nexuitive_official/"
              target="_blank"
              className="hover:text-purple-500 transition-all duration-300"
            >
              Instagram
            </a>

            <a
              href="https://pk.linkedin.com/in/syed-osama-ali-"
              target="_blank"
              className="hover:text-purple-500 transition-all duration-300"
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/923343447256"
              target="_blank"
              className="hover:text-purple-500 transition-all duration-300"
            >
              WhatsApp
            </a>

            <a
              href="https://www.facebook.com/nexuitive/"
              target="_blank"
              className="hover:text-purple-500 transition-all duration-300"
            >
              Facebook
            </a>

          </div>

        </div>

      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/923343447256"
        target="_blank"
        className="fixed bottom-6 right-6 z-50"
      >

        <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl shadow-green-500/40 hover:scale-110 transition-all duration-300">
          <FaWhatsapp />
        </div>

      </a>

    </main>
  );
}