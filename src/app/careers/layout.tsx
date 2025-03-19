import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/Header"; // Import Header

export const metadata: Metadata = {
  title: "Careers - Infinity Media",
  description: "Explore exciting career opportunities at Infinity Media. Join our team of creative professionals and shape the future of media and technology.",
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