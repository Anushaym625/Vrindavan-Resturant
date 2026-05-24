"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#030906] relative pt-24 border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_30px_#D4AF37]"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Details & Map */}
          <div>
            <div className="mb-10">
              <h2 className="text-4xl font-serif font-bold text-white mb-4">
                Visit <span className="text-gold-glow italic font-light">Us</span>
              </h2>
              <p className="text-gray-400">Experience Bengaluru's finest vegetarian dining.</p>
            </div>
            
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h5 className="text-white font-semibold mb-1">Location</h5>
                  <p className="text-gray-400 text-sm">93, SBM Layout, Soladevanahali Village,<br/>Hesaraghatta, Achithnagar,<br/>Bengaluru - 560107.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h5 className="text-white font-semibold mb-1">Opening Hours</h5>
                  <p className="text-gray-400 text-sm">Everyday: 8:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <h5 className="text-white font-semibold mb-1">Reservations</h5>
                  <p className="text-gray-400 text-sm">+91 7795846699</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <a href="https://maps.app.goo.gl/JVAmiEyRqYnADJtN6?g_st=aw" target="_blank" rel="noopener noreferrer" className="block w-full h-[250px] bg-[#102B1B] rounded-xl border border-[#D4AF37]/20 flex items-center justify-center overflow-hidden group cursor-pointer relative">
               <div className="absolute inset-0 bg-[url('/images/about.png')] bg-cover opacity-30 grayscale mix-blend-overlay"></div>
               <div className="text-center relative z-10 group-hover:scale-105 transition-transform">
                 <MapPin size={32} className="text-[#D4AF37] mx-auto mb-2 group-hover:-translate-y-2 transition-transform" />
                 <span className="text-white font-semibold tracking-wide">View on Google Maps</span>
               </div>
            </a>
          </div>

          {/* Reservation Form */}
          <div className="glass-panel p-8 md:p-10 rounded-2xl relative">
            <h3 className="text-2xl font-serif text-white mb-8 border-b border-[#D4AF37]/20 pb-4">Book a Table</h3>
            
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">Name</label>
                  <input type="text" className="bg-[#050E09]/50 border border-[#D4AF37]/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Your Name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">Phone</label>
                  <input type="tel" className="bg-[#050E09]/50 border border-[#D4AF37]/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Phone Number" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">Guests</label>
                  <select className="bg-[#050E09]/50 border border-[#D4AF37]/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none">
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">Date</label>
                  <input type="date" className="bg-[#050E09]/50 border border-[#D4AF37]/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">Time</label>
                  <input type="time" className="bg-[#050E09]/50 border border-[#D4AF37]/30 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
                </div>
              </div>
              
              <button type="button" className="btn-gold mt-4 py-4 rounded-sm uppercase tracking-widest text-sm font-bold shadow-lg">
                Confirm Reservation
              </button>
            </form>
          </div>
          
        </div>
      </div>

      {/* Main Footer Bottom */}
      <div className="border-t border-[#D4AF37]/10 py-10 bg-black/40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif text-gold-glow tracking-widest font-bold">
            VRINDAVAN <span className="text-sm font-sans tracking-normal font-normal opacity-70 block -mt-1 text-white">Resto Cafe</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/vrindavan.resto.cafe?igsh=ZHV2a2EybTR3dW94" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="https://wa.me/917795846699" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors">
              <FaWhatsapp size={18} />
            </a>
            <a href="mailto:info@vrindavanresto.com" className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors">
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
        <p className="text-center text-gray-600 text-xs mt-8">
          © {new Date().getFullYear()} Vrindavan Resto Cafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
