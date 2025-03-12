"use client";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  isStatic?: boolean;
  usesHashLinks?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isStatic = false, usesHashLinks = false }) => {

  // If isStatic is true, show header always from the start.
  const [showHeader, setShowHeader] = useState(isStatic ? true : false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    // Only apply scroll detection for non-static header (i.e. home page)
    if (isStatic) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    // Check initial scroll position
    if (window.scrollY > 50) {
      setShowHeader(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isStatic]);

  const getNavLinks = () => {
    const commonClasses = "hover:text-[#181C14] transition-colors";

    return (
      <>
        <Link href="/" className={commonClasses}>
          Home
        </Link>
        <Link href="/hiring" className={commonClasses}>
          Careers
        </Link>
        {usesHashLinks ? (
          <>
            <a href="#portfolio" className={commonClasses}>Portfolio</a>
            <a href="#about" className={commonClasses}>About</a>
            <a href="#services" className={commonClasses}>Services</a>
          </>
        ) : (
          <>
            <Link href="/#portfolio" className={commonClasses}>Portfolio</Link>
            <Link href="/#about" className={commonClasses}>About</Link>
            <Link href="/#services" className={commonClasses}>Services</Link>
          </>
        )}
      </>
    )
  };

  return (
    <>
      <header
        className={`w-full z-50 bg-white backdrop-blur-lg shadow-md transition-all duration-300 
          ${isStatic ? "static" : "fixed top-0"} 
          ${showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
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
                {getNavLinks()}
              </nav>
            </div>
          </div>

          <div className="flex items-center justify-between md:hidden">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <img src="images/logo.png" alt="Logo" className="w-auto h-5" />
              </Link>
            </div>
            <h1 className="font-playfair">
              Infinity Media
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-[#181C14] hover:text-[#181C14] transition-colors"
            >
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
              <Link href="/" className="hover:text-primary transition-colors" onClick={closeMobileMenu}>
                Home
              </Link>
              <a href="#portfolio" className="hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#services" className="hover:text-primary transition-colors">
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