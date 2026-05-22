"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero_bg.png"
          alt="Luxury Vegetarian Food"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1C12]/80 via-[#0A1C12]/60 to-[#0A1C12] mix-blend-multiply" />
      </div>

      {/* Floating Particles (Simple CSS animation implementation) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#D4AF37] opacity-20 blur-[1px] animate-float"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDuration: Math.random() * 5 + 5 + "s",
              animationDelay: Math.random() * 5 + "s",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* We will use a stylized text or actual logo image here */}
          <div className="mb-6 mx-auto w-48 h-48 relative">
             <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-2xl animate-pulse"></div>
             <div className="w-full h-full flex items-center justify-center p-4">
               <Image
                 src="/images/vrindavan logo.png"
                 alt="Vrindavan Resto Cafe Logo"
                 fill
                 className="object-contain drop-shadow-2xl"
               />
             </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl"
        >
          Authentic Pure Vegetarian <br />
          <span className="text-gold-glow italic font-light">Fine Dining Experience</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-10 tracking-widest uppercase text-sm md:text-base max-w-2xl"
        >
          South Indian • North Indian • Chinese • Tandoori
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#menu" className="btn-gold px-10 py-4 rounded-sm text-sm uppercase tracking-[0.2em]">
            Explore Menu
          </a>
          <a href="#contact" className="btn-gold-outline px-10 py-4 rounded-sm text-sm uppercase tracking-[0.2em] backdrop-blur-sm">
            Reserve Table
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer hover:text-[#D4AF37] transition-colors"
      >
        <span className="text-xs uppercase tracking-widest mb-2 opacity-70">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={24} className="opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
