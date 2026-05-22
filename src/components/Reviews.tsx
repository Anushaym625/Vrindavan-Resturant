"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Rahul Sharma", role: "Local Foodie", text: "Easily the best veg restaurant in Bengaluru. The authentic South Indian taste combined with the premium ambiance makes it a must-visit.", rating: 5 },
  { name: "Priya Desai", role: "Frequent Diner", text: "Amazing family dining experience! The hygiene standards are top-notch and the Tandoori platter is just out of this world.", rating: 5 },
  { name: "Amit Kumar", role: "Traveler", text: "Premium vegetarian fine dining at its best. The Chinese veg dishes have the perfect balance of flavors. Highly recommend the Gobi Manchurian.", rating: 5 },
  { name: "Neha Singh", role: "Food Critic", text: "A delightful fusion of traditional taste and modern luxury. The 3D menu experience is something I've never seen before in Bangalore.", rating: 5 },
  { name: "Vikram Reddy", role: "Business Owner", text: "Perfect place for hosting family dinners or business lunches. The staff is courteous and the food quality is consistently excellent.", rating: 5 },
];

export default function Reviews() {
  // Duplicate reviews for infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-[#050E09] overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-4 inline-flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Testimonials
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              What Our <span className="text-gold-glow italic font-light">Guests Say</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-2 bg-[#102B1B] px-6 py-3 rounded-full border border-[#D4AF37]/20">
            <div className="flex text-[#D4AF37]">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-white font-semibold ml-2">4.9/5</span>
            <span className="text-gray-400 text-sm ml-1">(2.5k+ Reviews)</span>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full flex overflow-x-hidden">
        {/* Gradient Masks for smooth fading on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050E09] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050E09] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {duplicatedReviews.map((review, idx) => (
            <div 
              key={idx} 
              className="glass-card min-w-[350px] md:min-w-[450px] p-8 rounded-2xl relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 text-[#D4AF37] opacity-20" size={60} />
              
              <div>
                <div className="flex text-[#D4AF37] mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-8 relative z-10 font-serif italic">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#102B1B] flex items-center justify-center text-white font-serif text-xl border border-[#D4AF37]/30">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-white font-semibold tracking-wide">{review.name}</h5>
                  <p className="text-[#D4AF37] text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
