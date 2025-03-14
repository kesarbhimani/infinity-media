"use client";
import { useState, useEffect, useCallback } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface HeaderProps {
  isStatic?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isStatic = false }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
    setShowHeader(true);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    closeMobileMenu();
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [closeMobileMenu]);

  useEffect(() => {
    if (isStatic || !isHomePage) {
      setShowHeader(true);
      return;
    }

    const handleScroll = () => {
      setShowHeader(window.innerWidth >= 768 ? window.scrollY > 50 : true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isStatic, isHomePage]);

  // Navigation link renderer
  const NavLink = ({ section, label, onClick }: { section: string, label: string, onClick?: () => void }) => {
    if (isHomePage) {
      return (
        <a
          href={`#${section}`}
          className="text-gray-800 hover:text-[#ff5252] transition-colors"
          onClick={onClick}
        >
          {label}
        </a>
      );
    }

    return (
      <Link
        href={`/#${section}`}
        className="text-gray-800 hover:text-[#ff5252] transition-colors"
        onClick={onClick}
      >
        {label}
      </Link>
    );
  };

  const MobileNavLink = ({ section, label }: { section: string, label: string }) => (
      <a
        href={isHomePage ? `#${section}` : `/#${section}`}
        className="hover:text-primary transition-colors"
        onClick={() => {
          scrollToSection(section);
        }}
      >
        {label}
      </a>
    );
  <Link href="/">
    <Image src="/images/logo.webp" alt="Logo" className="w-auto h-5" width={20} height={20} />
  </Link>
  // ...existing code...

  return (
    <header
      className={`w-full z-50 bg-white backdrop-blur-lg shadow-md transition-all duration-300 
        ${isStatic ? "static" : "fixed top-0"} 
        ${showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
    >
      <div className="container-header mx-auto px-4 py-4">
        {/* Desktop Navigation */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/">
                <Image src="/images/logo.webp" alt="Logo" width={55} height={55} className="h-8 w-auto" />
              </Link>
            </div>
          </div>

          {/* Center-aligned navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-800 hover:text-[#ff5252] transition-colors">
                Home
              </Link>
              <NavLink section="portfolio" label="Portfolio" />
              <NavLink section="about" label="About" />
              <NavLink section="services" label="Services" />
              <Link
                href="/careers"
                className="text-gray-800 hover:text-[#ff5252] transition-colors"
              >
                Careers
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex items-center justify-between md:hidden">
          <div className="flex items-center space-x-4">
            <Link href="/">
            <Image src="/images/logo.webp" alt="Logo" className="w-auto h-5" width={20} height={20} />
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white backdrop-blur-lg shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-8">
            <Link href="/" className="hover:text-primary transition-colors" onClick={closeMobileMenu}>
              Home
            </Link>
            <MobileNavLink section="portfolio" label="Portfolio" />
            <MobileNavLink section="about" label="About" />
            <MobileNavLink section="services" label="Services" />
            <Link
              href="/careers"
              className="hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Careers
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;