"use client";

import { motion } from "framer-motion";
import { QrCode, Download, Smartphone } from "lucide-react";

export default function MenuQR() {
  const menuCategories = [
    "South Indian",
    "North Indian",
    "Chinese",
    "Tandoori",
    "Beverages",
    "Desserts"
  ];

  return (
    <section className="py-24 bg-forest-800 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 justify-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 max-w-xl">
            <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Digital Menu
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Scan to View <br />
              <span className="text-gold-glow italic font-light">Our Offerings</span>
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Explore our wide variety of pure vegetarian delicacies right from your smartphone. Contactless, convenient, and always up-to-date with our latest culinary creations.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {menuCategories.map((cat, idx) => (
                <span key={idx} className="glass-card px-4 py-2 rounded-full text-sm text-gray-300 border border-[#D4AF37]/20">
                  {cat}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <button className="btn-gold px-8 py-3 rounded-sm flex items-center gap-2 uppercase tracking-wide text-sm">
                <Download size={18} />
                Download PDF
              </button>
            </div>
          </div>

          {/* QR Code Card */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#D4AF37] blur-[60px] opacity-20 rounded-full"></div>
              
              <div className="glass-panel p-8 rounded-2xl border border-[#D4AF37]/30 flex flex-col items-center relative overflow-hidden group">
                
                {/* Scanning Animation Line */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] shadow-[0_0_15px_#D4AF37] z-20"
                  animate={{ y: [0, 300, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="bg-white p-4 rounded-xl mb-6 relative">
                  <QrCode size={200} className="text-[#0A1C12]" strokeWidth={1} />
                  {/* Decorative corner borders */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-[#D4AF37] rounded-tl-lg"></div>
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-[#D4AF37] rounded-tr-lg"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-[#D4AF37] rounded-bl-lg"></div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-[#D4AF37] rounded-br-lg"></div>
                </div>
                
                <div className="flex items-center gap-3 text-white">
                  <Smartphone className="text-[#D4AF37]" />
                  <p className="font-serif tracking-wide">Point your camera here</p>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
