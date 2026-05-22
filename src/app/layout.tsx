import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vrindavan Resto Cafe | Pure Vegetarian Fine Dining in Bengaluru",
  description: "Experience authentic South Indian, North Indian, Chinese, and Tandoori pure vegetarian fine dining at Vrindavan Resto Cafe in Bengaluru. Premium luxury dining.",
  keywords: [
    "Best Veg Restaurant in Bengaluru",
    "Pure Veg Hotel in Bangalore",
    "Vegetarian Fine Dining Bengaluru",
    "South Indian Restaurant Bangalore",
    "North Indian Veg Restaurant Bangalore",
    "Chinese Veg Restaurant Bangalore",
    "Tandoori Veg Restaurant Bangalore",
    "Family Restaurant in Bengaluru",
    "Vrindavan Resto Cafe"
  ],
  authors: [{ name: "Vrindavan Resto Cafe" }],
  openGraph: {
    title: "Vrindavan Resto Cafe | Premium Pure Vegetarian Dining",
    description: "Authentic pure vegetarian fine dining experience in Bengaluru. South Indian, North Indian, Chinese & Tandoori.",
    type: "website",
    locale: "en_IN",
    siteName: "Vrindavan Resto Cafe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-forest-800 text-foreground">
        {children}
      </body>
    </html>
  );
}
