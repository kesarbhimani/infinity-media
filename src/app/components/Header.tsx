"use client";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Menu, X, Instagram } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  // const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
  //   e.preventDefault();
  //   const element = document.querySelector(target);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  //   closeMobileMenu();
  // };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "translate-y-0 opacity-100 bg-white backdrop-blur-lg shadow-md"
          : "-translate-y-full opacity-0"
          }`}
      >
        <div className="container-header mx-auto px-4 py-4">
          {/* Web Navigation */}
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <Link href="/">
                  <img src="images/logo.png" alt="Logo" className="h-8" />
                </Link>
              </div>
            </div>

            {/* Center-aligned navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex items-center space-x-6">
                <Link href="/" className="hover:text-[#181C14] transition-colors">
                  Home
                </Link>
                <a
                  href="#portfolio"
                  className="hover:text-[#181C14] transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#about"
                  className="hover:text-[#181C14] transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-[#181C14] transition-colors"
                >
                  Services
                </a>
              </nav>
            </div>
          </div>

          <div className="flex items-center justify-between md:hidden">
          <div className="flex items-center space-x-4">
              <Link href="/">
                <img src="images/logo.png" alt="Logo" className="w-auto h-5" />
              </Link>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-[#181C14] hover:text-[#181C14] transition-colors">
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-[#181C14]" />
              ) : (
                <Menu className="h-5 w-5 text-[#181C14]" />
              )}
            </Button>
            
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white backdrop-blur-lg shadow-md">
            <nav className="flex flex-col items-center space-y-4 py-8">
              <Link
                href="/"
                className="hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <a
                href="#portfolio"
                className="hover:text-primary transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-primary transition-colors"
              >
                Services
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;