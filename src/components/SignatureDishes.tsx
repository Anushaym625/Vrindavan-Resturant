"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DishModel from "./DishModel";

const categories = [
  { id: "south", name: "South Indian", description: "Authentic spices and crispy dosas straight from the heart of South India." },
  { id: "north", name: "North Indian", description: "Rich, creamy gravies and aromatic spices for a royal feast." },
  { id: "chinese", name: "Chinese Veg", description: "Wok-tossed perfection with the perfect balance of sweet, spicy, and tangy." },
  { id: "tandoori", name: "Tandoori", description: "Smoky, charred, and marinated to perfection in our traditional clay oven." },
];

const dishes = {
  south: { name: "Masala Dosa", texture: "/images/dosa.png" },
  north: { name: "Paneer Butter Masala", texture: "/images/paneer.png" },
  chinese: { name: "Gobi Manchurian", texture: "/images/gobi.png" },
  tandoori: { name: "Tandoori Platter", texture: "/images/tandoori.png" },
};

export default function SignatureDishes() {
  const [activeTab, setActiveTab] = useState("north");
  
  return (
    <section id="menu" className="py-24 bg-[#050E09] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-4 inline-flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            Our Menu
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Signature <span className="text-gold-glow italic font-light">Dishes</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* 3D Viewer */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-3xl -z-10"></div>
            
            {/* We key the AnimatePresence by activeTab to trigger re-mount of 3D model if needed, 
                but to avoid WebGL context loss, it's better to just keep it mounted and change the prop. */}
            <div className="glass-panel rounded-2xl p-4 relative overflow-hidden">
              <div className="absolute top-4 left-4 z-10 glass-card px-4 py-2 rounded-full border border-[#D4AF37]/30">
                <span className="text-[#D4AF37] font-semibold text-sm">Interactive 3D</span>
              </div>
              <p className="absolute bottom-4 text-center w-full z-10 text-xs text-gray-400 uppercase tracking-widest">
                Drag to rotate
              </p>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <DishModel textureUrl={dishes[activeTab as keyof typeof dishes].texture} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Categories and Info */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 uppercase tracking-wider ${
                    activeTab === cat.id 
                      ? "bg-[#D4AF37] text-[#050E09] shadow-[0_0_15px_rgba(212,175,55,0.4)]" 
                      : "glass-card text-gray-300 hover:text-[#D4AF37] border border-transparent hover:border-[#D4AF37]/50"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-8 rounded-xl relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 text-[120px] font-serif text-[#D4AF37]/5 font-bold italic pointer-events-none">
                  {categories.find(c => c.id === activeTab)?.name.charAt(0)}
                </div>
                
                <h3 className="text-3xl font-serif text-[#D4AF37] mb-4">
                  {dishes[activeTab as keyof typeof dishes].name}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  {categories.find(c => c.id === activeTab)?.description}
                </p>
                
                <a href="#menu" className="inline-block btn-gold-outline px-8 py-3 rounded-sm text-sm uppercase tracking-widest w-full md:w-auto text-center">
                  Explore Full Menu
                </a>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}
