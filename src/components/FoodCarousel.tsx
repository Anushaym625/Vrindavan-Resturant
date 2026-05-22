"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf } from "lucide-react";
import { useEffect, useState } from "react";

const showcases = [
  { id: 'dosa', name: 'Masala Dosa', category: 'South Indian', desc: 'Golden, crispy, and infused with traditional spices. Served with fresh coconut chutney.', tex: '/images/dosa.png' },
  { id: 'idli', name: 'Idli Vada', category: 'South Indian', desc: 'Soft, steaming rice cakes paired with a crunchy lentil doughnut. A morning classic.', tex: '/images/idli_vada.png' },
  { id: 'meals', name: 'South Indian Thali', category: 'South Indian', desc: 'A grand feast of vibrant flavors, served traditionally on a banana leaf.', tex: '/images/3d1.png' },
  { id: 'paneer', name: 'Paneer Butter Masala', category: 'North Indian', desc: 'Soft cottage cheese cubes simmered in a rich, creamy tomato gravy.', tex: '/images/paneer.png' },
  { id: 'naan', name: 'Butter Naan', category: 'North Indian', desc: 'Freshly baked flatbread from the tandoor, slathered with rich butter.', tex: '/images/butter_naan.png' },
  { id: 'biryani', name: 'Vegetable Biryani', category: 'North Indian', desc: 'Aromatic basmati rice cooked with exotic spices and fresh garden vegetables.', tex: '/images/veg_biryani.png' },
  { id: 'gobi', name: 'Gobi Manchurian', category: 'Chinese', desc: 'Crispy cauliflower florets tossed in a dark, umami-rich soy and garlic sauce.', tex: '/images/gobi.png' },
  { id: 'noodles', name: 'Hakka Noodles', category: 'Chinese', desc: 'Wok-tossed perfection with crunchy vegetables and smoky soy flavors.', tex: '/images/3d3.png' },
  { id: 'rice', name: 'Fried Rice', category: 'Chinese', desc: 'Classic comfort food, expertly wok-tossed for that authentic smoky aroma.', tex: '/images/fried_rice.png' },
  { id: 'platter', name: 'Tandoori Platter', category: 'Tandoori', desc: 'An assorted selection of our finest charcoal-grilled vegetarian delicacies.', tex: '/images/tandoori.png' },
  { id: 'tikka', name: 'Paneer Tikka', category: 'Tandoori', desc: 'Marinated paneer chunks charred to smoky perfection in our clay oven.', tex: '/images/paneer_tikka.png' },
  { id: 'roti', name: 'Tandoori Roti', category: 'Tandoori', desc: 'Crisp on the outside, soft inside—the essential accompaniment.', tex: '/images/tandoori_roti.png' },
  { id: 'tea', name: 'Masala Chai', category: 'Beverages', desc: 'Authentic Indian spiced tea brewed to perfection in a traditional cup.', tex: '/images/masala_tea.png' },
  { id: 'curdrice', name: 'Curd Rice', category: 'South Indian', desc: 'Cooling yogurt rice tempered with mustard seeds, curry leaves, and pomegranate.', tex: '/images/curd_rice.png' },
  { id: 'palakrice', name: 'Palak Rice', category: 'North Indian', desc: 'Nutritious and vibrant spinach rice infused with aromatic whole spices.', tex: '/images/palak_rice.png' },
];

function FloatingGarnishes() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate random static properties for particles to avoid hydration mismatches
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    type: Math.random() > 0.6 ? 'leaf' : Math.random() > 0.5 ? 'chili' : 'spice',
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * -20,
    scale: 0.5 + Math.random() * 1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: p.left, top: p.top }}
          animate={{
            y: ["-20vh", "20vh", "-20vh"],
            x: ["-10vw", "10vw", "-10vw"],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.type === 'leaf' && <Leaf className="text-green-500/40 w-6 h-6" style={{ transform: `scale(${p.scale})` }} />}
          {p.type === 'chili' && <div className="w-2 h-4 bg-red-600/50 rounded-full blur-[1px]" style={{ transform: `scale(${p.scale})` }} />}
          {p.type === 'spice' && <div className="w-2 h-2 bg-yellow-500/60 rounded-sm blur-[1px]" style={{ transform: `scale(${p.scale})` }} />}
        </motion.div>
      ))}
      
      {/* Background Steam / Fog */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.2, 1, 1.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[100px]"
      />
    </div>
  );
}

export default function FoodCarousel() {
  return (
    <section className="py-16 md:py-24 bg-[#030906] relative overflow-hidden flex flex-col justify-center min-h-[80vh] md:min-h-screen">
      {/* Section Header */}
      <div className="container mx-auto px-6 relative z-10 text-center mb-16">
        <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-4 inline-flex items-center gap-4">
          <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          Culinary Journey
          <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
        </h4>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
          Explore Our <span className="text-gold-glow italic font-light">Menu</span>
        </h2>
      </div>

      <FloatingGarnishes />

      {/* Infinite Carousel Container */}
      <div className="relative w-full overflow-hidden flex z-10 py-10">
        <motion.div
          animate={{ x: ["-50%", "0%"] }} // Left to right continuous
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="flex gap-8 px-4 w-max"
        >
          {/* Duplicate the array to create a seamless loop */}
          {[...showcases, ...showcases].map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`} 
              className="glass-panel w-[280px] md:w-[400px] flex-shrink-0 rounded-3xl p-5 md:p-6 border border-[#D4AF37]/20 group hover:border-[#D4AF37]/60 transition-colors duration-500 flex flex-col"
            >
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-6 border-4 border-[#102B1B] shadow-2xl shadow-black/50 group-hover:shadow-[#D4AF37]/20 transition-all duration-500">
                <Image
                  src={item.tex}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none"></div>
              </div>
              
              <div className="text-center mt-auto">
                <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-2xl font-serif text-white mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient fades for the edges to blend the scroll */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#030906] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#030906] to-transparent z-20 pointer-events-none"></div>
    </section>
  );
}
