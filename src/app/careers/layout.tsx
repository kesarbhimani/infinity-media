import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "../components/Header"; // Import Header
import { Playfair_Display, Montserrat } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});


export const metadata: Metadata = {
  title: "Careers - Infinity Media",
  description: "Careers page for Infinity Media",
};

export default function CareersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header /> {/* Use static header for hiring page */}
      <main>{children}</main>
    </>
  );
}
