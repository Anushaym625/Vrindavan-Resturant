"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Leaf, Award, Utensils, Heart } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Text Animation
      gsap.from(textRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      // Image Animation
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      });

      // Cards Animation
      gsap.from(cardsRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: <Leaf size={24} className="text-[#D4AF37]" />, title: "100% Pure Veg", desc: "Authentic vegetarian recipes" },
    { icon: <Heart size={24} className="text-[#D4AF37]" />, title: "Family Dining", desc: "Perfect for all generations" },
    { icon: <Award size={24} className="text-[#D4AF37]" />, title: "Premium Quality", desc: "Fresh ingredients daily" },
    { icon: <Utensils size={24} className="text-[#D4AF37]" />, title: "Hygienic Kitchen", desc: "Top safety standards" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-forest-800 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#164028]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div ref={textRef} className="max-w-2xl">
            <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#D4AF37]"></span>
              Our Story
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              A Symphony of <br />
              <span className="text-gold-glow italic font-light">Traditional Tastes</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Welcome to Vrindavan Resto Cafe, Bengaluru's premier destination for authentic, pure vegetarian fine dining. We blend traditional recipes with a modern, luxurious ambiance to create unforgettable culinary experiences.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              From the vibrant spices of South India to the rich gravies of the North, the delicate balance of Chinese flavors, and the smoky perfection of our Tandoori delicacies—every dish is crafted with passion, hygiene, and the finest ingredients.
            </p>
            <a href="#about-more" className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold hover:text-white transition-colors flex items-center gap-2 group">
              Discover More
              <span className="w-8 h-[1px] bg-[#D4AF37] group-hover:w-12 group-hover:bg-white transition-all"></span>
            </a>
          </div>

          {/* Image & Cards */}
          <div className="relative">
            <div ref={imageRef} className="relative h-[600px] w-full rounded-sm overflow-hidden glass-panel p-2">
              <div className="relative w-full h-full rounded-sm overflow-hidden">
                <Image
                  src="/images/cafe.png"
                  alt="Vrindavan Resto Cafe Interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C12]/80 to-transparent"></div>
              </div>
            </div>

            {/* Floating Features Grid */}
            <div 
              ref={cardsRef} 
              className="absolute -bottom-10 -left-10 md:-left-20 grid grid-cols-2 gap-4 w-[calc(100%+40px)] md:w-auto"
            >
              {features.map((feature, idx) => (
                <div key={idx} className="glass-card p-6 rounded-sm flex flex-col items-start gap-3 w-40 md:w-48 group">
                  <div className="p-3 bg-[#102B1B]/80 rounded-sm border border-[#D4AF37]/20 group-hover:bg-[#164028] transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-serif font-semibold text-sm md:text-base">{feature.title}</h5>
                    <p className="text-gray-400 text-xs mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
