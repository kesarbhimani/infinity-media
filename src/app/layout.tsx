import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  title: "Infinity Media - A choice of your creation",
  description: "Professional wedding and event video editing services, delivering cinematic highlights, traditional full films, teasers, and social media reels. Capture your love story with stunning visuals and heartfelt storytelling. Book now for high-quality video editing that brings your memories to life!",
  openGraph: {
    title: "Infinity Media - A choice of your creation",
    description: "Professional wedding and event video editing services, delivering cinematic highlights, traditional full films, teasers, and social media reels. Capture your love story with stunning visuals and heartfelt storytelling. Book now for high-quality video editing that brings your memories to life!",
    images: [
      {
        url: "/images/thumbnail-image.webp",
        width: 1200,
        height: 630,
        alt: "Infinity Media - A choice of your creation",
      },
    ],
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}