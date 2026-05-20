"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services & Products", href: "/services" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md py-2 md:py-4 border-b border-border-linen/40 shadow-sm"
          : "bg-white/60 backdrop-blur-sm py-3 md:py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Elegant Logo Image */}
        <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="/logo.png"
            alt="Ink Well Colour Crafts Studio Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center md:space-x-4 lg:space-x-8 xl:space-x-12 ml-auto justify-end">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative font-montserrat md:text-[10px] lg:text-xs md:tracking-[0.1em] lg:tracking-widest text-text-secondary hover:text-logo-blue transition-colors duration-300 uppercase py-1 whitespace-nowrap"
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-logo-blue animate-[fade-in-up_0.3s_ease]" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`font-montserrat md:text-[10px] lg:text-xs md:tracking-[0.1em] lg:tracking-widest uppercase md:px-4 md:py-2 lg:px-6 lg:py-2.5 border border-logo-blue rounded-xl transition-all duration-300 hover:shadow-md whitespace-nowrap ${
              pathname === "/contact"
                ? "bg-logo-blue text-white font-semibold"
                : "text-logo-blue hover:bg-logo-blue hover:text-white"
            }`}
          >
            Inquire Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              isOpen ? "transform rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed top-16 md:top-[72px] left-0 w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-72px)] bg-white border-t border-border-linen/30 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-center font-montserrat text-xs sm:text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isActive ? "text-logo-blue font-bold" : "text-text-secondary hover:text-logo-blue"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`max-w-xs w-full text-center font-montserrat text-xs tracking-widest uppercase px-6 py-3 border border-logo-blue rounded-xl transition-all duration-300 ${
              pathname === "/contact"
                ? "bg-logo-blue text-white font-bold"
                : "text-logo-blue hover:bg-logo-blue hover:text-white"
            }`}
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
