"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Removed props interface for standalone usage

function PeacockFeatherSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M50 190 C 50 190, 45 100, 50 50 C 55 100, 50 190, 50 190 Z" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="50" cy="40" r="15" fill="#003366" />
      <circle cx="50" cy="40" r="10" fill="#008080" />
      <circle cx="50" cy="40" r="6" fill="#00BFFF" />
      <path d="M50 190 C 30 150, 10 120, 50 30" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M50 190 C 70 150, 90 120, 50 30" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 2" />
      <path d="M50 190 C 40 160, 20 130, 50 35" stroke="#228B22" strokeWidth="1" />
      <path d="M50 190 C 60 160, 80 130, 50 35" stroke="#228B22" strokeWidth="1" />
    </svg>
  );
}

export default function IntroScreen() {
  const [isSwiped, setIsSwiped] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Lock body scroll while intro is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleDragEnd = (event: any, info: any) => {
    // If user dragged upwards by more than 50px or threw it up with velocity
    if (info.offset.y < -50 || info.velocity.y < -500) {
      setIsSwiped(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1500); // Wait for transition to finish
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: isSwiped ? 0 : 1, y: isSwiped ? "-100vh" : 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#030906] flex flex-col items-center justify-center overflow-hidden touch-none"
        >
          {/* Draggable Container to capture swipe anywhere on screen */}
          <motion.div
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-10 flex flex-col"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/intro_bg.jpg"
                alt="Intro Background"
                fill
                priority
                className="object-cover object-center pointer-events-none"
                onError={(e) => {
                  // Fallback in case user hasn't uploaded image yet
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none"></div>
            </div>

            {/* Logo at the top center */}
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 pointer-events-none z-20"
            >
              <Image
                src="/images/vrindavan logo.png"
                alt="Vrindavan Logo"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              />
            </motion.div>

            {/* Swipe Up Indicator at the bottom */}
            {!isSwiped && (
              <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-6 h-10 border-2 border-[#D4AF37]/50 rounded-full flex justify-center p-1 mb-2">
                  <motion.div 
                    className="w-1 h-2 bg-[#D4AF37] rounded-full"
                    animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-semibold">Swipe Up</span>
              </motion.div>
            )}

            {/* Floating Peacock Feather animation on swipe */}
            <AnimatePresence>
              {isSwiped && (
                <motion.div
                  initial={{ opacity: 0, y: "50vh", scale: 0.5, rotate: -20 }}
                  animate={{ opacity: [0, 1, 0], y: "-100vh", scale: 1.5, rotate: 20 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
                >
                  <PeacockFeatherSVG className="w-32 h-64 opacity-80 filter drop-shadow-[0_0_20px_rgba(212,175,55,0.8)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
