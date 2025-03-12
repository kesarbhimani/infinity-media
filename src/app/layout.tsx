import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
// We'll conditionally render the Header in each page/layout as needed
// and not in the root layout

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Infinity Media",
  description: "Creative media solutions for your business",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} font-sans`}>
        {/* Removed the Header from here since it will be included in specific layouts/pages */}
        {children}
        <Footer />
      </body>
    </html>
  );
}