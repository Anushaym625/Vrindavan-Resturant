"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Users, Sparkles, Flame, Clock, ChefHat } from "lucide-react";

const features = [
  { icon: <Leaf />, title: "100% Pure Veg", desc: "Strictly vegetarian kitchen with fresh ingredients." },
  { icon: <ShieldCheck />, title: "Hygienic Kitchen", desc: "Highest standards of cleanliness and food safety." },
  { icon: <Users />, title: "Family Friendly", desc: "Warm and welcoming ambiance for all ages." },
  { icon: <Sparkles />, title: "Premium Ambience", desc: "Luxurious dining environment for special moments." },
  { icon: <Flame />, title: "Authentic Taste", desc: "Traditional recipes with perfect spice blends." },
  { icon: <ChefHat />, title: "Expert Chefs", desc: "Masters of Indian & Chinese cuisines." },
  { icon: <Clock />, title: "Fast Service", desc: "Prompt service without compromising quality." },
];

export default function Features() {
  return (
    <section className="py-24 bg-forest-800 relative">
      <div className="absolute inset-0 bg-[#D4AF37]/5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-4 inline-flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            Why Choose Us
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            The Vrindavan <span className="text-gold-glow italic font-light">Promise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card p-8 rounded-xl group ${idx === 6 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
            >
              <div className="w-14 h-14 rounded-full bg-[#102B1B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0A1C12] transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
