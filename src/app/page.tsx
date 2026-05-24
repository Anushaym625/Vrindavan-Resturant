import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SignatureDishes from "@/components/SignatureDishes";
import FoodCarousel from "@/components/FoodCarousel";
import MenuQR from "@/components/MenuQR";
import Gallery from "@/components/Gallery";
import VideoPromo from "@/components/VideoPromo";
import Owners from "@/components/Owners";
import Reviews from "@/components/Reviews";
import Features from "@/components/Features";
import ContactFooter from "@/components/ContactFooter";
import IntroScreen from "@/components/IntroScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-forest-800 text-white selection:bg-[#D4AF37] selection:text-[#0A1C12]">
      {/* Intro Screen Overlay */}
      <IntroScreen />

      {/* Navbar */}
      <Navbar />
      
      {/* Sections */}
      <Hero />
      <About />
      <SignatureDishes />
      <FoodCarousel />
      <MenuQR />
      <Gallery />
      <VideoPromo />
      <Owners />
      <Features />
      <Reviews />
      <ContactFooter />
    </main>
  );
}
