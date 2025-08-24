"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollProgress from "./ScrollProgress";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close on outside click or scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest("nav") === null) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <ScrollProgress />
      <nav>
        <div className="navbar-container">
          {/* Desktop Menu */}
          <ul className="nav-links desktop-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>

          {/* Mobile Menu */}
          {isMobileView && (
            <AnimatePresence>
              {isMobileMenuOpen && (
                <mul
                  className="nav-links mobile-menu"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                >
                  <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                  <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                  <li><a href="#blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</a></li>
                </mul>
              )}
            </AnimatePresence>
          )}

          {/* Hamburger / Cross Button */}
          <div
            className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
