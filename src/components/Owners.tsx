"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const owners = [
  {
    name: "Vikram Singhania",
    designation: "Founder & CEO",
    photo: "/images/owner1.png",
    description: "Visionary behind Vrindavan, bringing authentic taste to the modern dining space."
  },
  {
    name: "Rohan Desai",
    designation: "Co-Founder & Head Chef",
    photo: "/images/owner2.png",
    description: "Master of spices, ensuring every dish meets the highest culinary standards."
  },
  {
    name: "Priya Sharma",
    designation: "Director of Hospitality",
    photo: "/images/owner3.png",
    description: "Dedicated to creating an unforgettable and luxurious experience for every guest."
  }
];

export default function Owners() {
  return (
    <section className="py-24 bg-[#050E09] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-4 inline-flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            The Team
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Meet Our <span className="text-gold-glow italic font-light">Founders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {owners.map((owner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden rounded-xl glass-panel p-2">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={owner.photo}
                    alt={owner.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C12] via-transparent to-transparent opacity-80"></div>
                </div>
              </div>
              <div className="text-center px-4">
                <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-[#D4AF37] transition-colors">{owner.name}</h3>
                <p className="text-[#D4AF37] text-sm uppercase tracking-widest font-semibold mb-4">{owner.designation}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{owner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
