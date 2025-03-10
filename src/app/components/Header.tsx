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
            ? "translate-y-0 opacity-100 bg-background/80 backdrop-blur-lg shadow-md"
            : "-translate-y-full opacity-0"
          }`}
      >
        <div className="container-header mx-auto px-4 py-4">
          {/* Web Navigation */}
          <div className="flex items-center justify-between w-full">
            {/* Center-aligned navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex items-center space-x-6">
                <Link href="/" className="hover:text-[#ECDFCC] transition-colors">
                  Home
                </Link>
                <a
                  href="#portfolio"
                  className="hover:text-[#ECDFCC] transition-colors"
                  
                >
                  Portfolio
                </a>
                <a
                  href="#about"
                  className="hover:text-[#ECDFCC] transition-colors"
                  
                >
                  About
                </a>
                <a
                  href="#services"
                  className="hover:text-[#ECDFCC] transition-colors"
                >
                  Services
                </a>
              </nav>
            </div>

            {/* Right-aligned icons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                <Link href="https://instagram.com" target="_blank">
                  <Instagram className="w-5 h-5 hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-[#ECDFCC] hover:text-[#ECDFCC] transition-colors">
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-[#ECDFCC]" />
              ) : (
                <Menu className="h-5 w-5 text-[#ECDFCC]" />
              )}
            </Button>
            <div className="flex items-center space-x-4">
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="w-5 h-5 text-[#ECDFCC]" />
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/80 backdrop-blur-lg shadow-md">
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