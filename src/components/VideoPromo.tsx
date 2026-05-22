"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoPromo() {
  return (
    <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/hero_bg.png')" }}
      >
        <div className="absolute inset-0 bg-[#0A1C12]/70 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group cursor-pointer mb-10"
        >
          {/* Animated Glow Rings */}
          <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <div className="absolute -inset-4 border border-[#D4AF37]/30 rounded-full animate-spin-slow"></div>
          
          <div className="w-24 h-24 rounded-full bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/50 flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-500">
            <Play size={32} fill="currentColor" className="text-[#D4AF37] group-hover:text-[#0A1C12] ml-2 transition-colors duration-500" />
          </div>
        </motion.div>

        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
        >
          Experience the Taste of <br />
          <span className="text-gold-glow italic font-light">Pure Vegetarian Luxury</span>
        </motion.h2>
        
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 tracking-[0.2em] uppercase text-sm"
        >
          Watch our story
        </motion.p>
      </div>
      
      {/* Floating particles specific to video section */}
      <div className="absolute inset-0 pointer-events-none z-0">
         {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20 animate-float"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDuration: Math.random() * 4 + 3 + "s",
              animationDelay: Math.random() * 2 + "s",
            }}
          />
        ))}
      </div>
    </section>
  );
}
