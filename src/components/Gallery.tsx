"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/images/hero_bg.png", alt: "Fine Dining Setup", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/images/mirrorimage.jpg", alt: "Restaurant Interior", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "/images/paneer.png", alt: "Signature Dish", span: "md:col-span-1 md:row-span-1" },
  { id: 4, src: "/images/outlookimage.jpg", alt: "Hotel Outside View", span: "md:col-span-2 md:row-span-1" },
  { id: 5, src: "/images/dosa.png", alt: "Plating Details", span: "md:col-span-1 md:row-span-1" },
  { id: 6, src: "/images/about.png", alt: "Family Dining Area", span: "md:col-span-1 md:row-span-1" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#050E09]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-4 inline-flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
            Visual Journey
            <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
          </h4>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Our <span className="text-gold-glow italic font-light">Gallery</span>
          </h2>
        </div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.span}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C12]/90 via-[#0A1C12]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <ZoomIn className="text-[#D4AF37] w-12 h-12 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <span className="text-white font-serif text-lg tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-8 right-8 text-white hover:text-[#D4AF37] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-[90vw] h-[80vh] max-w-6xl rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery Preview"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}
